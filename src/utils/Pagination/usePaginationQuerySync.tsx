import { useSearchParams } from 'react-router-dom';

/**
 * Хук для синхронизации текущей страницы с URL-параметром (по умолчанию 'page')
 * @param totalPages Общее количество страниц
 * @param paramName Имя параметра в URL (по умолчанию 'page')
 * @returns [текущая страница, функция для установки, флаг ошибки]
 */
export function usePaginationQuerySync(
  totalPages: number,
  paramName: string = 'page'
): [number, (newPage: number) => void, boolean] {
  const [searchParams, setSearchParams] = useSearchParams();
  let isInvalid = false;
  let currentPage = 1;

  const rawPage = searchParams.get(paramName);
  const allKeys = Array.from(searchParams.keys());
  // Только один допустимый ключ — строгое совпадение
  const hasOnlyAllowedParam = allKeys.length === 0 || (allKeys.length === 1 && allKeys[0] === paramName);

  if (!hasOnlyAllowedParam) {
    isInvalid = true;
  }

  if (rawPage !== null) {
    const parsed = parseInt(rawPage, 10);
    // const isClean = /^\d+$/.test(rawPage); Проверяет, что значение параметра содержит только цифры (например, "?page=3").
    // Это предотвращает случаи, когда значение содержит лишние символы, например "?page=3?page=4",
    // что может возникнуть из-за ошибок формирования URL и приведёт к некорректному значению.
    const isClean = /^\d+$/.test(rawPage);

    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= totalPages && isClean) {
      currentPage = parsed;
    } else {
      isInvalid = true;
    }
  }

  const setPage = (newPage: number) => {
    if (newPage === 1) {
      searchParams.delete(paramName);
      setSearchParams(searchParams, { replace: false });
    } else {
      searchParams.set(paramName, newPage.toString());
      setSearchParams(searchParams, { replace: false });
    }
  };

  return [currentPage, setPage, isInvalid];
}
