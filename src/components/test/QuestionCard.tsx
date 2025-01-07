import React from 'react';
import { Question, UserAnswer } from '../../types';
import { Button } from '../common/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: UserAnswer) => void;
  isLast: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  isLast,
}) => {
  const handleAnswer = (score: number) => {
    onAnswer({
      questionId: question.id,
      score,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-center">
        {question.text}
      </h2>

      <div className="flex flex-col gap-3">
        <Button
          onClick={() => handleAnswer(3)}
          variant="primary"
          className="w-full"
        >
          매우 그렇다
        </Button>
        <Button
          onClick={() => handleAnswer(2)}
          variant="primary"
          className="w-full"
        >
          그렇다
        </Button>
        <Button
          onClick={() => handleAnswer(1)}
          variant="primary"
          className="w-full"
        >
          약간 그렇다
        </Button>
        <Button
          onClick={() => handleAnswer(0)}
          variant="secondary"
          className="w-full"
        >
          모르겠다
        </Button>
        <Button
          onClick={() => handleAnswer(-1)}
          variant="primary"
          className="w-full"
        >
          약간 아니다
        </Button>
        <Button
          onClick={() => handleAnswer(-2)}
          variant="primary"
          className="w-full"
        >
          아니다
        </Button>
        <Button
          onClick={() => handleAnswer(-3)}
          variant="primary"
          className="w-full"
        >
          매우 아니다
        </Button>
      </div>

      {isLast && (
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          마지막 질문입니다. 선택 후 결과를 확인하실 수 있습니다.
        </div>
      )}
    </div>
  );
};
