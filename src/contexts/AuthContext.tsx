"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import api from '@/lib/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    email: string;
    phone?: string;
    accessible_course_ids?: string[];
    accessible_internship_ids?: string[];
  } | null;
  login: (token: string, rememberMe: boolean) => void;
  logout: () => void;
  loading: boolean;
  fetchUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    id: string;
    username: string;
    email: string;
    phone?: string;
    accessible_course_ids?: string[];
    accessible_internship_ids?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = Cookies.get("auth_token");
    if (token) {
      try {
        const userProfile = await api.get("/connect/user/profile");
        if (userProfile) {
          const courseMapping = await api.get('/api/course-mapping');
          
          let accessibleCourseIds = userProfile.accessible_course_ids || [];
          if (userProfile.accessible_internship_ids) {
            const updatedInternshipIds = userProfile.accessible_internship_ids.map((id: string) => {
              if (id === 'a1b2c3d4-e5f6-7890-1234-567890abcdef') {
                return 'full-stack-web-development-internship';
              }
              if (id === 'b2c3d4e5-f6a7-8901-2345-67890abcdef1') {
                return 'frontend-development-engineer-intern';
              }
              return id;
            });

            updatedInternshipIds.forEach((internshipId: string) => {
              if (courseMapping[internshipId]) {
                accessibleCourseIds = [...new Set([...accessibleCourseIds, ...courseMapping[internshipId]])];
              }
            });
          }
          
          const updatedUserProfile = { ...userProfile, accessible_course_ids: accessibleCourseIds };
          localStorage.setItem("user", JSON.stringify(updatedUserProfile));
          setUser(updatedUserProfile);

          const allCourses = await api.get('/api/courses');
          const allInternships = await api.get('/api/internships/all');
          const userProgress = await api.get('/api/connect/user/progress');

          localStorage.setItem('courses', JSON.stringify(allCourses));
          localStorage.setItem('internships', JSON.stringify(allInternships));
          localStorage.setItem('courseMapping', JSON.stringify(courseMapping));
          if (userProgress) {
            localStorage.setItem('progress', JSON.stringify(userProgress.data));
          }
          setIsAuthenticated(true);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Failed to fetch user profile", error);
        Cookies.remove("auth_token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadUserFromStorage = async () => {
      const cachedUser = localStorage.getItem("user");
      if (cachedUser) {
        setUser(JSON.parse(cachedUser));
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        await fetchUser();
      }
    };
    loadUserFromStorage();
  }, []);

  const login = (token: string, rememberMe: boolean) => {
    const options = rememberMe ? { expires: 7 } : {};
    Cookies.set("auth_token", token, options);
    localStorage.removeItem("user");
    window.location.href = "/dashboard";
  };

  const logout = () => {
    Cookies.remove("auth_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  if (loading || (isInitialRender && !isAuthenticated)) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
