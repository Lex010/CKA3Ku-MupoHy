import React from 'react';
import { usePagination } from './usePagination';
import './css/pagination.css';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;

  /* Начальная страница */
  initialPage?: number;

  /* Колбэк при смене страницы */
  onPageChange?: (newPage: number) => void;

  children: (currentItems: T[], PaginationControls: React.ReactElement) => React.ReactNode;
}

export function Pagination<T>({
  items,
  itemsPerPage = 5,
  initialPage = 1,
  onPageChange,
  children,
}: PaginationProps<T>) {
  const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage } = usePagination(
    items,
    itemsPerPage,
    initialPage
  );

  const handleGoToPage = (page: number) => {
    goToPage(page);
    if (onPageChange) onPageChange(page);
  };

  const handlePrevPage = () => {
    prevPage();
    if (onPageChange) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    nextPage();
    if (onPageChange) onPageChange(currentPage + 1);
  };

  const controls = (
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
  );

  return <>{children(currentItems, controls)}</>;
}
