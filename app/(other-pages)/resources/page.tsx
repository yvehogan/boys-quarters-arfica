"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { resources, ResourceType } from "@/components/data/resourcesData";
import ResourceCard from "@/components/resources/resource-card";
import AllResources from "@/components/resources/AllResources";


export interface Resource {
  id: string;
  type: ResourceType[];
  title: string;
  description: string;
  image: string;
  component?: React.FC;
}
export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<ResourceType>("all");

  const tabs = [
    { id: "all", label: "All", icon: "grid-2x2" },
    { id: "impact-report", label: "Impact Report", icon: "file-text" },
    { id: "press-release", label: "Press Release", icon: "megaphone" },
    { id: "articles", label: "Articles", icon: "newspaper" },
    { id: "tv-feature", label: "TV Feature", icon: "tv" },
    { id: "books-pdfs", label: "Books & PDFs", icon: "book" },
  ];

  const filteredResources = resources.filter(
    (resource) => activeTab === "all" || resource.type.includes(activeTab)
  );

  const ActiveComponent =
    activeTab !== "all"
      ? resources.find((resource) =>
          resource.type.includes(activeTab)
        )?.component
      : null;

  return (
    <div className="md:px-28 px-8 pb-8">
      <h2 className="text-[40px] font-bold text-secondary mb-12">Resources</h2>
      <div className="overflow-x-auto pb-2 mb-6 md:mb-8 -mx-4 px-4">
        <div className="flex gap-1 md:gap-6 border-b min-w-max md:min-w-0 px-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ResourceType)}
              className={cn(
                "flex items-center gap-1 md:gap-2 pb-2 px-2 text-sm md:text-base text-gray-600 transition-all whitespace-nowrap",
                activeTab === tab.id &&
                  "text-[#FEAD3A] border-b-2 border-[#FEAD3A] font-medium"
              )}
            >
              <TabIcon type={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      {ActiveComponent ? (
        <ActiveComponent />
      ) : (
        <div className="">
            <AllResources />
        </div>
      )}
    </div>
  );
}

function TabIcon({ type }: { type: string }) {
  switch (type) {
    case "grid-2x2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      );
    case "file-text":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      );
    case "megaphone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      );
    case "newspaper":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      );
    case "tv":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <rect width="20" height="15" x="2" y="3" rx="2" />
          <polyline points="8 21 12 17 16 21" />
        </svg>
      );
    case "book":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      );
    default:
      return null;
  }
}
