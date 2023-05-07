const fs = require('fs');
const path = require('path');
const input = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
input.on('data', data => console.log(data));

   console.log(path.extname('.index.js'))
