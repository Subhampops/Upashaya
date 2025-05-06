"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  FileText, 
  GalleryVerticalEnd,
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Medical Records", href: "/dashboard/records", icon: <ClipboardList className="h-5 w-5" /> },
    { name: "Patients", href: "/dashboard/patients", icon: <Users className="h-5 w-5" /> },
    { name: "Prescriptions", href: "/dashboard/prescriptions", icon: <FileText className="h-5 w-5" /> },
    { name: "Equipment", href: "/dashboard/equipment", icon: <GalleryVerticalEnd className="h-5 w-5" /> },
    { name: "Settings", href: "/dashboard/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="h-screen flex bg-blue-950">
      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden md:flex flex-col bg-blue-900 border-r border-blue-800 transition-all duration-300 h-screen",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <div className={cn(
          "h-16 flex items-center px-4 border-b border-blue-800",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && <span className="text-xl font-bold text-white">Upashaya</span>}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-blue-200 hover:text-white hover:bg-blue-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-3 text-blue-200 hover:bg-blue-800 hover:text-white rounded-md transition-colors",
                  collapsed ? "justify-center" : "justify-start"
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-blue-800">
          <Link
            href="/login"
            className={cn(
              "flex items-center px-3 py-3 text-blue-200 hover:bg-blue-800 hover:text-white rounded-md transition-colors",
              collapsed ? "justify-center" : "justify-start"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar (Overlay) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-64 h-full bg-blue-900 border-r border-blue-800 relative">
            <div className="h-16 flex items-center justify-between px-4 border-b border-blue-800">
              <span className="text-xl font-bold text-white">Upashaya</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileSidebar}
                className="text-blue-200 hover:text-white hover:bg-blue-800"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 py-6 overflow-y-auto">
              <nav className="px-2 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-3 text-blue-200 hover:bg-blue-800 hover:text-white rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-blue-800">
              <Link
                href="/login"
                className="flex items-center px-3 py-3 text-blue-200 hover:bg-blue-800 hover:text-white rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-3">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-blue-900 border-b border-blue-800 flex items-center justify-between px-4 md:px-6">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileSidebar}
            className="md:hidden text-blue-200 hover:text-white"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Title (Mobile Only) */}
          <div className="md:hidden font-bold text-white">Upashaya</div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-4 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-blue-800 border border-blue-700 text-white rounded-md py-1.5 px-4"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-blue-200 hover:text-white relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-blue-200 hover:text-white"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-blue-950 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}