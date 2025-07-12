'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Check, Clipboard, Lightbulb, Target, BookOpen, Video, Code } from 'lucide-react';
import api from '@/lib/api';

const iconMap: { [key: string]: React.ElementType } = {
  Check,
  Clipboard,
  Lightbulb,
  Target,
  BookOpen,
  Video,
  Code,
};

const InternshipWeekPage = () => {
  const params = useParams() as { internshipId: string; weekId: string };
  const { internshipId, weekId } = params;
  const [weekData, setWeekData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!internshipId || !weekId) return;

    const fetchWeekData = async () => {
      setLoading(true);
      const allInternships = await api.get('/api/internships');
      if (allInternships && Array.isArray(allInternships)) {
        const currentInternship = allInternships.find(internship => internship.id === internshipId);
        if (currentInternship && currentInternship.weeks) {
          const currentWeek = currentInternship.weeks.find((week: any) => week.week.toString() === weekId);
          setWeekData(currentWeek);
        }
      }
      setLoading(false);
    };

    fetchWeekData();
  }, [internshipId, weekId]);

  if (loading) {
    return <div className="text-center text-gray-500 dark:text-gray-400">Loading...</div>;
  }

  if (!weekData) {
    return <div className="text-center text-red-500 dark:text-red-400">Week data not found.</div>;
  }

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{weekData.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{weekData.goal}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-500" />
              Concepts
            </h2>
            <ul className="space-y-2">
              {weekData.concepts?.map((concept: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{concept}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Clipboard className="w-6 h-6 mr-2 text-purple-500" />
              Daily Plan
            </h2>
            <div className="space-y-4">
              {weekData.dailyPlan?.map((day: any, index: number) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1">{day.days}: {day.focus}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{day.task}</p>
                  {day.courseLink && (
                    <a href={day.courseLink} className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Go to course
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Check className="w-6 h-6 mr-2 text-green-500" />
              Checklist
            </h2>
            <ul className="space-y-2">
              {weekData.checklist?.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/50 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Tips
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              {weekData.tips?.map((tip: string, index: number) => (
                <li key={index} className="text-yellow-700 dark:text-yellow-200">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipWeekPage;
