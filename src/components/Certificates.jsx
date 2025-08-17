// src/components/Certificates.jsx
import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Calendar,
  Award,
  Star,
  Sparkles,
  Shield,
  Trophy,
  Crown,
  Zap,
  CheckCircle,
  Globe,
  BookOpen,
} from "lucide-react";
import { certificates } from "../data/portfolioData";

const Certificates = () => {
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

  // Color schemes for different certificates
  const getColorScheme = (index) => {
    const schemes = [
      {
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        cardGradient:
          "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
        badgeGradient: "from-yellow-400 to-orange-500",
        hoverGradient:
          "from-yellow-50/50 via-orange-50/50 to-red-50/50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20",
        textGradient:
          "from-yellow-700 to-orange-700 dark:from-yellow-300 dark:to-orange-300",
        iconColor: "text-yellow-500",
        borderColor: "border-yellow-200/50 dark:border-yellow-700/50",
      },
      {
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        cardGradient:
          "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
        badgeGradient: "from-blue-400 to-indigo-500",
        hoverGradient:
          "from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20",
        textGradient:
          "from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300",
        iconColor: "text-blue-500",
        borderColor: "border-blue-200/50 dark:border-blue-700/50",
      },
      {
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        cardGradient:
          "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
        badgeGradient: "from-emerald-400 to-teal-500",
        hoverGradient:
          "from-emerald-50/50 via-teal-50/50 to-cyan-50/50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20",
        textGradient:
          "from-emerald-700 to-teal-700 dark:from-emerald-300 dark:to-teal-300",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-200/50 dark:border-emerald-700/50",
      },
      {
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        cardGradient:
          "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        badgeGradient: "from-purple-400 to-pink-500",
        hoverGradient:
          "from-purple-50/50 via-pink-50/50 to-rose-50/50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20",
        textGradient:
          "from-purple-700 to-pink-700 dark:from-purple-300 dark:to-pink-300",
        iconColor: "text-purple-500",
        borderColor: "border-purple-200/50 dark:border-purple-700/50",
      },
    ];
    return schemes[index % schemes.length];
  };

  // Get appropriate icon for certificate
  const getCertificateIcon = (index, colorScheme) => {
    const icons = [Trophy, Award, Shield, Crown, Star];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={32} className="text-white" />;
  };

  return (
    <div className="min-h-screen relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="space-y-16 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center" data-card-id="header">
          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
              <Award size={48} className="text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-400 rounded-3xl blur-2xl opacity-30 animate-pulse -z-10"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 dark:from-yellow-300 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent mb-6 animate-in slide-in-from-bottom duration-700">
            Certificates & Achievements
          </h2>

          <div className="relative inline-block mb-8">
            <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto">
              Validated skills and recognized expertise across various domains
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-in slide-in-from-left duration-1000 delay-300"></div>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 mb-12">
            <Trophy className="text-yellow-500 animate-pulse" size={24} />
            <Star
              className="text-orange-400 animate-pulse delay-200"
              size={20}
            />
            <Award className="text-red-400 animate-pulse delay-400" size={24} />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const colorScheme = getColorScheme(index);

              return (
                <div
                  key={cert.id}
                  data-card-id={`certificate-${index}`}
                  className={`relative ${
                    visibleCards.has(`certificate-${index}`)
                      ? "animate-in zoom-in"
                      : "opacity-0 scale-95"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Certificate Card */}
                  <div
                    className={`group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${colorScheme.borderColor}`}
                  >
                    {/* Dynamic gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colorScheme.hoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with Icon and External Link */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Certificate Icon */}
                        <div className="flex items-center space-x-4">
                          {/* Large Certificate Emoji/Image */}
                          <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                            {cert.image}
                          </div>

                          {/* Award Icon */}
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${colorScheme.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                          >
                            {getCertificateIcon(index, colorScheme)}
                          </div>
                        </div>

                        {/* External Link */}
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link p-3 rounded-2xl bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                          <ExternalLink
                            size={20}
                            className="text-gray-600 dark:text-gray-400 group-hover/link:text-white transition-colors duration-300"
                          />
                        </a>
                      </div>

                      {/* Certificate Title */}
                      <h3
                        className={`text-2xl font-bold bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent mb-3 group-hover:scale-[1.02] transition-transform duration-300 leading-tight`}
                      >
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div className="flex items-center mb-4">
                        <Globe
                          size={20}
                          className={`mr-2 ${colorScheme.iconColor}`}
                        />
                        <p
                          className={`text-xl font-semibold ${colorScheme.iconColor} group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300`}
                        >
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Date and Credential Info */}
                      <div
                        className={`flex flex-wrap items-center gap-4 mb-6 p-4 bg-gradient-to-r ${colorScheme.cardGradient} rounded-2xl border ${colorScheme.borderColor}`}
                      >
                        <div className="flex items-center">
                          <Calendar
                            size={16}
                            className={`mr-2 ${colorScheme.iconColor}`}
                          />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {cert.date}
                          </span>
                        </div>

                        {cert.credentialId && (
                          <>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center">
                              <CheckCircle
                                size={16}
                                className={`mr-2 ${colorScheme.iconColor}`}
                              />
                              <span className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                                ID: {cert.credentialId}
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Skills Section */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <BookOpen
                            size={20}
                            className={`mr-2 ${colorScheme.iconColor}`}
                          />
                          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            Skills Validated
                          </h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {cert.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className={`group/skill relative overflow-hidden px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:from-white hover:to-gray-50 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-gray-200/50 dark:border-gray-600/50 ${
                                hoveredCard === index
                                  ? "animate-in slide-in-from-bottom"
                                  : ""
                              }`}
                              style={{ animationDelay: `${skillIndex * 50}ms` }}
                            >
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${colorScheme.badgeGradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 rounded-xl`}
                              ></div>
                              <div className="relative flex items-center">
                                <Zap
                                  size={14}
                                  className={`mr-2 ${colorScheme.iconColor} group-hover/skill:scale-125 transition-transform duration-300`}
                                />
                                <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm group-hover/skill:text-gray-900 dark:group-hover/skill:text-gray-100 transition-colors duration-300">
                                  {skill}
                                </span>
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

                    {/* Certificate Ribbon */}
                    <div
                      className={`absolute top-6 right-6 w-8 h-8 bg-gradient-to-r ${colorScheme.gradient} rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500`}
                    >
                      <Star size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="text-center py-16" data-card-id="footer">
          <div className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-full border border-yellow-200/50 dark:border-yellow-700/50 shadow-lg">
            <Trophy className="text-yellow-500 animate-pulse" size={20} />
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-700 to-orange-700 dark:from-yellow-300 dark:to-orange-300 bg-clip-text text-transparent">
              Excellence Through Continuous Learning
            </span>
            <Award
              className="text-orange-500 animate-pulse delay-300"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
