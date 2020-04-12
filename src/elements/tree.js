import { COLOR_BG } from '../constants';
import {
  point,
  drawLine,
  pointFromAngle,
  degToRad,
  range,
  rand,
  drawShape
} from '../utils';

const tree = ({
  paper,
  pos,
  size = 10
}) => {
  const radius = size / 2;
  const numPoints = rand(5, 8);
  const angle = (360 / numPoints);

  const points = range(0, numPoints).map((i) => {
    const rad = degToRad(i * rand(angle - 3, angle + 3));
    return pointFromAngle(pos, rad, rand(radius, radius));
  });

  drawShape({ paper, points, attr: { 'stroke-width': 2, fill: COLOR_BG } });

  const lower = point(pos.x, pos.y + radius);
  const base = point(pos.x, pos.y + radius + (radius / 1.5));
  drawLine({ paper, a: lower, b: base, attr: { 'stroke-width': 2 } });
  drawLine({ paper, a: base, b: { ...base, x: pos.x + radius }, attr: { stroke: '#AAA' } });
};

export default tree;