import {AppServer} from 'bunitel'
import {HelloWorldApp} from './src/HelloWorldApp.ts'

const argv = require('minimist')(process.argv.slice(2))

const appServer = new AppServer(() => new HelloWorldApp(), {
  liveReload: argv['live-reload'],
})