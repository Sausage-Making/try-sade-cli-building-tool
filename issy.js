const sade = require('sade');

const prog = sade('my-cli');

sade('sirv <dir>', true)
  .version('1.0.0')
  .describe('Run a static file server')
  .example('public -qeim 31536000')
  .example('--port 8080 --etag')
  .example('my-app --dev')
  .option('-D, --dev', 'Enable "dev" mode')
  .option('-e, --etag', 'Enable "Etag" header')
  // There are a lot...
  .option('-H, --host', 'Hostname to bind', 'localhost')
  .option('-p, --port', 'Port to bind', 5000)
  .action((dir, opts) => {
    // Program handler
    console.log('AUGGA',process.argv)
  })
  // .parse(process.argv);
  .parse(process.argv, { unknown: arg => `jugga: ${arg}`});
