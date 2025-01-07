export type PersonalityType = 'D' | 'M' | 'C' | 'E' | 'P' | 'H' | 'A' | 'S';

export type QuestionCategory = 'expression' | 'approach' | 'optimization' | 'pattern';

export type AnswerLevel = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export interface Question {
  id: number;
  category: QuestionCategory;
  text: string;
  targetType: PersonalityType;
  oppositeType: PersonalityType;
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

export interface UserAnswer {
  questionId: number;
  score: AnswerLevel;
}
