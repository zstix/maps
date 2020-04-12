import Raphael from 'raphael';

import { range, rand } from './utils';
import mountain from './elements/mountain';

const paper = Raphael(20, 20, 400, 400);

range(5).map(i => {
  range(5).map(j => {
    const dist = 65;
    const pos = {
      x: (i + 1) * dist,
      y: (j + 1) * dist,
    }
    mountain({ paper, pos });
  });
});