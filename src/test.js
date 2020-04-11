import Raphael from 'raphael';

const paper = Raphael(20, 20, 400, 400);

const circle = paper.circle(50, 40, 10);
circle.attr('fill', '#f00');
circle.attr('stroke', '#00f');