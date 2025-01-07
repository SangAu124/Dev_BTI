import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionCard } from '../components/test/QuestionCard';
import { ProgressBar } from '../components/common/ProgressBar';
import { useTest } from '../hooks/useTest';

export const Test: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    handleAnswer,
    isLastQuestion
  } = useTest();

  // 테스트가 이미 완료되었는지 확인
  React.useEffect(() => {
    const savedResult = localStorage.getItem('devbti_result');
    if (savedResult) {
      navigate('/result');
    }
  }, [navigate]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">문제를 불러오는 중...</div>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-lg font-medium">
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
          <ProgressBar progress={progress} />
        </div>

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          isLast={isLastQuestion}
        />
      </div>
    </div>
  );
};
