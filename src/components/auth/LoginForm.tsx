"use client";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await api.post("/connect/auth/login", {
        email,
        password,
        rememberMe,
      });

      if (data) {
        if (authContext) {
          authContext.login(data.token, rememberMe);
          router.push("/dashboard");
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-3 mt-2 text-white bg-gray-800 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gray-300"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-3 mt-2 text-white bg-gray-800 border border-gray-200 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent hover:border-gray-300"
          placeholder="Enter your password"
        />
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
            className="block ml-2 text-sm text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link
            href="/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-[1.02] transition-all duration-200"
        >
          Sign in to CodeBlaze
        </button>
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
    className={`transition-all duration-500 ${
      isActive
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-4 absolute"
    }`}
  >
    <div className="text-center space-y-4">
      <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/80 leading-relaxed max-w-md mx-auto">
        {description}
      </p>
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
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Carousel */}
      <div className="flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex flex-col justify-center items-center p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-lg">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Code className="w-7 h-7 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                CodeBlaze <span className="text-yellow-300">Connect</span>
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-white">Welcome back!</h2>
            <p className="text-lg text-white/90 font-medium">
              Learn, understand, and upskill yourself
            </p>
          </div>

          {/* Carousel */}
          <div className="relative min-h-[280px] flex items-center">
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
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Continue your learning journey
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
            <LoginForm />
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>By signing in, you agree to our</p>
            <div className="space-x-4 mt-1">
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
      </div>
    </div>
  );
};

export default CodeBlazeLoginPage;
