"use client";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/layout/NavigationBar"; // Keep for mobile header
import Sidebar from "@/components/layout/Sidebar"; // Import the Sidebar
import { useTheme } from "@/contexts/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/terms") ||
    pathname.startsWith("/privacy");

  const isLessonPage =
    pathname.startsWith("/courses/") &&
    pathname.includes("/module-") &&
    pathname.includes("/lesson-");

  return (
    <div className={`flex h-screen ${theme}`}>
      {!isAuthPage && !isLessonPage && <Sidebar />} {/* Render Sidebar on desktop, hide on auth and lesson pages */}
      <div className={`flex flex-col flex-1 ${!isAuthPage && !isLessonPage ? 'lg:ml-64' : ''}`}> {/* Conditionally apply margin */}
        {" "}
        {/* Main content wrapper */}
        {!isAuthPage && <NavigationBar />}{" "} {/* Keep NavigationBar for mobile header */}
        <main className="flex-1 overflow-y-auto">
          <div className=" ">
            {" "}
            {/* Moved padding here */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
