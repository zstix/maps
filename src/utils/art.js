import { calcDist, calcAngle, getPoint } from "./math";

export const move = (p) => `M${p.x},${p.y}`;
export const line = (p) => `L${p.x},${p.y}`;
export const curve = (c, p) => `Q${c.x},${c.y} ${p.x},${p.y}`;

export const lines = (points) =>
  points
    .map((point, i) => {
      const nextPoint = points[i + 1];
      if (nextPoint) return line(nextPoint);
    })
    .filter(Boolean);

export const draw = ({ paper, commands, attr }) => {
  const path = paper.path(commands.join());
  path.attr({ "stroke-width": 1, ...attr });
};

export const drawLine = ({ paper, a, b, attr }) => {
  const commands = [move(a), line(b)];
  draw({ paper, commands, attr });
};

// TODO: functional
export const getMessyPoints = (a, b, mess = 0.2) => {
  const seg = 5;
  const segDist = calcDist(a, b) / seg;
  let points = [a];
  for (let i = 1; i < seg; i++) {
    const prevPoint = points[i - 1];
    const a1 = calcAngle(prevPoint, b);
    const a2 = a1 + Math.random() * mess - mess / 2;
    const point = getPoint(prevPoint, a2, segDist);
    points.push(point);
  }
  return [...points, b];
};

// TODO: make this work with the above functions
export const drawMessyLine = ({ paper, a, b, mess = 0.2, attr }) => {
  // const points = getMessyPoints(a, b);
  // points.forEach((point, i) => {
  // const nextPoint = points[i + 1];
  // drawLine({ paper, a: point, b: nextPoint, attr });
  // });
  // const seg = 5;
  // const segDist = calcDist(a, b) / seg;
  // let points = [a];
  // for (let i = 1; i < seg; i++) {
  // const prevPoint = points[i - 1];
  // const a1 = calcAngle(prevPoint, b);
  // const a2 = a1 + (Math.random() * mess) - (mess / 2);
  // const point = getPoint(prevPoint, a2, segDist);
  // drawLine({ paper, a: prevPoint, b: point, attr });
  // points.push(point);
  // }
  // points.push(b);
  // drawLine({ paper, a: points[points.length - 1], b: points[points.length - 2], attr });
};

// TODO: two control point curve?
export const drawCurve = ({ paper, a, b, c1, attr }) => {
  const commands = [move(a), curve(c1, b)];
  draw({ paper, commands, attr });
};

export const drawCircle = ({ paper, pos, size = 1, attr }) => {
  const circle = paper.circle(pos.x, pos.y, size);
  circle.attr({ "stroke-width": 1, ...attr });
};

export const drawShape = ({ paper, points, attr }) => {
  const commands = [move(points[0]), ...points.map(line), line(points[0])];
  draw({ paper, commands, attr });
};
