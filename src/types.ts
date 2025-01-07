export interface UserAnswer {
  questionId: number;
  score: number;
}

export interface TestResult {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  recommendedLanguages: string[];
  recommendedPositions: string[];
  famousDevelopers: string[];
  compatibility: {
    good: string[];
    bad: string[];
  };
}

export interface Question {
  id: number;
  text: string;
  targetType: string;
  oppositeType: string;
  category: 'expression' | 'approach' | 'optimization' | 'pattern';
}

export type PersonalityType = 
  | 'D' | 'M'  // Detail vs Macro
  | 'C' | 'E'  // Conservative vs Experimental
  | 'P' | 'H'  // Practical vs Theoretical
  | 'A' | 'S'; // Active vs Static

export type AnswerLevel = -3 | -2 | -1 | 0 | 1 | 2 | 3;
