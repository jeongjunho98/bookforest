import { createClient } from '@supabase/supabase-js';

// Book 인터페이스 재정의 (빌드 에러 방지)
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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const bookService = {
  getBooks: async (page: number = 1, limit: number = 20): Promise<{ books: Book[], total: number }> => {
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    const { data, count, error } = await supabase
      .from('books')
      .select('*', { count: 'exact' })
      .range(start, end)
      .order('created_at', { ascending: false });

    if (error) return { books: [], total: 0 };

    return {
      books: (data as any[])?.map(item => ({
        ...item,
        publishDate: item.publish_date, // DB의 snake_case를 camelCase로 변환
        coverImage: item.cover_image
      })) || [],
      total: count || 0
    };
  },

  getBookById: async (id: string): Promise<Book | undefined> => {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) return undefined;
    return {
      ...data,
      publishDate: data.publish_date,
      coverImage: data.cover_image
    } as any;
  }
};
