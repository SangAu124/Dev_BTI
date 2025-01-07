import React from 'react';
import { TestResult } from '../../types';

interface ResultCardProps {
  result: TestResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{result.type}</h2>
        <h3 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
          {result.nickname}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {result.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
            강점
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
            약점
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {result.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
          추천 개발 언어
        </h4>
        <div className="flex flex-wrap gap-2">
          {result.recommendedLanguages.map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
          추천 포지션
        </h4>
        <div className="flex flex-wrap gap-2">
          {result.recommendedPositions.map((position, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
            >
              {position}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
            잘 맞는 유형
          </h4>
          <div className="flex flex-wrap gap-2">
            {result.compatibility.good.map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
            잘 안맞는 유형
          </h4>
          <div className="flex flex-wrap gap-2">
            {result.compatibility.bad.map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3 text-yellow-600 dark:text-yellow-400">
          비슷한 성향의 유명 개발자
        </h4>
        <div className="flex flex-wrap gap-2">
          {result.famousDevelopers.map((dev, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full"
            >
              {dev}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
