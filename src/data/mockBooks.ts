export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  publishDate: string;
  price: number;
  description: string;
  category: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  isBest?: boolean;
}

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "채식주의자",
    author: "한강",
    publisher: "창비",
    publishDate: "2007-10-30",
    price: 15000,
    description: "육식을 거부하며 나무가 되고자 하는 여자의 이야기.",
    category: "소설",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 2540,
    tags: ["맨부커상", "현대소설"],
    isBest: true
  },
  {
    id: "2",
    title: "소년이 온다",
    author: "한강",
    publisher: "창비",
    publishDate: "2014-05-19",
    price: 14000,
    description: "광주민주화운동을 소재로 한 한강 작가의 장편소설.",
    category: "소설",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 1820,
    tags: ["역사소설", "감동"],
    isBest: true
  },
  {
    id: "3",
    title: "아몬드",
    author: "손원평",
    publisher: "창비",
    publishDate: "2017-03-31",
    price: 13000,
    description: "감정을 느끼지 못하는 소년의 특별한 성장 이야기.",
    category: "소설",
    coverImage: "https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 3100,
    tags: ["성장소설", "베스트셀러"],
    isBest: true
  },
  {
    id: "4",
    title: "불편한 편의점",
    author: "김호연",
    publisher: "나무옆의자",
    publishDate: "2021-04-20",
    price: 14000,
    description: "고단한 시대를 살아가는 우리에게 전하는 따뜻한 위로.",
    category: "소설",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 5600,
    tags: ["힐링", "K-소설"],
    isBest: true
  },
  {
    id: "5",
    title: "달러구트 꿈 백화점",
    author: "이미예",
    publisher: "팩토리나인",
    publishDate: "2020-07-08",
    price: 13800,
    description: "잠들어야만 입장 가능한 마을의 꿈 파는 가게 이야기.",
    category: "소설",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 4200,
    tags: ["판타지", "베스트셀러"],
    isBest: true
  }
];

// 105권까지 안정적인 고화질 자연/책 이미지로 채움
for (let i = 6; i <= 105; i++) {
  const categories = ["소설", "에세이", "경제경영", "자기계발", "인문"];
  MOCK_BOOKS.push({
    id: i.toString(),
    title: `숲의 지혜 ${i}권`,
    author: "책갈피 숲 저자",
    publisher: "책갈피 숲 출판",
    publishDate: "2024-01-01",
    price: 15000 + i,
    description: "이 책은 숲의 고요함과 지혜를 담고 있습니다.",
    category: categories[i % 5],
    coverImage: `https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?q=80&w=400&h=600&auto=format&fit=crop`,
    rating: 4.5,
    reviewCount: 100 + i,
    tags: ["베스트셀러", "추천도서"]
  });
}
