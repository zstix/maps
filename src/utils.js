// JS

// 1 - a or (a+1) - b
export const rand = (a, b = b) => b
  ? Math.ceil(Math.random() * (b - a)) + a
  : Math.ceil(Math.random() * a);

// 0 - a or a - b
export const range = (a, b = false) => b
  ? [...Array(b).keys()].slice(a)
  : [...Array(a).keys()];

// TRIG

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

// DRAW

const move = p => `M${p.x},${p.y}`;
const line = p => `L${p.x},${p.y}`;
const curve = (c, p) => `Q${c.x},${c.y} ${p.x},${p.y}`;

const draw = ({ paper, commands, attr }) => {
  const path = paper.path(commands.join());
  path.attr({ 'stroke-width': 1, ...attr });
};

export const drawLine = ({ paper, a, b, attr }) => {
  const commands = [move(a), line(b)];
  draw({ paper, commands, attr });
}

// TODO: functional
export const drawMessyLine = ({ paper, a, b, mess = 0.2, attr }) => {
  const seg = 5;
  const segDist = calcDist(a, b) / seg;
  let points = [a];
  for (let i = 1; i < seg; i++) {
    const prevPoint = points[i - 1];
    const a1 = calcAngle(prevPoint, b);
    const a2 = a1 + (Math.random() * mess) - (mess / 2);
    const point = getPoint(prevPoint, a2, segDist);
    drawLine({ paper, a: prevPoint, b: point, attr });
    points.push(point);
  }
  points.push(b);
  drawLine({ paper, a: points[points.length - 1], b: points[points.length - 2], attr });
};

// TODO: two control point curve?
export const drawCurve = ({ paper, a, b, c1, attr }) => {
  const commands = [move(a), curve(c1, b)];
  draw({ paper, commands, attr });
}

export const drawCircle = ({ paper, pos, size = 1, attr }) => {
  const circle = paper.circle(pos.x, pos.y, size);
  circle.attr({ 'stroke-width': 1, ...attr });
}

export const drawShape = ({ paper, points, attr }) => {
  const commands = [
    move(points[0]),
    ...points.map(line),
    line(points[0])
  ];
  draw({ paper, commands, attr });
};