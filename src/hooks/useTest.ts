import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAnswer } from '../types';
import { questions } from '../constants/questions';

export const useTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(() => {
    const savedAnswers = localStorage.getItem('devbti_answers');
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });

  // 페이지 로드시 이전 테스트 결과 확인
  useEffect(() => {
    const savedResult = localStorage.getItem('devbti_result');
    if (savedResult) {
      navigate('/result');
    }
  }, [navigate]);

  const handleAnswer = useCallback((answer: UserAnswer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate result
      const typeScores = {
        D: 0, M: 0,
        C: 0, E: 0,
        P: 0, H: 0,
        A: 0, S: 0
      };

      // Process all answers including the last one
      newAnswers.forEach((ans, index) => {
        const question = questions[index];
        const score = ans.score;
        
        if (score > 0) {
          typeScores[question.targetType as keyof typeof typeScores] += score;
        } else if (score < 0) {
          typeScores[question.oppositeType as keyof typeof typeScores] += Math.abs(score);
        }
      });

      const result = [
        typeScores.D > typeScores.M ? 'D' : 'M',
        typeScores.C > typeScores.E ? 'C' : 'E',
        typeScores.P > typeScores.H ? 'P' : 'H',
        typeScores.A > typeScores.S ? 'A' : 'S'
      ].join('');

      // Save result and answers to localStorage
      localStorage.setItem('devbti_result', result);
      localStorage.setItem('devbti_answers', JSON.stringify(newAnswers));
      localStorage.setItem('devbti_scores', JSON.stringify(typeScores));

      // Navigate to result page
      navigate('/result', { replace: true });
    }
  }, [currentQuestionIndex, answers, navigate]);

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleAnswer,
    isLastQuestion: currentQuestionIndex === questions.length - 1
  };
};
