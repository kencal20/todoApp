import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiCheckCircle, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {};

type NavigationLink = {
  name: string;
  to: string;  // Changed from href to to for React Router
  icon: React.JSX.Element;
};

export default function NavbarComponent({}: Props) {
  const [active, setActive] = useState(() => {
    return localStorage.getItem("activeLink") || "All Todos";
  });

  const navigationLinks: NavigationLink[] = [
    { name: "All Todos", to: "/", icon: <FiHome className="text-lg" /> },
    { name: "Add Todo", to: "/add", icon: <FaPlus className="text-lg" /> },
    { name: "Completed", to: "/completed", icon: <FiCheckCircle className="text-lg" /> },
  ];

  const handleSetActive = (link: string) => {
    setActive(link);
    localStorage.setItem("activeLink", link);
  };

  useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeLink");
    if (savedActiveLink) {
      setActive(savedActiveLink);
    }
  }, []);

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold text-black">
            TodoApp
          </span>
        </Link>

        {/* Desktop - Full Menu with Icons and Text */}
        <div className="hidden md:flex space-x-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => handleSetActive(link.name)}
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
        
        {/* Mobile - Icons Only */}
        <div className="flex md:hidden space-x-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => handleSetActive(link.name)}
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