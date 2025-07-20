import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import api from "@/lib/api";
import DashboardClient from "./DashboardClient";

const Dashboard = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/login");
  }

  const [user, allCourses, allInternships, userProgress] = await Promise.all([
    api.get("/connect/user/profile"),
    api.get("/api/courses"),
    api.get("/api/internships/all"),
    api.get("/api/connect/user/progress"),
  ]);

  return (
    <DashboardClient
      user={user}
      allCourses={allCourses}
      allInternships={allInternships}
      initialProgress={userProgress}
    />
  );
};

export default Dashboard;
