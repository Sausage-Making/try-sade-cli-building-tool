// @ts-check

// const sade = require('sade');
import sade from 'sade';

const program = sade('test',true);

program
.option('-r, --reverse')
.option('--sort <prop>')
.option('--tort <prop>')
.option('-e')
.option('-E')
.option('-f')
.action((opts) => {
  // Program handler
  console.log(key,opts)
})

let key='';

key='ZUGGA';
program.parse(['','','-re','zugga'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='AUGGA';
program.parse(['','','-re'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='BUGGA';
program.parse(['','','-er'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='CUGGA';
program.parse(['','','-e','-r'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='DUGGA';
program.parse(['','','-f','-r'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='EUGGA';
program.parse(['','','--reverse','--sort','bu'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='FUGGA';
program.parse(['','','--reverse','-e'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

key='GUGGA';
program.parse(['','','--sort','-e'], { unknown: arg => `HUGGA unknown opt: "${arg}"` } );

console.log('MUGGA',process.argv)