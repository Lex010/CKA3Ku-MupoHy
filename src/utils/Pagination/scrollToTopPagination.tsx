export function scrollToTopPagination(smooth: boolean = true) {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
}
