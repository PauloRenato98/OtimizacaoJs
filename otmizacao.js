const readline = require('readline');
const fs = require('fs');
const readable = fs.createReadStream('index.html');

const rl = readline.createInterface({
    input:readable
})

rl.on('line', (line)=> {
    console.log(line.replace('html','testanaaado'));
})