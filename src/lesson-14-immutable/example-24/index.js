// Core
import { Stack, List } from 'immutable';

const stack1 = Stack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const first = stack1.peek(); // or .first()

console.log('• first, peek •', first);
console.log('• stack1 •', stack1);

const stack2 = stack1.shift();

console.log('• stack2, shift •', stack2);

const stack3 = stack2.unshift(74); // or .push()

console.log('• stack3, unshift •', stack3);

const stack4 = stack3.unshiftAll(List.of(87, 43));

console.log('•λ•', stack4);

const second = stack4.get(4);

console.log('• second •', second);
