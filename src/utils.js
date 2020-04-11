export const range = (a, b = false) => b
  ? [...Array(b).keys()].slice(a)
  : [...Array(a).keys()];