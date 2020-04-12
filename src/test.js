import Raphael from 'raphael';

import { range } from './utils/helpers';
// import mountain from './elements/mountain';
import tree from './elements/tree';
// import forest from './elements/forest';

const paper = Raphael(20, 20, 400, 400);

// forest({ paper, pos: point( 150, 150), size: 50 });

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