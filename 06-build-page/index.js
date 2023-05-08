// Эту задачу проверять не нужно - она не сделана.














// const fs = require('fs');
// const path = require('path');
// const fsPromises = fs.promises;
// const dist = path.join(__dirname, 'project-dist');
// const stylesPath = path.join(__dirname, 'styles');
// const aseetsPath = path.join(__dirname, 'aseets');

// (function createDistDir() {
//    fs.mkdir(dist, {
//       recursive: true,
//    }, err => {
//       if (err) {
//          throw new Error('Problem woth create folder');
//       }
//       console.log('Folder created');
//    });
// })();

// (function createMarkupFile() {
//    const input = fs.createReadStream(path.join(__dirname, 'template.html'), 'utf-8');
//    const output = fs.createReadStream(path.join(dist, 'index.html'));
//    let srt = '';
//    input.on('data', data => {
//       str = data.toString();

//       function mapper(element) {
//          return `{{${element}}}`;
//       }
//       const componentsPath = path.join(__dirname, 'components');
//       fs.readdir(componentsPath,
//          { withFileTypes: true },
//          (err, data) => {
//             if (err) throw err;
//             const temps = [];
//             data.forEach(temp => {
//                const fileName = temp.name.match(/([\w]*\.)*/)[0].replace('.', '');
//                temps.push(mapper(fileName));
//             });
//          })
//    })
// })();

// (function copyStyle() {
//    const output = fs.createWriteStream(path.join(dist, 'style.css'));
//    fsPromises.readdir(stylesPath).then(async (files) => {
//       files.forEach(async file => {
//          const filePath = path.join(stylesPath, file);
//          const fileName = path.basename(filePath);
//          const ext = path.extname(filePath);
//          if (ext === 'css') {
//             const input = fs.createReadStream(path.join(stylesPath, fileName));
//             input.on('data', data => {
//                output.write('\n' + data.toString() + '\n');
//             })
//          }
//       })
//    })
// })();

// (function copyAssetsDir() {
//    fs.mkdir(path.join(dist, 'assets'), {
//       recursive: true,
//    }, err => {
//       if (err) {
//          throw new Error('Problem created folder');
//       }
//       console.log('Create ANOTHER dir');
//    })

//    async function copyFilesFromDir(dir, dist) {
//       await fsPromises.readdir(dir, { withFileTypes: true }).then(async files => {
//          files.forEach(async file => {
//             if (file.isDirectory()) {
//                const absDirPath = path.join(dir, file.name);
//                const destPath = path.join(dest, fileName);
//                copyFilesFromDir(absDirPath, destPath);
//             } else {
//                fs.mkdir(dest, {
//                   recursive: true,
//                }, err => {
//                   if (err) {
//                      throw new Error('Problem created folder');
//                   }
//                   console.log('Create ANOTHER dir');
//                });
//                fsPromises.copyFile(path.join(dir, file.name), path.join(dest, fileName));
//             }
//          })
//       })
//    }
// })();