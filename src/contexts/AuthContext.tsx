"use client";
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import api from '@/lib/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
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
    name: string;
    email: string;
    phone?: string;
    accessible_course_ids?: string[];
    accessible_internship_ids?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    const token = Cookies.get("auth_token");
    if (token) {
      try {
        const userProfile = await api.get("/connect/user/profile");
        if (userProfile) {
          const courseMapping = await api.get('/api/course-mapping');
          
          let accessibleCourseIds = userProfile.accessible_course_ids || [];
          let updatedInternshipIds = userProfile.accessible_internship_ids || [];

          if (userProfile.accessible_internship_ids) {
            const internshipIdToSlug = {
              'a1b2c3d4-e5f6-7890-1234-567890abcdef': 'full-stack-web-development-internship',
              'b2c3d4e5-f6a7-8901-2345-67890abcdef1': 'frontend-development-engineer-intern',
              'c3d4e5f6-a7b8-9012-3456-7890abcdef12': 'backend-development-internship',
              'd4e5f6a7-b8c9-0123-4567-890abcdef123': 'python-full-stack-development-internship',
              'e5f6a7b8-c9d0-1234-5678-90abcdef1234': 'java-full-stack-development-internship',
            };

            updatedInternshipIds = userProfile.accessible_internship_ids.map(
              (id: string) => internshipIdToSlug[id] || id
            );

            updatedInternshipIds.forEach((internshipId: string) => {
              if (courseMapping[internshipId]) {
                accessibleCourseIds = [...new Set([...accessibleCourseIds, ...courseMapping[internshipId]])];
              }
            });
          }
          
          const updatedUserProfile = { ...userProfile, accessible_course_ids: accessibleCourseIds, accessible_internship_ids: updatedInternshipIds };
          localStorage.setItem("user", JSON.stringify(updatedUserProfile));
          setUser(updatedUserProfile);

          const allCourses = await api.get('/api/courses');
          const allInternships = await api.get('/api/internships/all');

          localStorage.setItem('courses', JSON.stringify(allCourses));
          localStorage.setItem('internships', JSON.stringify(allInternships));
          localStorage.setItem('courseMapping', JSON.stringify(courseMapping));
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
  }, []);

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
  }, [fetchUser]);

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

  const authContextValue = useMemo(() => ({
    isAuthenticated,
    user,
    login,
    logout,
    loading,
    fetchUser,
  }), [isAuthenticated, user, loading, fetchUser]);

  if (loading || (isInitialRender && !isAuthenticated)) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authContextValue}>
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
