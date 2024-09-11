export function useCartNotRegister() {
    return JSON.parse(localStorage.getItem('cartNotRegister')) || [];
  }
  