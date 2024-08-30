'use client';
import React from 'react';


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

  return (
    <div
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
