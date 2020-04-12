export const point = (x, y) => ({ x, y });

export const radToDeg = rad => (rad * 180) / Math.PI;
export const degToRad = deg => (deg * Math.PI) / 180

const calcAngle = (a, b) => Math.atan2(b.y - a.y, b.x - a.x);

const calcDist = (a , b) => {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
};

const getPoint = (point, rad, dist) => ({
  x: Math.cos(rad) * dist + point.x,
  y: Math.sin(rad) * dist + point.y
});

export const calcDeg = (a, b, c) => {
  const cosa = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c);
  return Math.acos(cosa);
};

export const pointFromAngle = (p, deg, dist) => ({
  x: p.x + Math.cos(deg) * dist,
  y: p.y + Math.sin(deg) * dist
});

// NOTE: not functional due to algorithm
export const isPointInPoly = (point, points) => {
  const { x, y } = point;
  let result = false;

  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i].x;
    const yi = points[i].y;
    const xj = points[j].x;
    const yj = points[j].y;
    const intersect = ((yi > y) != (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) result = !result;
  }

  return result;
};