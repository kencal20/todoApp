import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiCheckCircle, FiHome, FiLogOut, FiUser, FiMail, FiKey } from "react-icons/fi";
import { LuSquareCheckBig } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../constants/path";

type Props = {};

type NavigationLink = {
  name: string;
  to: string;
  icon: React.JSX.Element;
};

export default function NavbarComponent({}: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [active, setActive] = useState("All Todos");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigationLinks: NavigationLink[] = [
    { name: "All Todos", to: "/", icon: <FiHome className="text-lg" /> },
    { name: "Add Todo", to: "/add", icon: <FaPlus className="text-lg" /> },
    { name: "Completed", to: "/completed", icon: <FiCheckCircle className="text-lg" /> },
  ];

  useEffect(() => {
    // Sync active state with current route
    const currentLink = navigationLinks.find(link => link.to === location.pathname);
    if (currentLink) {
      setActive(currentLink.name);
      localStorage.setItem("activeLink", currentLink.name);
    }
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getInitials = (name: string) => {
    if (!name) return "US";
    const names = name.split(" ");
    return names
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <LuSquareCheckBig className="text-2xl" />
          <span className="self-center text-2xl font-semibold text-black">
            TodoApp
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop - Full Menu with Icons and Text */}
          <div className="hidden md:flex space-x-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`
                  flex items-center py-2 px-4
                  transition-colors duration-200
                  rounded-md
                  space-x-2
                  ${active === link.name
                    ? "text-white bg-gray-700"
                    : "text-gray-700 hover:scale-105"
                  }
                `}
                aria-current={active === link.name ? "page" : undefined}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* User Profile */}
          {isAuthenticated && user && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="User menu"
                aria-haspopup="true"
              >
                {getInitials(user.name)}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <FiUser className="text-gray-400" />
                        <span className="text-sm">Profile</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700 mt-2">
                        <FiMail className="text-gray-400" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700 mt-2">
                        <FiKey className="text-gray-400" />
                        <span className="text-sm">Account ID: {user.$id}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FiLogOut className="text-gray-400" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile - Icons Only */}
        <div className="flex md:hidden space-x-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`
                p-2 rounded-md
                transition-colors duration-200
                ${active === link.name
                  ? "text-white bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
                }
              `}
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}