import { spawn } from "child_process";
import path from "path";

const convertToPdf = (docxPath: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dirname = path.dirname(docxPath);

      const ctpSpawn = spawn("soffice", [
        "--convert-to",
        "pdf",
        docxPath,
        "--headless",
        "--outdir",
        dirname,
      ]);

      ctpSpawn.stderr.on("data", (code) => {
        console.log(`child process exited with code ${code}`);
        ("rejecting to convert file");
        reject("");
      });

      ctpSpawn.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
        resolve("");
      });
    } catch (error) {
      reject("new Error: " + error);
    }
  });
};

export default convertToPdf;
