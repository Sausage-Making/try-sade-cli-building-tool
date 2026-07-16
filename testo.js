// @ts-check

import { stdout } from 'node:process';

const myConsole={
  store:[],
  log(...args){this.store=args;}
}
console.log('before');
const console_org=console;
console=myConsole;
console.log('tweaked!');
console=console_org;
console.log('after');
console.log(myConsole.store.join(' '));
console.dir(stdout);
