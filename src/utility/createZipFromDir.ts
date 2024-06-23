import archiver from "archiver";
import { createWriteStream } from "fs";

const createZipFromDir = (inputDir: string, outputFile: string) => {
  return new Promise((resolve, reject) => {
    const output = createWriteStream(outputFile);
    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(output);
    archive.directory(inputDir, false);
    archive.finalize();
    output.on("error", () => {
      reject("Can't archive");
    });
    output.on("close", async () => {
      resolve(outputFile);
    });
  });
};

export default createZipFromDir;
