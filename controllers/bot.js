const spawn = require('child_process').spawn;
let child;

module.exports.startBot = (ctx) => {
    child = spawn('node', ['bot/index.js'], {stdio: ['ignore']});
    child.on('exit', (code, signal) => {
        console.log('child process exited with ' + `code ${code} and signal ${signal}`);
    });
    ctx.body = ''
};

module.exports.stopBot = (ctx) => {
    child.kill();
    ctx.body = ''
};
