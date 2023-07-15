import fs from "fs";
import { hey } from "./helper.js";

console.log(hey);

fs.readFile("./src/helper.ts", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
