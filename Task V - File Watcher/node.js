const fs = require('fs');
const path = require('path');

const folderName = './Folder';

// fs.watch(folderName, { recursive: true }, (eventType, file) => {
//   console.log(eventType, file);
// });

// const allFiles = new Set(fs.readdirSync(folderName));
// fs.watch(folderName, { recursive: true }, (eventType, file) => {
//   let event;
//   if (file) {
//     const fileExists = fs.existsSync(path.join(folderName, file));

//     if (eventType === 'rename') {
//       if (!fileExists && allFiles.has(file)) {
//         event = 'removed';
//         allFiles.delete(file);
//       } else if (fileExists && !allFiles.has(file)) {
//         event = 'created';
//         allFiles.add(file);
//       } else {
//         event = 'renamed';
//       }
//     } else event = 'changed';
//     console.log(`File ${file} has been ${event}.`);
//   }
// });
// fs.watchFile(folderName, { persistent: true }, (cur, prev) => {
//   console.log(`At: ${cur.mtime}`);
// });
let event;
fs.watch(folderName, (eventType, fileName) => {
  if (fileName) {
    fs.stat(path.join(folderName, fileName), (err, stats) => {
      if (!err) {
        if (eventType !== 'change') {
          event = 'created or renamed';
        } else {
          event = 'modified';
        }
        console.log(`File ${fileName} has been ${event}`);
      } else if (err && err.code === 'ENOENT') {
        // File no longer exists
        console.log(`File ${fileName} has been deleted`);
      }
    });
  }
});
