import { ATTR, COLOR } from '../constants';
import { rand, range } from './helpers';
import { drawShape, drawCircle } from './art';
import { point, degToRad, pointFromAngle, isPointInPoly } from './math';

const randPoly = ({
  paper,
  pos,
  size = 100
}) => {
  const numPoints = rand(5, rand(8, size * 0.5));
  const angle = (360 / numPoints);

  // get points
  const points = range(0, numPoints).map((i) => {
    const dist = rand(size * 0.6, size * 1.4);
    const rad = degToRad(i * angle);
    return pointFromAngle(pos, rad, dist);
  });

  return points;
};

export default randPoly;