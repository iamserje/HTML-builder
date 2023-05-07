const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');
const absPath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(absPath);
stdout.write('This test task for how to print:  \n');
stdin.on('data', data => {
   if (data.toString().trim() === 'exit') {
      gudBay();
   }
   // output.write(data);
   fs.appendFile(absPath, data, (err) => {
      if(err) throw err;
      console.log('Data has been added!');
   });
});
function gudBay() {
   stdout.write('Good Bay My Friend.\n');
   exit();
}
