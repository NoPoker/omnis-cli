#!/usr/bin/env node
const PACKEGE = require('./package.json');
const {cliEnabled} = require('./src/module');
const os = require('os');

const sayHelp = () => {
  console.log(`\t\t@${PACKEGE.name} help for ${os.hostname()}`);
  console.log('Version:\t --v (--verion, -v)  \t: Your CLI version');
  console.log('Help:   \t --h (--help, -h)    \t: CLI commands Info');
  console.log('Run:    \t run (--r, -r)       \t: Creating your project');
  console.log('---------------------------------------------------');
  console.log('For help with develop, you can visit our constacts');
  console.log('Telegram :\t https://t.me/omnis_library_chat');
  console.log('Just type how you wanna help, or your ideas');
  console.log('---------------------------------------------------');
};
const sayVersion = () => {
  console.log(`${PACKEGE.name} @` + PACKEGE.version);
};

const init = () => {
  if (
    process.argv.includes('--version') ||
    process.argv.includes('-v') ||
    process.argv.includes('--v')
  ) {
    sayVersion();
  }
  if (
    process.argv.includes('-r') ||
    process.argv.includes('run') ||
    process.argv.includes('--r')
  ) {
    const windowssettings = 'Ctr + C';
    const macossettings = 'Comand + C';
    console.log(PACKEGE.name + ' run command');
    if (os.platform() === 'win32')
      console.log(`Use ${windowssettings} to close this.`);
    if (os.platform() === 'darwin')
      console.log(`Use ${macossettings} to close this.`);
    cliEnabled();
  }
  if (
    process.argv.includes('-h') ||
    process.argv.includes('-help') ||
    process.argv.includes('--help')
  ) {
    sayHelp();
  }
};

process.argv[2] ? init() : console.log('Use --help to get information');
