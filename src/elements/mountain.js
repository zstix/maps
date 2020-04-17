import { ATTR, COLOR } from "../constants";
import { rand } from "../utils/helpers";
import { point, degToRad, pointFromAngle } from "../utils/math";
import { drawLine, drawCircle, move, line, curve, draw } from "../utils/art";

const mountain = ({ paper, pos, height = rand(25, 36) }) => {
  const pTop = point(pos.x, pos.y - height);

  // get bottom left and right points
  const aLeft = rand(25, 40);
  const radLeft = degToRad(aLeft);
  const aRight = rand(25, 40);
  const radRight = degToRad(aRight);
  const left = pos.x - height * Math.tan(radLeft);
  const right = pos.x + height * Math.tan(radRight);
  const pLeft = point(left, pos.y);
  const pRight = point(right, pos.y);

  // curve up top
  const cLeftDist = rand(height * 0.2, height * 0.3);
  const cRightDist = rand(height * 0.2, height * 0.3);
  const cpLeft = point(
    pos.x - cLeftDist * Math.sin(radLeft),
    pTop.y + cLeftDist * Math.cos(radLeft)
  );
  const cpRight = point(
    pos.x + cRightDist * Math.sin(radRight),
    pTop.y + cRightDist * Math.cos(radRight)
  );
  const cpRand = 2.5;
  const cpControl = point(
    rand(pTop.x - cpRand, pTop.x + cpRand),
    rand(pTop.y - cpRand, pTop.y + cpRand)
  );

  // draw and fill basic shape
  const commands = [
    move(pLeft),
    line(cpLeft),
    curve(cpControl, cpRight),
    line(pRight),
  ];
  draw({ paper, commands, attr: ATTR.shape });
};

export default mountain;
