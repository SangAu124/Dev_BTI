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
