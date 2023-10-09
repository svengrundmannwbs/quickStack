import fs from "fs";
/*
    Setupscript for express server
    Sven Grundmann 2023
*/
const createFolder = (folderName) => {
  fs.mkdir(folderName, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

// change foldernames in array to your liking
const folders = ["./controller", "./db", "./middleware", "./model", "./route"];

folders.forEach((folder) => createFolder(folder));
