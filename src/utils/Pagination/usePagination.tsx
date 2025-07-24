import { useState, useEffect } from 'react';

export function usePagination<T>(items: T[], itemsPerPage = 5, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    // Сброс на initialPage при смене списка
    setCurrentPage(initialPage);
  }, [items, itemsPerPage, initialPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    const pageNum = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(pageNum);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  };
}
