const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const copyFile = fs.promises.copyFile;

(function copyDir() {
   fs.mkdir(path.join(__dirname, 'files-copy'), {
      recursive: true,
   }, err => {
      if (err) {
         throw new Error('Problem with creating folder.');
      }
      console.log('Create folder');
   });
   fsPromises.readdir(path.join(__dirname, 'files')).then(files => {
      files.forEach(file => {
         const filePath = path.join(__dirname, 'files', file);
         copyFile(filePath, path.join(__dirname, 'files-copy', file));
         console.log(file);
      });
   });
})();
