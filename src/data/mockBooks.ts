export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  publishDate: string;
  price: number;
  description: string;
  category: string;
  coverImage?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "숲의 기억: 사라진 시간을 찾아서",
    author: "김서림",
    publisher: "푸른숲 출판",
    publishDate: "2024-03-15",
    price: 15000,
    description: "짙은 안개 속 숲에서 발견된 낡은 일기장. 그 속에 담긴 잊혀진 기억들을 추적하는 감성 미스터리 소설.",
    category: "소설",
    rating: 4.8,
    reviewCount: 124,
    tags: ["베스트셀러", "미스터리", "감성"],
  },
  {
    id: "2",
    title: "오래된 나무의 지혜",
    author: "박지성",
    publisher: "나무와사람",
    publishDate: "2024-01-10",
    price: 18000,
    description: "수백 년을 버텨온 나무들이 우리에게 전하는 삶의 철학과 평온에 관한 에세이.",
    category: "에세이",
    rating: 4.9,
    reviewCount: 89,
    tags: ["힐링", "철학", "추천도서"],
  },
  {
    id: "3",
    title: "바람이 머무는 곳: 제주 숲 일기",
    author: "이바람",
    publisher: "바람의숲",
    publishDate: "2023-11-20",
    price: 14500,
    description: "제주 곶자왈 숲에서 보낸 1년간의 기록. 바람과 햇살, 그리고 이름 모를 풀꽃들의 이야기.",
    category: "에세이",
    rating: 4.7,
    reviewCount: 56,
    tags: ["여행", "자연", "일기"],
  },
  {
    id: "4",
    title: "새벽녘 숲길 산책",
    author: "최새벽",
    publisher: "새벽출판사",
    publishDate: "2024-02-05",
    price: 16000,
    description: "매일 새벽 숲을 걸으며 발견한 작은 기적들. 일상을 특별하게 만드는 산책의 힘.",
    category: "자기계발",
    rating: 4.6,
    reviewCount: 210,
    tags: ["동기부여", "습관", "산책"],
  },
];
