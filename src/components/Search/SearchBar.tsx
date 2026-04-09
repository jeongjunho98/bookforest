"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input 
          type="text" 
          placeholder="숲속에서 길을 잃듯 책을 찾아보세요... (제목, 저자, 출판사)" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          🔍
        </button>
      </form>
    </div>
  );
}
