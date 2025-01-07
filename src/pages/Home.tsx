import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    // Clear previous test data
    localStorage.removeItem('devbti_result');
    localStorage.removeItem('devbti_answers');
    localStorage.removeItem('devbti_scores');
    
    navigate('/test');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-6">
          Dev_BTI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          당신의 개발자 성향을 알아보세요!
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          20개의 질문을 통해 당신의 개발 스타일, 접근 방식, 최적화 기준, 개발 패턴을 분석합니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">테스트 소요 시간</h3>
            <p className="text-3xl font-bold text-primary-500">약 5분</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">총 질문 수</h3>
            <p className="text-3xl font-bold text-primary-500">20개</p>
          </div>
        </div>

        <Button size="lg" onClick={handleStartTest}>
          테스트 시작하기
        </Button>
      </div>

      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p> 2025 Dev_BTI. All rights reserved.</p>
      </footer>
    </div>
  );
};
