import { point, line } from '../utils';

const mountain = ({
  paper,
  pos: { x, y },
  width = 50,
  height = 30
}) => {
  const halfWidth = width / 2;
  const left = point(x - halfWidth, y);
  const right = point(x + halfWidth, y);
  const top = point (x, y - height);
  line({ paper, a: left, b: top });
  line({ paper, a: right, b: top });
};

export default mountain;