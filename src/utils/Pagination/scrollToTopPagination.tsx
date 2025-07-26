import { useEffect, useRef } from 'react';

export function scrollToTopPagination(smooth: boolean = true) {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
}

export function useScrollOnPageChange(currentPage: number, onPageChange?: (page: number) => void) {
  const prevPage = useRef(currentPage);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      prevPage.current = currentPage;
      return;
    }

    if (currentPage !== prevPage.current) {
      scrollToTopPagination();
      onPageChange?.(currentPage);
      prevPage.current = currentPage;
    }
  }, [currentPage, onPageChange]);
}
