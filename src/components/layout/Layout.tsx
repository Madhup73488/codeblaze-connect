"use client";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/layout/NavigationBar";
import Sidebar from "@/components/layout/Sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password");

  const isLessonPage =
    pathname.startsWith("/courses/") &&
    pathname.includes("/module-") &&
    pathname.includes("/lesson-");

  const showSidebar = isAuthenticated && !isAuthPage && !isLessonPage;
  const showNavbar = isAuthenticated && !isAuthPage;
  const mainContentMargin = showSidebar ? "lg:ml-64" : "";

  return (
    <div className={`flex h-screen ${theme}`}>
      {showSidebar && <Sidebar />}
      <div className={`flex flex-col flex-1 ${mainContentMargin}`}>
        {showNavbar && <NavigationBar />}
        <main className="flex-1 overflow-y-auto">
          <div className=" ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
