// const data = require("./data");
// console.log("Hello world!", __dirname);
// console.log(data.sayHello());
// data.sayHello();

// const path = require("path");
// console.log(path.basename(__dirname));
// console.log(path.resolve(__dirname, "/frontend", "index.html"));
// console.log(path.join(__filename, "/frontend", "index.html"));

// FS = File System

// const fs = require("fs");
// const path = require("path");
// const data = require("./data");

// // fs.mkdir(path.join(__dirname, "modules"), (err) => {
// //   if (err) throw err;

// //   console.log("folder was created succesfully");
// //   fs.writeFile(
// //     path.join(__dirname, "modules", "path.js"),
// //     "//path module",
// //     (err) => {
// //       if (err) throw console.log(err);

// //       console.log("Wirite file acses");
// //     }
// //   );
// // });

// fs.writeFile(
//   path.join(__dirname, "modules", "nodejs.txt"),
//   "//Node JS tutorial",
//   (err) => {
//     if (err) throw console.log(err);

//     console.log("Wirite file acses");
//     fs.appendFile(
//       path.join(__dirname, "modules", "nodejs.txt"),
//       " by Diyor Abjalilov",
//       (err) => {
//         if (err) throw err;

//         console.log("Documend chanched");
//         fs.readFile(
//           path.join(__dirname, "modules", "nodejs.txt"),
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );

// fs.rename(
//   path.join(__dirname, "modules", "nodejs.txt"),
//   path.join(__dirname, "modules", "node.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("Name change");
//   }
// );
