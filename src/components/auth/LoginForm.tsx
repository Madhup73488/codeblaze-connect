"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Users,
  BookOpen,
  Award,
  Zap,
  Target,
} from "lucide-react";
import { AuthContext } from "@/contexts/AuthContext";
import api from "@/lib/api";
import logo from "@/../public/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await api.post("/connect/auth/login", {
        email,
        password,
        rememberMe,
      });

      if (data && data.token) {
        if (authContext) {
          authContext.login(data.token, rememberMe);
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred during login.");
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email address
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 sm:px-4 sm:py-3 mt-2 text-white bg-gray-800 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gray-300 text-sm sm:text-base"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 sm:px-4 sm:py-3 mt-2 text-white bg-gray-800 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gray-300 text-sm sm:text-base"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="block ml-2 text-xs sm:text-sm text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div className="text-xs sm:text-sm">
         
        </div>
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2.5 sm:py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-[1.02] transition-all duration-200"
        >
          Sign in to CodeBlaze
        </button>
      </div>
      <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <p>By signing in, you agree to our</p>
        <div className="space-x-2 sm:space-x-4 mt-1 flex flex-wrap justify-center">
          <Link
            href="/terms"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Terms of Service
          </Link>
          <span>and</span>
          <Link
            href="/privacy"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

const CarouselSlide = ({
  icon: Icon,
  title,
  description,
  isActive,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive: boolean;
}) => (
  <div
    className={`transition-all duration-500 w-full ${
      isActive
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-4 absolute"
    }`}
  >
    <div className="text-center space-y-3 sm:space-y-4 flex flex-col items-center justify-center">
      <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/80 leading-relaxed max-w-xs sm:max-w-md mx-auto text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CodeBlazeLoginPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Target,
      title: "Bridge the Gap",
      description:
        "Transform from college graduate to industry-ready professional with our comprehensive learning platform designed to fill the skills gap.",
    },
    {
      icon: Code,
      title: "Hands-on Learning",
      description:
        "Master real-world coding skills through interactive projects, live coding sessions, and industry-standard practices.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Learn from industry veterans and experienced developers who guide you through your transformation journey.",
    },
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      description:
        "Follow our carefully crafted learning paths that take you from basics to advanced concepts in a logical progression.",
    },
    {
      icon: Award,
      title: "Career Ready",
      description:
        "Build a portfolio of real projects and gain the confidence to excel in technical interviews and your first job.",
    },
    {
      icon: Zap,
      title: "Fast Track Success",
      description:
        "Accelerate your learning with our proven methodologies and join thousands of successful CodeBlaze graduates.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Branding & Carousel */}
      <div className="lg:flex-[0.5] bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-20 relative overflow-hidden min-h-[40vh] lg:min-h-screen ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-sm sm:max-w-md lg:max-w-lg w-full">
          {/* Logo & Brand */}
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center">
                <Image
                  src={logo}
                  alt="CodeBlaze Connect Logo"
                  width={44}
                  height={44}
                  className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11"
                  unoptimized
                />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                CodeBlaze <span className="text-orange-500">Connect</span>
              </h1>
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
              Welcome back!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 font-medium">
              Learn, understand, and upskill yourself
            </p>
          </div>

          {/* Carousel */}
          <div className="relative min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] hidden lg:flex items-center">
            {slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                icon={slide.icon}
                title={slide.title}
                description={slide.description}
                isActive={index === currentSlide}
              />
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="hidden lg:flex items-center justify-center space-x-3 sm:space-x-4">
            <button
              onClick={prevSlide}
              className="p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            <div className="flex space-x-1.5 sm:space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-4 sm:w-6"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:flex-[0.5] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-[60vh] lg:min-h-screen">
        <div className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Continue your learning journey
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlazeLoginPage;
