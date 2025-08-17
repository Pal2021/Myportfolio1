// src/components/Education.jsx
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  BookOpen,
  Star,
  Sparkles,
} from "lucide-react";
import { education } from "../data/portfolioData";

const Education = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

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

  return (
    <div className="min-h-screen relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="space-y-16 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center" data-card-id="header">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
              <GraduationCap size={48} className="text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse -z-10"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 dark:from-indigo-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-6 animate-in slide-in-from-bottom duration-700">
            Educational Journey
          </h2>

          <div className="relative inline-block mb-8">
            <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto">
              Building knowledge, shaping the future through continuous learning
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-in slide-in-from-left duration-1000 delay-300"></div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 mb-12">
            <Sparkles className="text-yellow-400 animate-pulse" size={24} />
            <Star
              className="text-indigo-400 animate-pulse delay-200"
              size={20}
            />
            <Sparkles
              className="text-pink-400 animate-pulse delay-400"
              size={24}
            />
          </div>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                data-card-id={`education-${index}`}
                className={`relative ${
                  visibleCards.has(`education-${index}`)
                    ? "animate-in slide-in-from-right"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block">
                  <div className="w-full h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
                </div>

                {/* Education Card */}
                <div className="md:ml-20 group">
                  <div className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          {/* Degree */}
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-800 to-purple-800 dark:from-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-3 group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300">
                            {edu.degree}
                          </h3>

                          {/* College */}
                          <p className="text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {edu.college}
                          </p>

                          {/* University */}
                          {edu.university && (
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
                              {edu.university}
                            </p>
                          )}

                          {/* Info badges */}
                          <div className="flex flex-wrap items-center gap-6 mb-6">
                            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
                              <Calendar
                                size={18}
                                className="mr-2 text-blue-600 dark:text-blue-400"
                              />
                              <span className="text-blue-800 dark:text-blue-200 font-medium">
                                {edu.duration}
                              </span>
                            </div>

                            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200/50 dark:border-purple-700/50">
                              <MapPin
                                size={18}
                                className="mr-2 text-purple-600 dark:text-purple-400"
                              />
                              <span className="text-purple-800 dark:text-purple-200 font-medium">
                                {edu.location}
                              </span>
                            </div>

                            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl border border-green-200/50 dark:border-green-700/50">
                              <Award
                                size={18}
                                className="mr-2 text-green-600 dark:text-green-400"
                              />
                              <span className="text-green-800 dark:text-green-200 font-bold">
                                {edu.grade}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative icon */}
                        <div className="ml-6">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br ${
                              index === 0
                                ? "from-yellow-400 to-orange-500"
                                : index === 1
                                ? "from-indigo-500 to-purple-600"
                                : "from-green-500 to-blue-600"
                            } rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                          >
                            {index === 0 ? (
                              <GraduationCap size={36} className="text-white" />
                            ) : (
                              <BookOpen size={36} className="text-white" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Key Subjects */}
                      {edu.subjects && (
                        <div className="mb-8">
                          <div className="flex items-center mb-4">
                            <BookOpen
                              size={24}
                              className="mr-3 text-indigo-600 dark:text-indigo-400"
                            />
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                              Key Subjects
                            </h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {edu.subjects.map((subject, idx) => (
                              <div
                                key={idx}
                                className="group/subject relative overflow-hidden px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-600/50"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover/subject:from-indigo-500/10 group-hover/subject:to-purple-500/10 transition-all duration-300"></div>
                                <span className="relative text-gray-800 dark:text-gray-200 font-semibold text-center block group-hover/subject:text-indigo-700 dark:group-hover/subject:text-indigo-300 transition-colors duration-300">
                                  {subject}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Decorative bottom border */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="text-center py-16" data-card-id="footer">
          <div className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full border border-indigo-200/50 dark:border-indigo-700/50 shadow-lg">
            <Star className="text-yellow-500 animate-pulse" size={20} />
            <span className="text-lg font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
              Continuous Learning Journey
            </span>
            <Star
              className="text-yellow-500 animate-pulse delay-300"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
