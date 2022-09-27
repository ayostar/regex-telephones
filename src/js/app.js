import replacePhone from './validator';

const incomingPhone = '+7 - 800-123 55  -55';
const incomingPhone2 = '8 800 1234567';
const incomingPhone3 = '7 800 7654321';

console.log(`${incomingPhone} -> ${replacePhone(incomingPhone)}`);
console.log(`${incomingPhone2} -> ${replacePhone(incomingPhone2)}`);
console.log(`${incomingPhone3} -> ${replacePhone(incomingPhone3)}`);
