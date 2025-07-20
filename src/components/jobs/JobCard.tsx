import React from "react";
import Image from "next/image";
import { MapPin, Briefcase, IndianRupee, ExternalLink } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  company_logo_url: string;
  location: string;
  work_type: string;
  employment_type: string;
  salary_min: string;
  salary_max: string;
  skills: string[] | null;
  application_url: string;
  featured: boolean;
  createdAt: string;
}

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <Image
            src={job.company_logo_url}
            alt={`${job.company} logo`}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {job.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            {job.location}
          </div>
          <div className="flex items-center">
            <IndianRupee size={16} className="mr-2" />
            {`₹${Number(job.salary_min) / 100000}L - ₹${
              Number(job.salary_max) / 100000
            }L`}
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2" />
            {job.employment_type}
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2" />
            {job.work_type}
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Posted on {new Date(job.createdAt).toLocaleDateString()}
        </div>
      </div>
      <a
        href={job.application_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Apply Now <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  );
};
