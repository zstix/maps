import Raphael from 'raphael';

import { range } from './utils';
// import mountain from './elements/mountain';
import tree from './elements/tree';

const paper = Raphael(20, 20, 400, 400);

range(5).map(i => {
  range(5).map(j => {
    const dist = 65;
    const pos = {
      x: (i + 1) * dist,
      y: (j + 1) * dist,
    }
    tree({ paper, pos });
  });
});