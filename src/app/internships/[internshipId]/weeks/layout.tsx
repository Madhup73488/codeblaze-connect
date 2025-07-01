import React from "react";
import Link from "next/link";

const InternshipLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { internshipId: string };
}) => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <aside className="w-80 flex flex-col bg-white dark:bg-slate-900 shadow-xl border-r border-gray-200 dark:border-gray-700">
        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-2xl font-bold text-white mb-2">
            Internship Program
          </h2>
          <p className="text-blue-100 text-sm">12-Week Learning Journey</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-3">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <Link
                  href={`/internships/full-stack-developer/weeks/${i + 1}`}
                  className="group flex items-center p-4 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4 group-hover:scale-105 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Week {i + 1}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Learning Module
                    </div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto h-full max-w-6xl">{children}</div>
      </main>
    </div>
  );
};

export default InternshipLayout;
