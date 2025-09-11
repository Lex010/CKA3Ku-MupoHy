export default function getPageNumberFromHashUrl(url: string): number | undefined {
  if (!url) return undefined;

  const hash = url.split('#')[1] || '';
  let pageNumber: number | undefined;

  const queryIndex = hash.indexOf('?');
  if (queryIndex !== -1) {
    const queryString = hash.slice(queryIndex); // ?page=2&...
    const params = new URLSearchParams(queryString);
    const pageParam = params.get('page');
    pageNumber = pageParam ? Number(pageParam) : undefined;
  }

  return pageNumber;
}
