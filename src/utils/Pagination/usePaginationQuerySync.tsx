import { useSearchParams } from 'react-router-dom';

/**
 * Хук для синхронизации текущей страницы с URL-параметром `page`
 */
export function usePaginationQuerySync(): [number, (newPage: number) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const setPage = (newPage: number) => {
    if (newPage === 1) {
      searchParams.delete('page');
      setSearchParams(searchParams, { replace: false });
    } else {
      setSearchParams({ page: newPage.toString() }, { replace: false });
    }
  };

  return [currentPage, setPage];
}
