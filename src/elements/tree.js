import { COLOR, ATTR } from '../constants';
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

  // foliage
  drawShape({ paper, points, attr: ATTR.shape });

  // trunk
  const lower = point(pos.x, pos.y + radius);
  const base = point(pos.x, pos.y + radius + (radius / 1.5));
  drawLine({ paper, a: lower, b: base, attr: ATTR.stroke });

  // shading
  const sh1 = point(pos.x + (radius * 0.4), pos.y - (radius * 0.4))
  const sh2 = point(pos.x + (radius * 0.4), pos.y + (radius * 0.4))
  drawLine({ paper, a: sh1, b: sh2, attr: ATTR.shade });
  drawLine({ paper, a: base, b: { ...base, x: pos.x + radius }, attr: ATTR.shade });
  const lowest = base.y + (radius * 0.3);
  const sh3 = point(pos.x - (radius * 0.5), lowest);
  const sh4 = point(pos.x + (radius * 1.2), lowest);
  drawLine({ paper, a: sh3, b: sh4, attr: ATTR.shade });
};

export default tree;