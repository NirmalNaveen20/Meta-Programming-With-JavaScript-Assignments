#!/usr/bin/env node

var convert = require('../')
var argv = require('yargs')
        .usage('Usage: module-exports input')
        .alias('h', 'help')
        .alias('a', 'asi')
        .describe('a', 'do not end with semi colon')
        .help('h')
        .argv

process.stdin.pipe(convert({ semicolon: !argv.a })).pipe(process.stdout)