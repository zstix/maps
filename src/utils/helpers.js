// 1 - a or (a+1) - b
export const rand = (a, b = b) => b
  ? Math.ceil(Math.random() * (b - a)) + a
  : Math.ceil(Math.random() * a);

// 0 - a or a - b
export const range = (a, b = false) => b
  ? [...Array(b).keys()].slice(a)
  : [...Array(a).keys()];