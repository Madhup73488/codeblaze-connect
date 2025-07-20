"use client";
import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import { JobCard } from "@/components/jobs/JobCard";
import { JobCardSkeleton } from "@/components/jobs/JobCardSkeleton";
import { Pagination } from "@/components/ui/pagination";

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

const JobPortalPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/api/jobs?page=${currentPage}`);
        if (response && response.jobs) {
          setJobs(response.jobs);
          setTotalPages(response.totalPages);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Job Portal
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <JobCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default JobPortalPage;
