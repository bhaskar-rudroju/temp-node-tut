const os = require('os');

console.log(os.userInfo());


const currentOS = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem()
}

const {freemem, totalmem} = currentOS;
console.log(totalmem/1024/1024/1024);