import { TestResult } from '../types';

type ResultMap = {
  [key: string]: TestResult;
};

export const results: ResultMap = {
  'DCPA': {
    type: 'DCPA',
    nickname: 'The Architect',
    description: '안정적이고 체계적인 설계를 추구하는 개발자',
    strengths: [
      '체계적인 설계 능력',
      '코드 품질 유지',
      '안정성 중시',
      '성능 최적화 능력'
    ],
    weaknesses: [
      '새로운 기술 도입에 보수적',
      '변화 수용에 시간이 필요',
      '과도한 문서화 경향'
    ],
    recommendedLanguages: ['Java', 'C++', 'TypeScript'],
    recommendedPositions: ['백엔드 개발자', '시스템 아키텍트', 'DevOps 엔지니어'],
    famousDevelopers: ['Martin Fowler', 'Robert C. Martin'],
    compatibility: {
      good: ['MEPS', 'DCHS'],
      bad: ['MEHA', 'DCHS']
    }
  },
  'DCPS': {
    type: 'DCPS',
    nickname: 'The Guardian',
    description: '안정성과 보안을 최우선으로 생각하는 개발자',
    strengths: [
      '보안 중심적 사고',
      '체계적인 테스트',
      '안정적인 운영',
      '문제 해결 능력'
    ],
    weaknesses: [
      '혁신적 시도 부족',
      '과도한 보수성',
      '느린 의사결정'
    ],
    recommendedLanguages: ['Java', 'Python', 'Go'],
    recommendedPositions: ['보안 엔지니어', '백엔드 개발자', 'QA 엔지니어'],
    famousDevelopers: ['Linus Torvalds', 'Ken Thompson'],
    compatibility: {
      good: ['MEHA', 'DCHA'],
      bad: ['MCPA', 'DEHS']
    }
  },
  'DCHA': {
    type: 'DCHA',
    nickname: 'The Teacher',
    description: '지식 공유와 팀 성장을 중요시하는 개발자',
    strengths: [
      '뛰어난 의사소통 능력',
      '체계적인 문서화',
      '멘토링 능력',
      '코드 리뷰 스킬'
    ],
    weaknesses: [
      '과도한 설명 경향',
      '의사결정 지연',
      '실험적 시도 부족'
    ],
    recommendedLanguages: ['Python', 'JavaScript', 'Ruby'],
    recommendedPositions: ['테크 리드', '개발 강사', '기술 문서 작성자'],
    famousDevelopers: ['DHH', 'Kent Beck'],
    compatibility: {
      good: ['MCPS', 'DEHA'],
      bad: ['MCPA', 'DEPS']
    }
  },
  'DCHS': {
    type: 'DCHS',
    nickname: 'The Specialist',
    description: '깊이 있는 기술적 전문성을 추구하는 개발자',
    strengths: [
      '깊은 기술적 이해',
      '문제 해결 능력',
      '코드 최적화',
      '디버깅 스킬'
    ],
    weaknesses: [
      '협업 어려움',
      '커뮤니케이션 부족',
      '넓은 시야 부족'
    ],
    recommendedLanguages: ['C++', 'Rust', 'Assembly'],
    recommendedPositions: ['시스템 프로그래머', '임베디드 개발자', '게임 엔진 개발자'],
    famousDevelopers: ['John Carmack', 'Fabrice Bellard'],
    compatibility: {
      good: ['DCPA', 'MEHS'],
      bad: ['MCHA', 'DEPA']
    }
  },
  'DEPA': {
    type: 'DEPA',
    nickname: 'The Leader',
    description: '효율적인 팀 운영과 프로젝트 관리를 중시하는 개발자',
    strengths: [
      '프로젝트 관리 능력',
      '리더십',
      '의사결정 능력',
      '팀 조화 유지'
    ],
    weaknesses: [
      '기술적 깊이 부족',
      '직접 코딩 시간 부족',
      '과도한 회의'
    ],
    recommendedLanguages: ['Python', 'JavaScript', 'Java'],
    recommendedPositions: ['프로젝트 매니저', '개발 팀장', '스크럼 마스터'],
    famousDevelopers: ['Ward Cunningham', 'Jeff Sutherland'],
    compatibility: {
      good: ['DCHS', 'MCPA'],
      bad: ['MEHS', 'DCHA']
    }
  },
  'DEPS': {
    type: 'DEPS',
    nickname: 'The Mediator',
    description: '팀원 간의 조화와 협업을 중시하는 개발자',
    strengths: [
      '뛰어난 커뮤니케이션',
      '갈등 해결 능력',
      '요구사항 분석',
      '협업 능력'
    ],
    weaknesses: [
      '기술적 결정 어려움',
      '과도한 타협',
      '주관성 부족'
    ],
    recommendedLanguages: ['Python', 'Ruby', 'PHP'],
    recommendedPositions: ['비즈니스 분석가', '제품 관리자', '애자일 코치'],
    famousDevelopers: ['David Heinemeier Hansson', 'Yukihiro Matsumoto'],
    compatibility: {
      good: ['MCHS', 'DEHA'],
      bad: ['DCPA', 'MEPA']
    }
  },
  'DEHA': {
    type: 'DEHA',
    nickname: 'The Visionary',
    description: '혁신적인 제품과 사용자 경험을 추구하는 개발자',
    strengths: [
      'UX/UI 디자인 감각',
      '창의적 문제 해결',
      '트렌드 분석',
      '제품 비전 제시'
    ],
    weaknesses: [
      '구현 현실성 부족',
      '기술적 제약 무시',
      '완벽주의 성향'
    ],
    recommendedLanguages: ['JavaScript', 'Swift', 'Kotlin'],
    recommendedPositions: ['프론트엔드 개발자', 'UX 엔지니어', '모바일 앱 개발자'],
    famousDevelopers: ['Steve Wozniak', 'Jonathan Ive'],
    compatibility: {
      good: ['DCPA', 'MCHS'],
      bad: ['MEPA', 'DCHS']
    }
  },
  'DEHS': {
    type: 'DEHS',
    nickname: 'The Craftsman',
    description: '품질과 사용자 만족도를 중시하는 개발자',
    strengths: [
      '코드 품질 관리',
      '사용자 중심 설계',
      '디테일 중시',
      '테스트 주도 개발'
    ],
    weaknesses: [
      '개발 속도 저하',
      '과도한 완벽주의',
      '우선순위 혼란'
    ],
    recommendedLanguages: ['Ruby', 'Python', 'Elixir'],
    recommendedPositions: ['풀스택 개발자', '품질 관리자', '테스트 엔지니어'],
    famousDevelopers: ['Kent Beck', 'Uncle Bob Martin'],
    compatibility: {
      good: ['MCPA', 'DEPA'],
      bad: ['MEHS', 'DCHA']
    }
  },
  'MCPA': {
    type: 'MCPA',
    nickname: 'The Pioneer',
    description: '새로운 기술과 방법론을 추구하는 개발자',
    strengths: [
      '기술 트렌드 파악',
      '빠른 학습 능력',
      '실험적 시도',
      '혁신적 사고'
    ],
    weaknesses: [
      '안정성 경시',
      '기존 시스템 무시',
      '과도한 리팩토링'
    ],
    recommendedLanguages: ['Rust', 'Go', 'WebAssembly'],
    recommendedPositions: ['연구 개발자', '기술 에반젤리스트', '아키텍트'],
    famousDevelopers: ['Brendan Eich', 'Anders Hejlsberg'],
    compatibility: {
      good: ['DEHS', 'MCHA'],
      bad: ['DCPS', 'MEPA']
    }
  },
  'MCPS': {
    type: 'MCPS',
    nickname: 'The Analyst',
    description: '데이터와 논리적 접근을 중시하는 개발자',
    strengths: [
      '데이터 분석 능력',
      '알고리즘 설계',
      '성능 최적화',
      '논리적 사고'
    ],
    weaknesses: [
      '실용성 간과',
      '과도한 분석',
      '직관 무시'
    ],
    recommendedLanguages: ['Python', 'R', 'Julia'],
    recommendedPositions: ['데이터 사이언티스트', '알고리즘 개발자', '연구원'],
    famousDevelopers: ['Guido van Rossum', 'Donald Knuth'],
    compatibility: {
      good: ['DEPA', 'MCHS'],
      bad: ['MEHA', 'DCPA']
    }
  },
  'MCHA': {
    type: 'MCHA',
    nickname: 'The Artist',
    description: '창의적이고 예술적인 개발을 추구하는 개발자',
    strengths: [
      '시각적 디자인 능력',
      '창의적 코딩',
      '사용자 경험 중시',
      '트렌드 선도'
    ],
    weaknesses: [
      '구조화 부족',
      '일관성 부족',
      '기술적 부채 누적'
    ],
    recommendedLanguages: ['JavaScript', 'Processing', 'Swift'],
    recommendedPositions: ['크리에이티브 개발자', 'UI 개발자', '인터랙티브 디자이너'],
    famousDevelopers: ['John Resig', 'Mike Bostock'],
    compatibility: {
      good: ['DCPS', 'MEPA'],
      bad: ['DEHS', 'MCPA']
    }
  },
  'MCHS': {
    type: 'MCHS',
    nickname: 'The Researcher',
    description: '깊이 있는 연구와 이론적 접근을 선호하는 개발자',
    strengths: [
      '연구 능력',
      '알고리즘 이해',
      '수학적 사고',
      '학습 능력'
    ],
    weaknesses: [
      '실무 적용 어려움',
      '과도한 학구열',
      '의사소통 부족'
    ],
    recommendedLanguages: ['Haskell', 'OCaml', 'Scala'],
    recommendedPositions: ['연구원', '컴파일러 개발자', '머신러닝 엔지니어'],
    famousDevelopers: ['John McCarthy', 'Alan Kay'],
    compatibility: {
      good: ['DEPA', 'MCPA'],
      bad: ['MEHA', 'DCHS']
    }
  },
  'MEPA': {
    type: 'MEPA',
    nickname: 'The Entrepreneur',
    description: '비즈니스 가치와 실용성을 중시하는 개발자',
    strengths: [
      '비즈니스 이해',
      'MVP 개발',
      '빠른 의사결정',
      '시장 중심 사고'
    ],
    weaknesses: [
      '기술 부채 누적',
      '품질 관리 소홀',
      '단기 성과 중시'
    ],
    recommendedLanguages: ['JavaScript', 'Python', 'PHP'],
    recommendedPositions: ['스타트업 CTO', '제품 개발자', '기술 영업'],
    famousDevelopers: ['Mark Zuckerberg', 'Jack Dorsey'],
    compatibility: {
      good: ['DCHS', 'MCHA'],
      bad: ['DEPS', 'MCPA']
    }
  },
  'MEPS': {
    type: 'MEPS',
    nickname: 'The Pragmatist',
    description: '실용적이고 효율적인 해결책을 추구하는 개발자',
    strengths: [
      '문제 해결 능력',
      '실용적 접근',
      '빠른 구현',
      '자원 효율성'
    ],
    weaknesses: [
      '장기 계획 부족',
      '문서화 소홀',
      '기술 부채'
    ],
    recommendedLanguages: ['Python', 'JavaScript', 'Go'],
    recommendedPositions: ['풀스택 개발자', '솔루션 아키텍트', '기술 컨설턴트'],
    famousDevelopers: ['Joel Spolsky', 'Jeff Atwood'],
    compatibility: {
      good: ['DEHA', 'MCPA'],
      bad: ['DCHS', 'MEHA']
    }
  },
  'MEHA': {
    type: 'MEHA',
    nickname: 'The Innovator',
    description: '혁신적인 아이디어로 새로운 가치를 창출하는 개발자',
    strengths: [
      '창의적 문제 해결',
      '빠른 프로토타이핑',
      '새로운 기술 습득력',
      '유연한 사고'
    ],
    weaknesses: [
      '문서화 부족',
      '안정성 경시',
      '일관성 부족'
    ],
    recommendedLanguages: ['JavaScript', 'Python', 'Rust'],
    recommendedPositions: ['프론트엔드 개발자', 'UI/UX 개발자', '스타트업 CTO'],
    famousDevelopers: ['Dan Abramov', 'Rich Harris'],
    compatibility: {
      good: ['DCPS', 'MCHA'],
      bad: ['DCPA', 'MCHS']
    }
  },
  'MEHS': {
    type: 'MEHS',
    nickname: 'The Explorer',
    description: '새로운 기술과 방법을 탐구하는 실험적 개발자',
    strengths: [
      '기술 트렌드 파악',
      '실험적 접근',
      '빠른 학습',
      '적응력'
    ],
    weaknesses: [
      '깊이 있는 이해 부족',
      '불안정한 결과물',
      '집중력 부족'
    ],
    recommendedLanguages: ['TypeScript', 'Kotlin', 'Dart'],
    recommendedPositions: ['프론트엔드 개발자', '모바일 앱 개발자', '기술 블로거'],
    famousDevelopers: ['Ryan Dahl', 'TJ Holowaychuk'],
    compatibility: {
      good: ['DCPA', 'MEPS'],
      bad: ['DEHS', 'MCHS']
    }
  }
};
