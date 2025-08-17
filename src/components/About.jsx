// src/components/About.jsx
import React, { useState, useEffect } from "react";
import {
  Download,
  ArrowRight,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Award,
  Target,
  Rocket,
  BookOpen,
  Code2,
  Trophy,
  Star,
  Zap,
  Heart,
  Coffee,
  User,
} from "lucide-react";
import {
  personalInfo,
  skills,
  techLogos,
  socialLinks,
} from "../data/portfolioData";

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });

  const [showContactModal, setShowContactModal] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [imageError, setImageError] = useState(false);

  // Multiple image URL attempts for better reliability
  const profileImageUrls = [
    // Attempt 1: Google Drive direct link
    "https://drive.google.com/uc?export=view&id=16PBdJMWihnq3hkNUGTur1x77PzXEl_GQ",
    // Attempt 2: Alternative Google Drive format
    "https://drive.google.com/thumbnail?id=16PBdJMWihnq3hkNUGTur1x77PzXEl_GQ&sz=w400",
    // Attempt 3: Another format
    "https://lh3.googleusercontent.com/d/16PBdJMWihnq3hkNUGTur1x77PzXEl_GQ",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const profileImageUrl = profileImageUrls[currentImageIndex];

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const targetNum = parseInt(target.replace(/[^0-9]/g, ""));
      const increment = targetNum / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          current = targetNum;
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, 50);

      return timer;
    };

    const timers = [
      animateCounter(personalInfo.experience, "experience", 1500),
      animateCounter(personalInfo.projects, "projects", 2000),
      animateCounter(personalInfo.clients, "clients", 1800),
    ];

    return () => timers.forEach(clearInterval);
  }, []);

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

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl || "#";
    link.download = `${personalInfo.name.replace(" ", "_")}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    const contactElement =
      document.getElementById("contact") ||
      document.querySelector('[data-section="contact"]') ||
      document.querySelector(".contact-section");

    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setShowContactModal(true);
    }
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleImageError = () => {
    // Try next image URL if available
    if (currentImageIndex < profileImageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className="space-y-16 relative">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="text-center relative z-10" data-card-id="hero">
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl mx-auto flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
            {!imageError && profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-3xl"
                onError={handleImageError}
                onLoad={() => {
                  setImageError(false);
                  // Reset index on successful load
                  if (currentImageIndex !== 0) {
                    console.log(
                      `Image loaded successfully from source ${
                        currentImageIndex + 1
                      }`
                    );
                  }
                }}
                crossOrigin="anonymous"
              />
            ) : (
              // Fallback - Beautiful gradient with initials or user icon
              <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  {personalInfo.name ? (
                    <div className="text-4xl font-bold mb-1">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  ) : (
                    <User size={48} className="mb-2" />
                  )}
                  <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse -z-10"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 animate-in slide-in-from-bottom duration-700">
          {personalInfo.name}
        </h2>

        <div className="relative inline-block mb-8">
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium">
            {personalInfo.title}
          </p>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-in slide-in-from-left duration-1000 delay-300"></div>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 animate-in fade-in duration-700 delay-500">
          {personalInfo.bio}
        </p>

        {/* Enhanced Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom duration-700 delay-700">
          <button
            onClick={handleDownloadResume}
            className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              <Download
                size={24}
                className="mr-3 transition-transform group-hover:scale-110"
              />
              <span className="text-lg font-semibold">Download Resume</span>
            </div>
          </button>

          <button
            onClick={handleGetInTouch}
            className="group relative overflow-hidden px-10 py-5 border-3 border-gradient-to-r from-blue-600 to-purple-600 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 transition-all duration-500 transform hover:-translate-y-1"
            style={{
              borderImage: "linear-gradient(45deg, #3B82F6, #8B5CF6) 1",
            }}
          >
            <div className="relative flex items-center justify-center">
              <span className="text-lg font-semibold mr-3">Get In Touch</span>
              <ArrowRight
                size={24}
                className="transition-transform group-hover:translate-x-2"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Animated Stats */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-card-id="stats"
      >
        {[
          {
            key: "experience",
            label: "Years Experience",
            color: "from-blue-500 to-blue-600",
            icon: Target,
          },
          {
            key: "projects",
            label: "Projects Completed",
            color: "from-purple-500 to-purple-600",
            icon: Rocket,
          },
          {
            key: "clients",
            label: "Happy Clients",
            color: "from-green-500 to-green-600",
            icon: Heart,
          },
        ].map((stat, index) => (
          <div
            key={stat.key}
            className={`group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
              visibleCards.has("stats")
                ? "animate-in slide-in-from-bottom"
                : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="text-center relative z-10">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon size={28} className="text-white" />
              </div>
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {counters[stat.key]}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Skills Section */}
      <div
        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        data-card-id="skills"
      >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden flex items-center px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-600/50 ${
                visibleCards.has("skills")
                  ? "animate-in slide-in-from-left"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl mr-4 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-sm">
                {techLogos[skill] || "🔧"}
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* New Journey & Passion Section */}
      <div
        className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-10 shadow-xl border border-gradient-to-r"
        data-card-id="journey"
      >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            My Development Journey
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "🎯 Current Focus",
              description:
                "Building scalable microservices with Spring Boot and modern Java technologies",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Rocket,
              title: "🚀 Latest Achievement",
              description:
                "Successfully delivered ETL pipelines and microservices architecture at TCS",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: BookOpen,
              title: "📚 Currently Learning",
              description:
                "AI and machine learning, Low Level System Design, high level design, Advanced Docker & Kubernetes Architecture",
              color: "from-green-500 to-green-600",
            },
            {
              icon: Coffee,
              title: "☕ What Drives Me",
              description:
                "Passionate about solving complex problems and creating elegant solutions that make a real impact",
              color: "from-orange-500 to-red-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden flex items-start p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 ${
                visibleCards.has("journey")
                  ? "animate-in slide-in-from-right"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-lg`}
              ></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Achievements Section */}
      <div
        className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 rounded-3xl p-10 shadow-xl border border-gradient-to-r"
        data-card-id="achievements"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl mb-6 shadow-2xl">
            <Trophy size={40} className="text-white" />
          </div>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            🏆 Achievements
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              title: "LeetCode Master",
              description: "Completed 800+ coding problems on LeetCode",
              color: "from-orange-500 to-red-500",
              stat: "800+",
            },
            {
              icon: Zap,
              title: "GeeksForGeeks Pro",
              description: "Solved 250+ problems on GeeksForGeeks",
              color: "from-green-500 to-blue-500",
              stat: "250+",
            },
            {
              icon: Award,
              title: "TCS CodeVita",
              description:
                "Secured 142nd rank in TCS CodeVita annual coding competition round 2",
              color: "from-blue-500 to-purple-500",
              stat: "142nd",
            },
            {
              icon: Star,
              title: "Codeforces Specialist",
              description: "Achieved Specialist rank on Codeforces",
              color: "from-purple-500 to-pink-500",
              stat: "Specialist",
            },
            {
              icon: Trophy,
              title: "Contest Performance",
              description: "Top 15% performer in LeetCode contests",
              color: "from-yellow-500 to-orange-500",
              stat: "Top 15%",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                visibleCards.has("achievements")
                  ? "animate-in zoom-in"
                  : "opacity-0 scale-95"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon size={24} className="text-white" />
                </div>
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                >
                  {achievement.stat}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-200/50 dark:border-gray-700/50 animate-in zoom-in duration-300">
            <button
              onClick={closeContactModal}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition-colors group"
            >
              <X
                size={24}
                className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
              />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
                <Mail size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                Get In Touch
              </h3>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    Email
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center p-4 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    Phone
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4 shadow-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    Location
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Connect with me:
                </div>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <social.icon
                        size={24}
                        className={`${social.color} dark:text-gray-300 group-hover:scale-110 transition-transform`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
