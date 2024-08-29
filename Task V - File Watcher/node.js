const fs = require('fs');
const path = require('path');

const folderName = './Folder';

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
fs.watchFile(folderName, { persistent: true, interval: 500 }, (cur, prev) => {
  console.log(`At: ${cur.mtime}`);
});
