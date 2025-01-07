import React from 'react';
import { Question, UserAnswer, AnswerLevel } from '../../types';
import { Button } from '../common/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: UserAnswer) => void;
  isLast: boolean;
}

const answerOptions: { level: AnswerLevel; label: string }[] = [
  { level: -3, label: '매우 아니다' },
  { level: -2, label: '아니다' },
  { level: -1, label: '약간 아니다' },
  { level: 0, label: '모르겠다' },
  { level: 1, label: '약간 그렇다' },
  { level: 2, label: '그렇다' },
  { level: 3, label: '매우 그렇다' },
];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  isLast,
}) => {
  const handleAnswer = (level: AnswerLevel) => {
    onAnswer({
      questionId: question.id,
      score: level,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-8">{question.text}</h3>
      
      <div className="flex flex-col space-y-3">
        {answerOptions.map(({ level, label }) => (
          <button
            key={level}
            onClick={() => handleAnswer(level)}
            className={`
              w-full p-4 rounded-lg transition-all duration-200
              ${level === 0 
                ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600' 
                : level > 0
                  ? 'bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/50'
                  : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'
              }
              text-left font-medium
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {isLast && (
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          마지막 질문입니다. 선택 후 결과를 확인하실 수 있습니다.
        </div>
      )}
    </div>
  );
};
