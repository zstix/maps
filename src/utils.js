export const range = (a, b = false) => b
  ? [...Array(b).keys()].slice(a)
  : [...Array(a).keys()];

export const point = (x, y) => ({ x, y });

export const line = ({ paper, a, b }) => {
  paper.path(`M${a.x},${a.y}L${b.x},${b.y}`)
}