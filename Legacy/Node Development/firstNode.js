// Requiring the File System module from Node
const fs = require("fs")

// fs.writeFile(
//     "NodeWrite.txt",
//     "Hello, World from Node.js",
//     (err) => {
//         if (err) throw err;
//         console.log("Created file and Written Message Successfully")
// });

fs.readFile(
    "NodeWrite.txt",
    "utf-8",
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);