import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResultCard } from '../components/result/ResultCard';
import { TestResult } from '../types';
import { results } from '../constants/results';

export const Result: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedResult = localStorage.getItem('devbti_result');
    const savedScores = localStorage.getItem('devbti_scores');
    
    if (!savedResult || !savedScores) {
      navigate('/test');
      return;
    }

    const resultType = savedResult as string;
    const resultData = results[resultType];

    if (!resultData) {
      navigate('/test');
      return;
    }

    setResult(resultData);
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">결과를 분석하고 있습니다...</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">결과를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ResultCard result={result} />
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          홈으로
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('devbti_result');
            localStorage.removeItem('devbti_answers');
            localStorage.removeItem('devbti_scores');
            navigate('/test');
          }}
          className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
};
