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

const VALID_IMAGES = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400&h=600&auto=format&fit=crop"
];

const REAL_BOOKS_DATA = [
  { title: "구의 증명", author: "최진영", publisher: "은행나무", price: 12000, cat: "소설" },
  { title: "모순", author: "양귀자", publisher: "쓰다", price: 13000, cat: "소설" },
  { title: "역행자", author: "자청", publisher: "웅진지식하우스", price: 17500, cat: "자기계발" },
  { title: "세이노의 가르침", author: "세이노", publisher: "데이원", price: 7200, cat: "자기계발" },
  { title: "돈의 속성", author: "김승호", publisher: "스노우폭스북스", price: 17800, cat: "경제경영" },
  { title: "사피엔스", author: "유발 하라리", publisher: "김영사", price: 22000, cat: "인문" },
  { title: "미움받을 용기", author: "기시미 이치로", publisher: "인플루엔셜", price: 14900, cat: "인문" },
  { title: "도시와 그 불확실한 벽", author: "무라카미 하루키", publisher: "문학동네", price: 19500, cat: "소설" },
  { title: "노르웨이의 숲", author: "무라카미 하루키", publisher: "민음사", price: 15000, cat: "소설" },
  { title: "파친코 1", author: "이민진", publisher: "인플루엔셜", price: 15800, cat: "소설" },
  { title: "작별인사", author: "김영하", publisher: "복복서가", price: 14000, cat: "소설" },
  { title: "살인자의 기억법", author: "김영하", publisher: "문학동네", price: 12000, cat: "소설" },
  { title: "연금술사", author: "파울로 코엘료", publisher: "문학동네", price: 12000, cat: "소설" },
  { title: "데미안", author: "헤르만 헤세", publisher: "민음사", price: 12000, cat: "소설" },
  { title: "개미", author: "베르나르 베르베르", publisher: "열린책들", price: 14800, cat: "소설" },
  { title: "인간 실격", author: "다자이 오사무", publisher: "민음사", price: 9000, cat: "소설" },
  { title: "총 균 쇠", author: "재레드 다이아몬드", publisher: "문학사상", price: 28000, cat: "인문" },
  { title: "코스모스", author: "칼 세이건", publisher: "사이언스북스", price: 19900, cat: "과학" },
  { title: "부자 아빠 가난한 아빠", author: "로버트 기요사키", publisher: "민음인", price: 15800, cat: "경제경영" },
  { title: "트렌드 코리아 2024", author: "김난도", publisher: "미래의창", price: 19000, cat: "경제경영" },
  { title: "원씽", author: "게리 켈러", publisher: "비즈니스북스", price: 14000, cat: "자기계발" },
  { title: "아주 작은 습관의 힘", author: "제임스 클리어", publisher: "비즈니스북스", price: 16000, cat: "자기계발" },
  { title: "타이탄의 도구들", author: "팀 페리스", publisher: "토네이도", price: 18000, cat: "자기계발" },
  { title: "그릿", author: "앤절라 더크워스", publisher: "비즈니스북스", price: 16000, cat: "자기계발" },
  { title: "이기적 유전자", author: "리처드 도킨스", publisher: "을유문화사", price: 20000, cat: "인문" }
];

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
    coverImage: VALID_IMAGES[0],
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
    coverImage: VALID_IMAGES[1],
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
    coverImage: VALID_IMAGES[2],
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
    coverImage: VALID_IMAGES[3],
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
    coverImage: VALID_IMAGES[4],
    rating: 4.7,
    reviewCount: 4200,
    tags: ["판타지", "베스트셀러"],
    isBest: true
  }
];

// 6번부터 105번까지 실제 도서 데이터로 채움
for (let i = 6; i <= 105; i++) {
  const data = REAL_BOOKS_DATA[(i - 6) % REAL_BOOKS_DATA.length];
  MOCK_BOOKS.push({
    id: i.toString(),
    title: i > 30 ? `${data.title} (개정판 ${i})` : data.title,
    author: data.author,
    publisher: data.publisher,
    publishDate: "2023-01-01",
    price: data.price,
    description: `${data.title}의 정식 출판본입니다. 베스트셀러 스테디셀러로 많은 사랑을 받고 있습니다.`,
    category: data.cat,
    coverImage: VALID_IMAGES[i % 10],
    rating: 4.0 + (Math.random() * 1.0),
    reviewCount: 100 + i,
    tags: ["베스트셀러", "추천도서"]
  });
}
