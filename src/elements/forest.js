import { drawCircle, range, rand, point } from '../utils';
import tree from './tree';

const pointCircle = ({ paper, pos, size }) => {
  const numTrees = size; // density
  return range(numTrees).map((i) => {
    const a = Math.random() * 2 * Math.PI;
    const r = size * Math.sqrt(Math.random());
    const x = r * Math.cos(a) + pos.x;
    const y = r * Math.sin(a) + pos.y;
    return point(x, y);
  });
};

const forest = ({
  paper,
  pos,
  size
}) => {
  const points = range(rand(2, 4)).reduce((acc) => {
    const x = rand(pos.x - size, pos.x + size);
    const y = rand(pos.y - size, pos.y + size);
    const center = point(x, y);
    return [
      ...acc,
      ...pointCircle({ paper, pos: center, size })
    ];
  }, []);

  points
    .sort((a, b) => a.y < b.y ? -1 : 1)
    .forEach(pos => tree({ paper, pos }));
};

export default forest;