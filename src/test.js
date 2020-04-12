import Raphael from 'raphael';

import { point } from './utils/math';
import forest from './elements/forest';

const paper = Raphael(20, 20, 400, 400);

forest({ paper, pos: point(100, 100), size: 80 });
forest({ paper, pos: point(300, 100), size: 80 });