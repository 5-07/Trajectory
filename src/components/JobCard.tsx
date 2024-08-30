'use client';
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation

type JobCardProps = {
  jobTitle: string;
  jobDescription: string;
  timeline: string;
  salary: string;
  difficulty: string;
};

export const JobCard: React.FC<JobCardProps> = ({
  jobTitle,
  jobDescription,
  timeline,
  salary,
  difficulty,
}) => {
  const router = useRouter();

  // Function to handle card click and navigate to the job dashboard
  const handleCardClick = () => {
    // Here, we navigate to the JobDashboard page. You might want to pass job details through query params or state if needed.
    router.push('/JobDashboard'); // Replace with the actual dynamic path if needed, e.g., `/JobDashboard/${jobTitle}`
  };

  return (
    <div
      onClick={handleCardClick} // Attach the click handler to navigate
      className="cursor-pointer border border-gray-300 rounded-2xl py-4 px-7 max-w-[350px] bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h1 className="text-2xl font-bold mb-2">{jobTitle}</h1>
      <p className="mb-4 font-light">{jobDescription}</p>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="font-light">TIMELINE:</div>
          <div className="font-medium text-lg">{timeline}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-light">SALARY:</div>
          <div className="font-medium text-lg">{salary}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-light">DIFFICULTY:</div>
          <div
            className={`font-semibold text-lg ${
              difficulty.toLowerCase() === 'low'
                ? 'text-green-600'
                : difficulty.toLowerCase() === 'high'
                ? 'text-red-600'
                : 'text-orange-600'
            }`}
          >
            {difficulty}
          </div>
        </div>
      </div>
    </div>
  );
};
