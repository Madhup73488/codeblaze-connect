import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Star,
  Target,
} from "lucide-react";
import { getInternshipWeek } from "@/lib/internship-loader";

interface WeekPageProps {
  params: {
    internshipId: string;
    weekId: string;
  };
}

const WeekPage = async ({
  params,
}: {
  params: { internshipId: string; weekId: string };
}) => {
  const weekId = parseInt(params.weekId, 10);
  const weekData = await getInternshipWeek(params.internshipId, weekId);

  if (!weekData) {
    return <div>Week not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 h-full">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
              {weekData.week}
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Week {weekData.week}: {weekData.title}
            </h1>
          </div>
          <div className="flex items-start gap-3">
            <Target className="text-blue-500 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {weekData.goal}
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl">
            <BookOpen className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Key Concepts to Master
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {weekData.concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Star
                  className="text-emerald-600 dark:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {concept}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Plan Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
            <Calendar className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Daily Plan & Resources
          </h2>
        </div>
        <div className="space-y-6">
          {weekData.dailyPlan.map((day, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg px-3 py-1 text-sm font-semibold">
                  Day {day.days}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {day.focus}
                </h3>
              </div>
              {day.courseLink && (
                <div className="mb-3">
                  <a
                    href={day.courseLink}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Course Resource
                  </a>
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {day.task}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl">
            <CheckCircle className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Week {weekData.week} Checklist
          </h2>
        </div>
        <div className="space-y-3">
          {weekData.checklist.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-700/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-orange-400 rounded-lg flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition-colors cursor-pointer">
                  <CheckCircle
                    className="text-white opacity-0 hover:opacity-100"
                    size={16}
                  />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      {weekData.tips && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-xl">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Pro Tips for Success
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {weekData.tips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-700/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <Lightbulb
                    className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {tip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekPage;
