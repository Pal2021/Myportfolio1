// src/components/Experience.jsx
import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Calendar,
  Building2,
  MapPin,
  Zap,
  TrendingUp,
  Star,
  Sparkles,
  ChevronRight,
  Award,
  Target,
  User,
  Rocket,
} from "lucide-react";
import { experience } from "../data/portfolioData";

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(
              (prev) => new Set([...prev, entry.target.dataset.cardId])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-card-id]").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Color schemes for different experience levels
  const getColorScheme = (index) => {
    const schemes = [
      {
        gradient: "from-blue-600 via-indigo-600 to-purple-600",
        cardGradient:
          "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
        badgeGradient: "from-blue-500 to-indigo-500",
        hoverGradient:
          "from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20",
        textGradient:
          "from-blue-800 to-indigo-800 dark:from-blue-200 dark:to-indigo-200",
      },
      {
        gradient: "from-emerald-600 via-teal-600 to-cyan-600",
        cardGradient:
          "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
        badgeGradient: "from-emerald-500 to-teal-500",
        hoverGradient:
          "from-emerald-50/50 via-teal-50/50 to-cyan-50/50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20",
        textGradient:
          "from-emerald-800 to-teal-800 dark:from-emerald-200 dark:to-teal-200",
      },
      {
        gradient: "from-purple-600 via-pink-600 to-rose-600",
        cardGradient:
          "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        badgeGradient: "from-purple-500 to-pink-500",
        hoverGradient:
          "from-purple-50/50 via-pink-50/50 to-rose-50/50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20",
        textGradient:
          "from-purple-800 to-pink-800 dark:from-purple-200 dark:to-pink-200",
      },
    ];
    return schemes[index % schemes.length];
  };

  return (
    <div className="min-h-screen relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="space-y-16 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center" data-card-id="header">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
              <Briefcase size={48} className="text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse -z-10"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 dark:from-blue-200 dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 animate-in slide-in-from-bottom duration-700">
            Professional Experience
          </h2>

          <div className="relative inline-block mb-8">
            <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto">
              Building innovative solutions and driving technological excellence
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-in slide-in-from-left duration-1000 delay-300"></div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 mb-12">
            <TrendingUp className="text-green-500 animate-pulse" size={24} />
            <Star className="text-blue-400 animate-pulse delay-200" size={20} />
            <Zap
              className="text-yellow-400 animate-pulse delay-400"
              size={24}
            />
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((job, index) => {
              const colorScheme = getColorScheme(index);

              return (
                <div
                  key={index}
                  data-card-id={`experience-${index}`}
                  className={`relative ${
                    visibleCards.has(`experience-${index}`)
                      ? "animate-in slide-in-from-right"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ animationDelay: `${index * 400}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${colorScheme.badgeGradient} rounded-full border-4 border-white shadow-lg z-10 hidden lg:block`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-r ${colorScheme.badgeGradient} rounded-full animate-pulse`}
                    ></div>
                  </div>

                  {/* Experience Card */}
                  <div className="lg:ml-20 group">
                    <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                      {/* Dynamic gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colorScheme.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                          <div className="flex-1 mb-6 lg:mb-0">
                            {/* Position */}
                            <h3
                              className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent mb-3 group-hover:scale-[1.02] transition-transform duration-300`}
                            >
                              {job.position}
                            </h3>

                            {/* Company */}
                            <div className="flex items-center mb-4">
                              <Building2
                                size={24}
                                className={`mr-3 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300`}
                              />
                              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {job.company}
                              </p>
                            </div>

                            {/* Location (if available) */}
                            {job.location && (
                              <div className="flex items-center mb-4">
                                <MapPin
                                  size={20}
                                  className="mr-3 text-gray-500 dark:text-gray-500"
                                />
                                <span className="text-lg text-gray-600 dark:text-gray-400">
                                  {job.location}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Duration Badge & Icon */}
                          <div className="flex flex-col items-end space-y-4">
                            <div
                              className={`flex items-center px-6 py-3 bg-gradient-to-r ${colorScheme.badgeGradient} text-white rounded-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                            >
                              <Calendar size={18} className="mr-2" />
                              <span className="font-bold text-lg">
                                {job.duration}
                              </span>
                            </div>

                            {/* Decorative icon */}
                            <div
                              className={`w-20 h-20 bg-gradient-to-br ${colorScheme.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                            >
                              {index === 0 ? (
                                <Rocket size={36} className="text-white" />
                              ) : index === 1 ? (
                                <Target size={36} className="text-white" />
                              ) : (
                                <Award size={36} className="text-white" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities Section */}
                        <div className="space-y-4">
                          <div className="flex items-center mb-6">
                            <Sparkles
                              size={24}
                              className={`mr-3 text-blue-500 dark:text-blue-400 group-hover:text-purple-500 transition-colors duration-300`}
                            />
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
                              Key Achievements & Responsibilities
                            </h4>
                          </div>

                          <div className="grid gap-4">
                            {job.description.map((item, i) => (
                              <div
                                key={i}
                                className={`group/item flex items-start p-4 rounded-2xl bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-700/50 dark:to-gray-600/50 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-200/30 dark:border-gray-600/30 ${
                                  hoveredCard === index
                                    ? "animate-in fade-in"
                                    : ""
                                }`}
                                style={{ animationDelay: `${i * 100}ms` }}
                              >
                                <div className="flex-shrink-0 mr-4 mt-1">
                                  <div
                                    className={`w-3 h-3 bg-gradient-to-r ${colorScheme.badgeGradient} rounded-full shadow-lg group-hover/item:scale-125 transition-transform duration-300`}
                                  ></div>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                                    {item}
                                  </span>
                                  <ChevronRight
                                    size={16}
                                    className="ml-2 text-gray-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Animated bottom border */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="text-center py-16" data-card-id="footer">
          <div className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
            <TrendingUp className="text-green-500 animate-pulse" size={20} />
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Continuous Growth & Innovation
            </span>
            <Zap
              className="text-yellow-500 animate-pulse delay-300"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
