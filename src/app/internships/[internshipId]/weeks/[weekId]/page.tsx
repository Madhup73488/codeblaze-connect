"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Internship } from "@/lib/internship-loader";
import api from "@/lib/api";

interface Week {
  week: number;
  title: string;
  goal: string;
  concepts: string[];
  dailyPlan: {
    days: string;
    focus: string;
    task: string;
    courseLink?: string;
  }[];
  checklist: string[];
  tips: string[];
}

const InternshipWeekPage = () => {
  const params = useParams() as { internshipId: string; weekId: string };
  const { internshipId, weekId } = params;
  const [internship, setInternship] = useState<Internship | null>(null);
  const [week, setWeek] = useState<Week | null>(null);

  useEffect(() => {
    if (!internshipId) return;
    const fetchInternship = async () => {
      const internshipData = await api.get(`/api/internships/${internshipId}`);
      setInternship(internshipData);
      if (internshipData && internshipData.weeks) {
        const weekData = internshipData.weeks.find(
          (w: Week) => w.week.toString() === weekId
        );
        setWeek(weekData);
      }
    };
    fetchInternship();
  }, [internshipId, weekId]);

  if (!internship || !week) {
    return null;
  }

  return (
    <div className="max-w-[100%] px-4 py-8 bg-white dark:bg-slate-800 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {week.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{week.goal}</p>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Concepts Covered
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {week.concepts &&
            Array.isArray(week.concepts) &&
            week.concepts.map((concept: string, index: number) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {concept}
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Daily Plan
        </h3>
        <div className="space-y-4">
          {week.dailyPlan &&
            Array.isArray(week.dailyPlan) &&
            week.dailyPlan.map((day, index: number) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 dark:bg-slate-700"
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  Days: {day.days}
                </p>
                <p>
                  <span className="font-semibold">Focus:</span> {day.focus}
                </p>
                <p>
                  <span className="font-semibold">Task:</span> {day.task}
                </p>
                {day.courseLink && (
                  <a
                    href={day.courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Course Material
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Checklist
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {week.checklist &&
            Array.isArray(week.checklist) &&
            week.checklist.map((item: string, index: number) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {item}
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Tips
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {week.tips &&
            Array.isArray(week.tips) &&
            week.tips.map((tip: string, index: number) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">
                {tip}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default InternshipWeekPage;
