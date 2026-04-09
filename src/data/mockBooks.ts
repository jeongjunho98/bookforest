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
    description: "2016년 맨부커 인터내셔널 상 수상작. 한 여자가 육식을 거부하며 벌어지는 파격적인 이야기.",
    category: "소설",
    coverImage: "https://books.google.com/books/content?id=vS_mDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.9,
    reviewCount: 2540,
    tags: ["맨부커상", "현대소설", "필독서"],
    isBest: true
  },
  {
    id: "2",
    title: "소년이 온다",
    author: "한강",
    publisher: "창비",
    publishDate: "2014-05-19",
    price: 14000,
    description: "5.18 광주민주화운동을 소재로 한 한강 작가의 장편소설.",
    category: "소설",
    coverImage: "https://books.google.com/books/content?id=jN7mDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.9,
    reviewCount: 1820,
    tags: ["역사소설", "감동", "스테디셀러"],
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
    coverImage: "https://books.google.com/books/content?id=H8XLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.8,
    reviewCount: 3100,
    tags: ["성장소설", "청소년", "베스트셀러"],
    isBest: true
  },
  {
    id: "4",
    title: "사피엔스",
    author: "유발 하라리",
    publisher: "김영사",
    publishDate: "2015-11-24",
    price: 22000,
    description: "인류의 기원부터 현대 문명까지, 거대한 역사의 흐름을 짚어보는 명저.",
    category: "인문",
    coverImage: "https://books.google.com/books/content?id=F_p_BAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.7,
    reviewCount: 1500,
    tags: ["인류학", "역사", "필독서"]
  },
  {
    id: "5",
    title: "미움받을 용기",
    author: "기시미 이치로",
    publisher: "인플루엔셜",
    publishDate: "2014-11-17",
    price: 14900,
    description: "아들러 심리학을 통해 진정한 자유와 행복을 찾는 법.",
    category: "자기계발",
    coverImage: "https://books.google.com/books/content?id=uN_pBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.6,
    reviewCount: 4200,
    tags: ["심리학", "행복", "스테디셀러"]
  },
  {
    id: "6",
    title: "불편한 편의점",
    author: "김호연",
    publisher: "나무옆의자",
    publishDate: "2021-04-20",
    price: 14000,
    description: "고단한 시대를 살아가는 우리에게 전하는 따뜻한 위로와 웃음.",
    category: "소설",
    coverImage: "https://books.google.com/books/content?id=9H00EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.8,
    reviewCount: 5600,
    tags: ["힐링", "K-소설", "베스트셀러"],
    isBest: true
  },
  {
    id: "7",
    title: "파친코",
    author: "이민진",
    publisher: "인플루엔셜",
    publishDate: "2022-07-27",
    price: 15800,
    description: "4대에 걸친 재일조선인 가족의 파란만장한 삶.",
    category: "소설",
    coverImage: "https://books.google.com/books/content?id=H8XLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.9,
    reviewCount: 2300,
    tags: ["역사소설", "가족", "뉴욕타임스"]
  },
  {
    id: "8",
    title: "트렌드 코리아 2024",
    author: "김난도",
    publisher: "미래의창",
    publishDate: "2023-10-05",
    price: 19000,
    description: "대한민국 소비 트렌드의 흐름을 짚어보는 매년 최고의 경제전망서.",
    category: "경제경영",
    coverImage: "https://books.google.com/books/content?id=9H00EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.5,
    reviewCount: 1100,
    tags: ["트렌드", "경제전망", "2024"]
  },
  {
    id: "9",
    title: "메리골드 마음 세탁소",
    author: "윤정은",
    publisher: "북로망스",
    publishDate: "2023-03-06",
    price: 15000,
    description: "마음의 상처를 지워주는 특별한 세탁소 이야기.",
    category: "소설",
    coverImage: "https://books.google.com/books/content?id=H8XLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.7,
    reviewCount: 950,
    tags: ["판타지", "위로", "베스트셀러"]
  },
  {
    id: "10",
    title: "돈의 속성",
    author: "김승호",
    publisher: "스노우폭스북스",
    publishDate: "2020-06-15",
    price: 17800,
    description: "최상위 부자가 말하는 돈에 대한 태도와 철학.",
    category: "경제경영",
    coverImage: "https://books.google.com/books/content?id=9H00EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 4.8,
    reviewCount: 3800,
    tags: ["재테크", "부의원칙", "스테디셀러"]
  }
];

// 105권까지 채우기 (안정적인 placeholder 이미지 사용)
for (let i = 11; i <= 105; i++) {
  const categories = ["소설", "에세이", "경제경영", "자기계발", "인문"];
  const publishers = ["문학동네", "민음사", "웅진지식하우스", "알에이치코리아", "다산북스"];
  const authors = ["김영하", "무라카미 하루키", "베르나르 베르베르", "정유정", "김진명"];
  
  MOCK_BOOKS.push({
    id: i.toString(),
    title: `도서 제목 ${i}: 숲의 지혜`,
    author: authors[i % 5],
    publisher: publishers[i % 5],
    publishDate: "2024-01-01",
    price: 12000 + (i * 100),
    description: `이 책은 ${i}번째로 추가된 숲의 지혜를 담은 책입니다.`,
    category: categories[i % 5],
    // 이미지가 없는 경우를 대비해 랜덤 고화질 자연/책 이미지 사용
    coverImage: `https://picsum.photos/seed/${i + 123}/400/600`,
    rating: 4.0 + (Math.random() * 1.0),
    reviewCount: Math.floor(Math.random() * 1000),
    tags: ["신상품", "추천도서", "북포레스트"],
    isBest: i % 10 === 0
  });
}
