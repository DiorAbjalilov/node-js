// const data = require("./data");
// console.log("Hello world!", __dirname);
// console.log(data.sayHello());
// data.sayHello();

// const path = require("path");
// console.log(path.basename(__dirname));
// console.log(path.resolve(__dirname, "/frontend", "index.html"));
// console.log(path.join(__filename, "/frontend", "index.html"));

// FS = File System

const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "modules"), (err) => {
  if (err) {
    console.log(err);
  }

  console.log("folder was created succesfully");
  fs.writeFile(
    path.join(__dirname, "modules", "path.js"),
    "//path module",
    (err) => {
      if (err) throw console.log(err);

      console.log("Wirite file acses");
    }
  );
});

console.log(fs);
