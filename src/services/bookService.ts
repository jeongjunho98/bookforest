import { MOCK_BOOKS, Book } from "@/data/mockBooks";

export const bookService = {
  // 전체 도서 가져오기 (추후 DB Limit/Offset 연동)
  getBooks: async (page: number = 1, limit: number = 20): Promise<{ books: Book[], total: number }> => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      books: MOCK_BOOKS.slice(start, end),
      total: MOCK_BOOKS.length
    };
  },

  // 특정 도서 상세 정보
  getBookById: async (id: string): Promise<Book | undefined> => {
    return MOCK_BOOKS.find(b => b.id === id);
  },

  // 검색 (서버 사이드 쿼리 시뮬레이션)
  searchBooks: async (query: string): Promise<Book[]> => {
    const lowerQuery = query.toLowerCase();
    return MOCK_BOOKS.filter(book => 
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery)
    );
  }
};
