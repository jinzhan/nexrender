const fs    = require('fs')
const path  = require('path')
const bin   = path.join(__dirname, '..', 'bin')
const cliVersion = require('../packages/nexrender-core/package.json').version;
const serverVersion = require('../packages/nexrender-server/package.json').version;
const workerVersion = require('../packages/nexrender-worker/package.json').version;

// fs.rename(path.join(bin, 'server-linux'),       path.join(bin, `nexrender-server-linux`), () => {});
fs.rename(path.join(bin, 'server-win.exe'),     path.join(bin, `nexrender-server-win64-v${serverVersion}.exe`), () => {});
// fs.rename(path.join(bin, 'server-macos'),       path.join(bin, `nexrender-server-macos`), () => {});

// fs.rename(path.join(bin, 'worker-macos'),       path.join(bin, `nexrender-worker-macos`), () => {});
fs.rename(path.join(bin, 'worker-win.exe'),     path.join(bin, `nexrender-worker-win64-v${workerVersion}.exe`), () => {});

// fs.rename(path.join(bin, 'cli-macos'),          path.join(bin, `nexrender-cli-macos`), () => {});
fs.rename(path.join(bin, 'cli-win.exe'),        path.join(bin, `nexrender-cli-win64-v${cliVersion}.exe`), () => {});
