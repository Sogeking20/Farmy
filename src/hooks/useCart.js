export function useCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}
