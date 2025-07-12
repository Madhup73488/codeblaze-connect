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
      if (token) {
        try {
          const userProfile = await api.get("/connect/user/profile", true);
          if (userProfile) {
            const courseMapping = await api.get('/api/course-mapping');
            
            let accessibleCourseIds = userProfile.accessible_course_ids || [];
            if (userProfile.accessible_internship_ids) {
              userProfile.accessible_internship_ids.forEach((internshipId: string) => {
                if (courseMapping[internshipId]) {
                  accessibleCourseIds = [...new Set([...accessibleCourseIds, ...courseMapping[internshipId]])];
                }
              });
            }
            
            const updatedUserProfile = { ...userProfile, accessible_course_ids: accessibleCourseIds };
            localStorage.setItem("user", JSON.stringify(updatedUserProfile));
            setUser(updatedUserProfile);
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

  const login = (token: string, rememberMe: boolean) => {
    const options = rememberMe ? { expires: 7 } : {};
    Cookies.set("auth_token", token, options);
    const decodedToken = jwt.decode(token) as {
      userId: string;
      name: string;
      email: string;
    };
    const userData = {
      id: decodedToken.userId,
      name: decodedToken.name,
      email: decodedToken.email,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    window.location.href = "/dashboard";
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
