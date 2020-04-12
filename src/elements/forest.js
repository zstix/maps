import { range, rand } from '../utils/helpers';
import { point, isPointInPoly } from '../utils/math';
import { drawCircle } from '../utils/art';
import randomPoly from '../utils/randPoly';
import tree from './tree';

// const pointCircle = ({ paper, pos, size }) => {
//   const numTrees = size; // density
//   return range(numTrees).map((i) => {
//     const a = Math.random() * 2 * Math.PI;
//     const r = size * Math.sqrt(Math.random());
//     const x = r * Math.cos(a) + pos.x;
//     const y = r * Math.sin(a) + pos.y;
//     return point(x, y);
//   });
// };

const forest = ({
  paper,
  pos,
  size = 100
}) => {
  // const points = range(rand(2, 4)).reduce((acc) => {
  //   const x = rand(pos.x - size, pos.x + size);
  //   const y = rand(pos.y - size, pos.y + size);
  //   const center = point(x, y);
  //   return [
  //     ...acc,
  //     ...pointCircle({ paper, pos: center, size })
  //   ];
  // }, []);

  // points
  //   .sort((a, b) => a.y < b.y ? -1 : 1)
  //   .forEach(pos => tree({ paper, pos }));

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