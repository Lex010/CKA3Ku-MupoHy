import { useEffect } from 'react';
import { getVisiblePagesButtons } from '../getVisiblePagesButtons';
import '../css/pagination.css';

interface SimplePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function SimplePagination({ currentPage, totalPages, onPageChange }: SimplePaginationProps) {
  // Фикс: если currentPage > totalPages, автоматически переключаем на последнюю страницу
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const visiblePages = getVisiblePagesButtons(currentPage, totalPages);

  return (
    <div className="pagination-controls__container">
      <div className="pagination-controls">
        <button
          className="pagination-controls__btn pagination-controls__arrow-btn-left"
          onClick={() => goToPage(currentPage - 1)}
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
              key={page}
              className="pagination-controls__btn"
              onClick={() => goToPage(Number(page))}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}

        <button
          className="pagination-controls__btn pagination-controls__arrow-btn-right"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
}
