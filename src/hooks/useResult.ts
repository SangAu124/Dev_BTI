import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TestResult } from '../types';
import { results } from '../constants/results';
import html2canvas from 'html2canvas';

export const useResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const resultType = localStorage.getItem('devbti_result');
    if (!resultType) {
      navigate('/');
      return;
    }

    setResult(results[resultType]);
  }, [navigate]);

  const handleShare = async () => {
    const resultElement = document.getElementById('result-card');
    if (!resultElement) return;

    try {
      const canvas = await html2canvas(resultElement, {
        scale: 2,
        logging: false,
        windowWidth: 1920,
        windowHeight: 1080
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'devbti-result.png';
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

  const handleRetry = () => {
    localStorage.removeItem('devbti_result');
    localStorage.removeItem('devbti_answers');
    navigate('/test');
  };

  return {
    result,
    handleShare,
    handleRetry
  };
};
