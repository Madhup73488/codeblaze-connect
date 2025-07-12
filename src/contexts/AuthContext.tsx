"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import api from '@/lib/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    accessible_course_ids?: string[];
    accessible_internship_ids?: string[];
  } | null;
  login: (token: string, rememberMe: boolean) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    accessible_course_ids?: string[];
    accessible_internship_ids?: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      const token = Cookies.get("auth_token");
      const cachedUser = localStorage.getItem("user");

      if (token && cachedUser) {
        setUser(JSON.parse(cachedUser));
        setIsAuthenticated(true);
        setLoading(false);
      } else if (token) {
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
    };

    loadUserFromStorage();
  }, []);

  const login = async (token: string, rememberMe: boolean) => {
    const options = rememberMe ? { expires: 7 } : {};
    Cookies.set("auth_token", token, options);
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

        localStorage.setItem('courses', JSON.stringify(allCourses));
        localStorage.setItem('internships', JSON.stringify(allInternships));
        localStorage.setItem('courseMapping', JSON.stringify(courseMapping));
        setIsAuthenticated(true);
        window.location.href = "/dashboard";
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
  };

  const logout = () => {
    Cookies.remove("auth_token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
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
