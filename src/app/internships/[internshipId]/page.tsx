"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Internship } from "@/lib/internship-loader";
import api from "@/lib/api";

const InternshipPage = () => {
  const params = useParams() as { internshipId: string };
  const { internshipId } = params;
  const [internship, setInternship] = useState<Internship | null>(null);

  useEffect(() => {
    if (!internshipId) return;
    const fetchInternship = async () => {
      const allInternships = await api.get("/api/internships/all");
      const internshipData = allInternships.find(
        (i: Internship) => i.id === internshipId
      );
      setInternship(internshipData);
    };
    fetchInternship();
  }, [internshipId]);

  if (!internship) {
    return null;
  }

  return (
    <div className="max-w-4xl px-4 py-8 bg-white dark:bg-slate-800 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {internship.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {internship.description}
      </p>
    </div>
  );
};

export default InternshipPage;
