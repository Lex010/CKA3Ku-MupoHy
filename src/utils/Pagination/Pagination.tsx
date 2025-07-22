import React from 'react';
import { usePagination } from './usePagination';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  children: (currentItems: T[], PaginationControls: React.ReactElement) => React.ReactNode;
}

export function Pagination<T>({ items, itemsPerPage = 5, children }: PaginationProps<T>) {
  const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage } = usePagination(items, itemsPerPage);

  const controls = (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => goToPage(page)} disabled={page === currentPage}>
          {page}
        </button>
      ))}

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );

  return <>{children(currentItems, controls)}</>;
}
