"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import { useTheme } from "@/contexts/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  console.log('Layout theme:', theme);
  const pathname = usePathname();
  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/reset-password");

  const isLessonPage =
    pathname.includes("/courses/") && pathname.split("/").length > 3;

  const showSidebar = !isAuthPage && !isLessonPage;

  return (
    <div className={`flex h-screen ${theme}`}>
      {showSidebar && <Sidebar />}
      <div
        className={`flex-1 flex flex-col ${
          showSidebar ? "lg:ml-[280px]" : ""
        }`}
      >
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
