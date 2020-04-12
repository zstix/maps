import { range, rand } from '../utils/helpers';
import { point, isPointInPoly } from '../utils/math';
import randomPoly from '../utils/randPoly';
import tree from './tree';

const forest = ({
  paper,
  pos,
  size = 100
}) => {
  const treeSize = 10;

  // get random shape
  const points = randomPoly({ paper, pos, size });

  // get shape bounds
  const left = [...points].sort((a, b) => a.x < b.x ? -1 : 1)[0].x;
  const top = [...points].sort((a, b) => a.y < b.y ? -1 : 1)[0].y;
  const right = [...points].sort((a, b) => a.x > b.x ? -1 : 1)[0].x;
  const bottom = [...points].sort((a, b) => a.y > b.y ? -1 : 1)[0].y;

  // get tree points
  let treePoints = []; 
  const gridSize = treeSize; // density
  const posRand = treeSize * 0.2;
  const columns = Math.ceil((right - left) / gridSize);
  const rows = Math.ceil((bottom - top) / gridSize);
  range(0, columns).forEach((column) => {
    range(0, rows).forEach((row) => {
      const x = left + (column * gridSize);
      const y = top + (row * gridSize);
      const pos = point(rand(x - posRand, x + posRand), rand(y - posRand, y + posRand));
      const inside = isPointInPoly(pos, points);
      if (inside) treePoints.push(pos);

      // outlier trees
      if (!inside && (rand(40) === 7)) treePoints.push(pos);
    })
  });

  // draw trees
  treePoints.forEach(pos => tree ({ paper, pos, size: treeSize }));
};

export default forest;