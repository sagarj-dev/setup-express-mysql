import { spawn } from "child_process";

const mergePdfs = (refPath: string, candidate_name: string) => {
  return new Promise(async (resolve, reject) => {
    const command =
      process.env.NODE_ENV === "development" ? "python" : "python3";
    const pyprog = spawn(command, [
      "./pyLibs/mergePdf.py",
      refPath,
      candidate_name,
    ]);
    let resultOfPy: boolean;
    pyprog.stdout.on("data", function (data: any) {
      console.log("py log =>", data.toString());

      resultOfPy = true;
    });

    pyprog.stderr.on("data", (error: any) => {
      console.log("py error =>", error.toString());
      resultOfPy = false;
    });
    pyprog.stdout.on("end", function () {
      resultOfPy ? resolve(resultOfPy) : reject(resultOfPy);
    });
  });
};

export default mergePdfs;
