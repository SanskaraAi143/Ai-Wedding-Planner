import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { 
  CalendarDays, 
  Users, 
  Clock, 
  Settings, 
  LayoutDashboard, 
  FileText, 
  ShoppingCart,
  User,
  LogOut,
  MessageCircle,
  PieChart,
  Paintbrush,
  CheckSquare,
  Linkedin,
  Instagram,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserProfileDropdown from "@/components/auth/UserProfileDropdown";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // While loading auth state, show a loading spinner
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-wedding-cream via-white to-wedding-cream/80">
        <div className="glass-card p-8 rounded-full">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-wedding-gold border-t-transparent"></div>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to home page
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const sidebarLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Profile", icon: User, href: "/dashboard/profile" },
    { name: "Chat with AI", icon: MessageCircle, href: "/dashboard/chat" },
    { name: "Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
    { name: "Timeline", icon: CalendarDays, href: "/dashboard/timeline" },
    { name: "Mood Board", icon: Paintbrush, href: "/dashboard/moodboard" },
    { name: "Budget", icon: PieChart, href: "/dashboard/budget" },
    { name: "Guest List", icon: Users, href: "/dashboard/guests" },
    { name: "Vendors", icon: ShoppingCart, href: "/dashboard/vendors" },
    { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-white to-wedding-cream/80">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-particles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 15 + 15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 w-64 glass-card border-r border-wedding-gold/20 overflow-y-auto flex flex-col justify-between">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 flex items-center justify-center bg-gradient-primary rounded-full shadow-lg">
                <img
                  src="/WhatsApp%20Image%202025-05-26%20at%206.40.58%20PM.jpeg"
                  alt="Site Logo"
                  className="h-8 w-8 object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-playfair font-semibold title-gradient">
                Sanskara<span className="font-bold">AI</span>
              </span>
            </Link>

            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-primary text-white shadow-lg'
                        : 'text-wedding-brown/80 hover:bg-wedding-gold/10'
                    }`}
                  >
                    <link.icon size={20} />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          {/* Social Icons Row (Gold Circles) */}
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <a
              href="https://www.linkedin.com/company/sanskaraai-vendors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vendors LinkedIn"
              className="rounded-full bg-gradient-to-br from-wedding-gold to-yellow-400 shadow-lg p-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-wedding-gold"
            >
              <Linkedin size={20} className="text-white drop-shadow" />
            </a>
            <a
              href="https://instagram.com/sanskaraai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-gradient-to-br from-wedding-gold to-yellow-400 shadow-lg p-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-wedding-gold"
            >
              <Instagram size={20} className="text-white drop-shadow" />
            </a>
            <a
              href="https://vendors.sanskaraai.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vendors GitHub"
              className="rounded-full bg-gradient-to-br from-wedding-gold to-yellow-400 shadow-lg p-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-wedding-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" width="20" height="20"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.5a5.07 5.07 0 0 0-.09-3.64S18.73 2.51 16 4a13.38 13.38 0 0 0-7 0C6.27 2.51 5.09 2.86 5.09 2.86A5.07 5.07 0 0 0 5 6.5a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V23"/></svg>
            </a>
            <a
              href="mailto:admin@sanskaraai.com"
              aria-label="Email Admin"
              className="rounded-full bg-gradient-to-br from-wedding-gold to-yellow-400 shadow-lg p-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-wedding-gold"
            >
              <Mail size={20} className="text-white drop-shadow" />
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          {/* Header */}
          <header className="glass-card border-b border-wedding-gold/20 sticky top-0 z-50">
            <div className="px-8 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-playfair font-semibold title-gradient">
                {sidebarLinks.find(link => link.href === location.pathname)?.name || 'Dashboard'}
              </h1>
              <UserProfileDropdown />
            </div>
          </header>

          {/* Page Content */}
          <div className="p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
