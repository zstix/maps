import Raphael from 'raphael';

import { point } from './utils/math';
// import forest from './elements/forest';
import mountain from './elements/mountain';
import { range } from './utils/helpers';

const paper = Raphael(20, 20, 400, 400);

// forest({ paper, pos: point(100, 100), size: 80 });
// forest({ paper, pos: point(300, 100), size: 80 });

const space = 65;
range(1, 6).forEach(col => {
  range(1, 6).forEach(row => {
    const pos = point(col * space, row * space);
    mountain({ paper, pos });
  });
});
