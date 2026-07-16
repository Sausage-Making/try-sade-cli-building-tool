const sade = require('sade');

const cli = sade('my-cli');

const console_org=console;
const myConsole={
  store:{
    log: [],
    error: []
  },
  log(...args){this.store.log=args;},
  error(...args){this.store.error=args;}
}
// console=myConsole;
process.stdout.write=(arg)=>console.log('NUGGA',arg);

cli
  .version('1.0.5')
  .option('--global, -g', 'An example global flag')
  .option('-c, --config', 'Provide path to custom config', 'foo.config.js');

cli
  .command('build <src> <dest>' )
  .describe('Build the source directory. Expects an `index.js` entry file.')
  .option('-o, --output', 'Change the name of the output file', 'bundle.js')
  .example('build src build --global --config my-conf.js')
  .example('build app public -o main.js')
  .action((src, dest, opts) => {
    console.log(`> building from ${src} to ${dest}`);
    console.log('> these are extra opts', opts);
  })
;

cli.parse(process.argv, { unknown: arg => `jugga: ${arg}`});

// console.log('NUGGA');
// console=console_org;
console.log('OUGGA');
console.log(myConsole.store);
