import { Question } from '../types';

export const questions: Question[] = [
  // 코드 표현 방식 (D vs M) - 5문항
  {
    id: 1,
    category: 'expression',
    text: '코드 리뷰에서 코드에 관한 주석 또는 코드의 의도가 느껴지지 않는다는 의견을 자주 남기는 빈도가 높은가요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 2,
    category: 'expression',
    text: '팀 프로젝트시 코드로 설명하기 보다 주석을 잘 활용하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 3,
    category: 'expression',
    text: '동료와 코드를 공유할 때 설명 문서 또는 설계서를 함께 첨부하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 4,
    category: 'expression',
    text: '변수명이 길어지더라도 설명적인 이름을 선호하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 5,
    category: 'expression',
    text: '코드를 작성할 때 주석 작성에 많은 시간을 투자하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },

  // 접근 방식 (C vs E) - 5문항
  {
    id: 6,
    category: 'approach',
    text: '새로운 기술 도입을 제안하기 전에 충분한 검증 기간을 두시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 7,
    category: 'approach',
    text: '장애 없이 잘 작동하는 기존 코드를 더 좋은 성능으로 개선하는 것을 주저하시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 8,
    category: 'approach',
    text: '대규모 리팩토링보다 점진적인 개선을 선호하시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 9,
    category: 'approach',
    text: '새로운 프레임워크 도입 시 호환성 또는 요구사항 충족 여부를 가장 먼저 확인하시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 10,
    category: 'approach',
    text: '기능 개발보다 버그 수정, 고도화 작업에 더 많은 관심이 있으신가요?',
    targetType: 'C',
    oppositeType: 'E'
  },

  // 최적화 기준 (P vs H) - 5문항
  {
    id: 11,
    category: 'optimization',
    text: '코드의 가독성보다 실행 속도가 더 중요하다고 생각하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 12,
    category: 'optimization',
    text: '성능 최적화 작업에 특별한 즐거움을 느끼시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 13,
    category: 'optimization',
    text: '코드 리뷰에서 성능 관련 의견을 주로 제시하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 14,
    category: 'optimization',
    text: '사용성보다 응답 속도를 더 중요하게 생각하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 15,
    category: 'optimization',
    text: '최적화를 위해 코드 복잡도가 높아지는 것을 감수하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },

  // 개발 패턴 (A vs S) - 5문항
  {
    id: 16,
    category: 'pattern',
    text: '상황에 따라 계획을 유연하게 수정하는 편인가요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 17,
    category: 'pattern',
    text: '문서 작성보다 프로토타입 제작을 먼저 시작하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 18,
    category: 'pattern',
    text: '번뜩이는 아이디어 또는 로직을 바로 코드에 적용하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 19,
    category: 'pattern',
    text: '정해진 계획보다 그때그때 필요한 기능 구현하는 것을 중요하게 생각하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 20,
    category: 'pattern',
    text: '회의로 결정된 사항도 상황에 따라 변경할 수 있다고 생각하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  }
];
