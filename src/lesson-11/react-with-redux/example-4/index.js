const automate = (...functions) => functions.forEach((func) => func());

const f1 = () => console.log('• function 1 •');
const f2 = () => console.log('• function 2 •');
const f3 = () => console.log('• function 3 •');

automate(f1, f2, f3);
