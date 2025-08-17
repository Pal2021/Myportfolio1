// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Download, Menu, X, User, ChevronDown } from "lucide-react";
import { personalInfo, menuItems } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

const Header = ({ activeSection, setActiveSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl || "#";
    link.download = `${personalInfo.name.replace(" ", "_")}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter out Contact and Article from main menu items
  const mainMenuItems = menuItems.filter(
    (item) =>
      item.id !== "contact" && item.id !== "articles" && item.id !== "article"
  );

  // Get Contact and Article items for dropdown
  const dropdownItems = menuItems.filter(
    (item) =>
      item.id === "contact" || item.id === "articles" || item.id === "article"
  );

  return (
    <>
      <header
        className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-gray-200 dark:border-gray-700 shadow-lg"
            : "border-transparent shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo with Gradient Animation */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {mainMenuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
                  )}
                </button>
              ))}

              {/* Enhanced Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="group flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 transform hover:scale-105"
                >
                  <User
                    size={16}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>Profile</span>
                  <ChevronDown
                    size={14}
                    className={`transition-all duration-300 ${
                      isProfileDropdownOpen
                        ? "rotate-180 text-blue-600"
                        : "group-hover:text-blue-600"
                    }`}
                  />
                </button>

                {/* Enhanced Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    <div className="p-3">
                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {personalInfo.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {personalInfo.name}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {personalInfo.title}
                          </p>
                        </div>
                      </div>

                      {dropdownItems.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveSection(item.id);
                            setIsProfileDropdownOpen(false);
                          }}
                          className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transform hover:scale-[1.02] ${
                            activeSection === item.id
                              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <item.icon
                            size={18}
                            className="transition-transform group-hover:scale-110"
                          />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      ))}

                      <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                        <button
                          onClick={handleDownloadResume}
                          className="group w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 transform hover:scale-[1.02] text-gray-700 dark:text-gray-300"
                        >
                          <Download
                            size={18}
                            className="transition-transform group-hover:scale-110"
                          />
                          <span className="font-medium">Download Resume</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Enhanced Right Controls */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-100 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                aria-label="Toggle dark mode"
              >
                <div className="relative">
                  {isDarkMode ? (
                    <Sun
                      size={20}
                      className="transition-transform group-hover:rotate-12 text-yellow-600"
                    />
                  ) : (
                    <Moon
                      size={20}
                      className="transition-transform group-hover:-rotate-12 text-blue-600"
                    />
                  )}
                </div>
              </button>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden group p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X
                      size={22}
                      className="transition-transform group-hover:rotate-90"
                    />
                  ) : (
                    <Menu
                      size={22}
                      className="transition-transform group-hover:scale-110"
                    />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-80 h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      Navigation
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <nav className="p-6 space-y-3 overflow-y-auto h-full pb-32">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`group w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium text-base">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                <button
                  onClick={handleDownloadResume}
                  className="group w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20"
                >
                  <Download
                    size={20}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium text-base">Download Resume</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
