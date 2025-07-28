import React, { useEffect } from 'react';
import { usePagination } from './usePagination';
import { scrollToTopPagination } from './scrollToTopPagination';
import './css/pagination.css';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  initialPage?: number;
  onPageChange?: (newPage: number) => void;
  notFoundElement: React.ReactNode;

  children: (currentItems: T[], PaginationControls: React.ReactNode) => React.ReactNode;
}

export function Pagination<T>({
  items,
  itemsPerPage = 5,
  initialPage = 1,
  onPageChange,
  notFoundElement,
  children,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Проверка: если initialPage некорректен — показываем 404
  if (initialPage < 1 || initialPage > totalPages) {
    return <>{notFoundElement || null}</>;
  }

  const { currentItems, currentPage, goToPage, nextPage, prevPage } = usePagination(items, itemsPerPage, initialPage);

  useEffect(() => {
    scrollToTopPagination();
  }, [currentPage]);

  const handleGoToPage = (page: number) => {
    if (page !== currentPage) {
      goToPage(page);
      onPageChange?.(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      prevPage();
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      nextPage();
      onPageChange?.(currentPage + 1);
    }
  };

  const controls =
    totalPages > 1 ? (
      <div className="pagination-controls__container">
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Назад
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => handleGoToPage(page)} disabled={page === currentPage}>
              {page}
            </button>
          ))}

          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Вперёд
          </button>
        </div>
      </div>
    ) : null;

  return <>{children(currentItems, controls)}</>;
}
