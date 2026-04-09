import { createClient } from '@supabase/supabase-js';
import { Book } from '@/data/mockBooks';

// 환경 변수 설정 (Vercel/Supabase 대시보드에서 설정 필요)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const bookService = {
  // DB에서 도서 목록 가져오기 (Pagination 적용)
  getBooks: async (page: number = 1, limit: number = 20): Promise<{ books: Book[], total: number }> => {
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    // Supabase DB 쿼리
    const { data, count, error } = await supabase
      .from('books')
      .select('*', { count: 'exact' })
      .range(start, end)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("DB Fetch Error:", error);
      // 에러 발생 시 Fallback (Mock 데이터 사용)
      return { books: [], total: 0 };
    }

    return {
      books: data as Book[],
      total: count || 0
    };
  },

  // 도서 상세 조회
  getBookById: async (id: string): Promise<Book | undefined> => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', id)
      .single();

    if (error) return undefined;
    return data as Book;
  }
};
