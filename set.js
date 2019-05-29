const { spawn } = require('child_process');
const set = spawn('node', ['bundle', 'login']);

set.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });