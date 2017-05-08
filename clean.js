const exec = require('child_process').exec;
const os = require('os');
const program = require('commander');

program
  .version('0.0.1')
  .option('-n, --directory-name <directoryName>', 'name of the local directory to delete')
  .parse(process.argv);

// TODO implement callback/promises
const main = (directoryName) => {
  if (directoryName) {
    console.log(`Trying to delete ${directoryName} folder`);
    let cleanCommand = 'rm -rf';

    if (/^win/.test(os.platform())) {
      cleanCommand = 'rmdir /s /q';
    }

    cleanCommand += ' ' + directoryName;

    exec(cleanCommand, (e, stdout) => {
      if (e instanceof Error) {
        console.error(e);
        throw e;
      }

      if (stdout === '') {
        console.log('Removal successful');
      } else {
        console.error('Errors occured', stderr);
        throw new Error(stderr);
      }
    });
  } else {
    throw new Error('Missing directory to delete');
  }
};

main(program.directoryName);
