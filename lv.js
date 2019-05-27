#!/usr/bin/env node
const chalk = require('chalk');
const { commands } = require('./commands.js');

// eslint-disable-next-line prefer-destructuring
const log = console.log;

const arrOfCommands = commands.split('\n');

log(
  chalk.magenta(
    arrOfCommands[Math.floor(Math.random() * arrOfCommands.length - 1) + 1]
  )
);
