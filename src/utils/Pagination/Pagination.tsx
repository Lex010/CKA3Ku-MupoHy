import React, { useEffect } from 'react';
import { usePagination } from './usePagination';
import { scrollToTopPagination } from './scrollToTopPagination';
import { usePaginationQuerySync } from './usePaginationQuerySync';
import { getVisiblePagesButtons } from './getVisiblePagesButtons';
import './css/pagination.css';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  onPageChange?: (newPage: number) => void;
  notFoundElement: React.ReactNode;
  children: (
    currentItems: T[],
    PaginationControls: React.ReactNode,
    paginationState: { currentPage: number; totalPages: number }
  ) => React.ReactNode;
}

export function Pagination<T>({
  items,
  itemsPerPage = 5,
  onPageChange,
  notFoundElement,
  children,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setPage, isInvalid] = usePaginationQuerySync(totalPages);

  const { currentItems, goToPage, nextPage, prevPage } = usePagination(items, itemsPerPage, currentPage);

  useEffect(() => {
    scrollToTopPagination();
  }, [currentPage]);

  if (isInvalid || currentPage < 1 || currentPage > totalPages) {
    return <>{notFoundElement || null}</>;
  }

  const handleGoToPage = (page: number) => {
    if (page !== currentPage) {
      goToPage(page);
      onPageChange?.(page);
      setPage(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      prevPage();
      onPageChange?.(currentPage - 1);
      setPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      nextPage();
      onPageChange?.(currentPage + 1);
      setPage(currentPage + 1);
    }
  };

  const visiblePages = getVisiblePagesButtons(currentPage, totalPages);

  const controls =
    totalPages > 1 ? (
      <div className="pagination-controls__container">
        <div className="pagination-controls">
          <button
            className="pagination-controls__btn pagination-controls__arrow-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            «
          </button>

          {visiblePages.map((page, index) =>
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                ...
              </span>
            ) : (
              <button
                className="pagination-controls__btn"
                key={page}
                onClick={() => handleGoToPage(Number(page))}
                disabled={page === currentPage}
              >
                {page}
              </button>
            )
          )}

          <button
            className="pagination-controls__btn pagination-controls__arrow-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    ) : null;

  return <>{children(currentItems, controls, { currentPage, totalPages })}</>;
}
