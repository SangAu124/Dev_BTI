import { Question } from '../types';

export const questions: Question[] = [
  // 코드 표현 방식 (D vs M) - 5문항
  {
    id: 1,
    category: 'expression',
    text: '팀원이 작성한 코드를 보면서 "이 부분은 주석이 필요할 것 같아"라고 자주 생각하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 2,
    category: 'expression',
    text: '동료가 "이 변수명 너무 길지 않아?"라고 물어볼 때, 당신은 "이유가 있으니까 이대로 두자"고 답하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 3,
    category: 'expression',
    text: '코드 리뷰에서 "이 부분 설명이 더 필요해"라는 댓글을 자주 남기시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 4,
    category: 'expression',
    text: '신입 개발자가 "코드가 어려워요"라고 할 때, "문서화가 부족해서 그래"라고 생각하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },
  {
    id: 5,
    category: 'expression',
    text: '동료가 "코드만 봐도 이해가 되는데?"라고 말할 때, "설명이 더 필요하지 않을까?"라고 생각하시나요?',
    targetType: 'D',
    oppositeType: 'M'
  },

  // 접근 방식 (C vs E) - 5문항
  {
    id: 6,
    category: 'approach',
    text: '팀원이 "이 새로운 프레임워크 한번 써볼까요?"라고 제안했을 때, 망설여지나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 7,
    category: 'approach',
    text: '오래된 레거시 코드를 보면서 "아직은 잘 돌아가니까..."라고 생각하시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 8,
    category: 'approach',
    text: '팀장이 "이번에 시스템 전면 개편하자"고 했을 때, 불안한 마음이 드나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 9,
    category: 'approach',
    text: '동료들이 "이 라이브러리 너무 좋다"고 할 때, "현재 시스템이랑 잘 맞을까?"를 먼저 고민하시나요?',
    targetType: 'C',
    oppositeType: 'E'
  },
  {
    id: 10,
    category: 'approach',
    text: '새로운 기능 개발보다 버그 수정에 더 많은 시간을 투자하고 싶으신가요?',
    targetType: 'C',
    oppositeType: 'E'
  },

  // 최적화 기준 (P vs H) - 5문항
  {
    id: 11,
    category: 'optimization',
    text: '동료가 "이 코드 이해하기 어려워"라고 말했을 때, "그래도 성능이 좋으니까 이대로 두자"고 생각하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 12,
    category: 'optimization',
    text: '코드 리뷰에서 "이렇게 하면 더 빨라질 것 같은데..."라는 의견을 자주 남기시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 13,
    category: 'optimization',
    text: '팀 회의에서 "이번 분기는 성능 개선에 집중하자"는 의견에 가장 먼저 동의하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 14,
    category: 'optimization',
    text: '사용자들이 "UI가 불편하다"고 할 때, "그래도 응답 속도가 빨라졌잖아"라고 생각하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },
  {
    id: 15,
    category: 'optimization',
    text: '리팩토링할 때 "이 부분은 성능 때문에 이렇게 할 수밖에 없어"라고 자주 말씀하시나요?',
    targetType: 'P',
    oppositeType: 'H'
  },

  // 개발 패턴 (A vs S) - 5문항
  {
    id: 16,
    category: 'pattern',
    text: '팀원들이 "설계 회의를 더 하자"고 할 때, "일단 개발부터 시작하자"고 말씀하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 17,
    category: 'pattern',
    text: '프로젝트 시작 전에 "일단 간단한 프로토타입부터 만들어볼까요?"라고 제안하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 18,
    category: 'pattern',
    text: '코드를 보다가 "이거 지금 바로 고치면 좋을 것 같은데..."라고 자주 생각하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 19,
    category: 'pattern',
    text: '팀 회의에서 "이번 주에는 이걸 먼저 해보자"처럼 즉흥적인 의견을 자주 내시나요?',
    targetType: 'A',
    oppositeType: 'S'
  },
  {
    id: 20,
    category: 'pattern',
    text: '동료가 "이건 계획대로 하자"고 할 때, "상황에 따라 유연하게 가자"고 말씀하시나요?',
    targetType: 'A',
    oppositeType: 'S'
  }
];
