// src/components/Articles.jsx
import React from "react";
import {
  ExternalLink,
  Calendar,
  Clock,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { articles } from "../data/portfolioData";

const Articles = () => {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4">
          <BookOpen size={32} className="text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Articles & Blog Posts
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Sharing knowledge and insights about software development,
          architecture, and modern technologies
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 hover:-translate-y-2 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm -z-10 transform scale-105" />

            {/* Content Container */}
            <div className="relative p-8 h-full flex flex-col">
              {/* Header with Icon and External Link */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Article
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Tech Blog
                    </span>
                  </div>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 group-hover:scale-110"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              {/* Article Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-2 decoration-blue-500 underline-offset-4"
                >
                  {article.title}
                </a>
              </h3>

              {/* Article Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg flex-grow">
                {article.description}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    <span className="text-sm font-medium">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock size={16} className="mr-2 text-purple-500" />
                    <span className="text-sm font-medium">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Read Article Button */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                >
                  Read More
                  <ExternalLink size={14} className="ml-2" />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                      tagIndex % 4 === 0
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                        : tagIndex % 4 === 1
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
                        : tagIndex % 4 === 2
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50"
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
