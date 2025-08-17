// src/components/AnalyticsCounter.jsx
import React, { useState, useEffect } from "react";
import { Eye, Users, Clock } from "lucide-react";

const AnalyticsCounter = () => {
  const [analytics, setAnalytics] = useState({
    visitors: 0,
    views: 0,
    timeOnSite: "0m",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching analytics data
    const fetchAnalytics = async () => {
      try {
        // Get or create visitor data
        let visitorData = JSON.parse(
          localStorage.getItem("portfolioAnalytics") || "{}"
        );

        // Initialize if first time
        if (!visitorData.firstVisit) {
          visitorData = {
            firstVisit: Date.now(),
            totalVisits: 1,
            totalViews: 1,
            sessionStart: Date.now(),
          };
        } else {
          // Check if it's a new session (30 minutes gap)
          const timeSinceLastVisit =
            Date.now() - (visitorData.lastVisit || visitorData.firstVisit);
          if (timeSinceLastVisit > 30 * 60 * 1000) {
            // 30 minutes
            visitorData.totalVisits += 1;
          }
          visitorData.totalViews += 1;
          visitorData.sessionStart = Date.now();
        }

        visitorData.lastVisit = Date.now();
        localStorage.setItem("portfolioAnalytics", JSON.stringify(visitorData));

        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setAnalytics({
          visitors:
            visitorData.totalVisits + Math.floor(Math.random() * 50) + 100, // Add some fake base numbers
          views: visitorData.totalViews + Math.floor(Math.random() * 150) + 250,
          timeOnSite: "2m 30s", // This would be calculated in a real app
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        setAnalytics({
          visitors: 125,
          views: 350,
          timeOnSite: "2m 30s",
        });
        setIsLoading(false);
      }
    };

    fetchAnalytics();

    // Update time on site every 30 seconds
    const timeInterval = setInterval(() => {
      const visitorData = JSON.parse(
        localStorage.getItem("portfolioAnalytics") || "{}"
      );
      if (visitorData.sessionStart) {
        const timeSpent = Math.floor(
          (Date.now() - visitorData.sessionStart) / 1000
        );
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        setAnalytics((prev) => ({
          ...prev,
          timeOnSite: `${minutes}m ${seconds}s`,
        }));
      }
    }, 30000);

    return () => clearInterval(timeInterval);
  }, []);

  const CounterCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {label}
          </p>
          {isLoading ? (
            <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-1"></div>
          ) : (
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          )}
        </div>
        <Icon
          className={`h-8 w-8 ${color
            .replace("text-", "text-")
            .replace("-600", "-500")}`}
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <CounterCard
        icon={Users}
        label="Visitors"
        value={analytics.visitors}
        color="text-blue-600 dark:text-blue-400"
      />
      <CounterCard
        icon={Eye}
        label="Page Views"
        value={analytics.views}
        color="text-green-600 dark:text-green-400"
      />
      <CounterCard
        icon={Clock}
        label="Avg. Time"
        value={analytics.timeOnSite}
        color="text-purple-600 dark:text-purple-400"
      />
    </div>
  );
};

export default AnalyticsCounter;
