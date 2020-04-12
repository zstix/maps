import {
  point,
  drawLine,
  drawMessyLine,
  rand,
  drawCurve,
  pointFromAngle,
} from '../utils';

const mountain = ({
  paper,
  pos,
  width = rand(48, 52),
  height = rand(22, 36)
}) => {
  const halfWidth = width / 2;
  const left = point(pos.x - halfWidth, pos.y);
  const right = point(pos.x + halfWidth, pos.y);
  const top = point (rand(pos.x - 3, pos.x + 3), pos.y - height);

  const pLeft = pointFromAngle(pos, (Math.PI * -0.57), height / 1.3);
  const pRight = pointFromAngle(pos, (Math.PI * -0.43), height / 1.3);

  drawMessyLine({ paper, a: pos, b: { ...top, y: pos.y - (height * 0.90)}, attr: { 'stroke-width': 0.5 } });

  drawMessyLine({ paper, a: left, b: pLeft, attr: { 'stroke-width': 2 } });
  drawMessyLine({ paper, a: right, b: pRight, attr: { 'stroke-width': 2 } });

  drawCurve({ paper, a: pLeft, b: pRight, c1: top, attr: { 'stroke-width': 2 } });
};

export default mountain;