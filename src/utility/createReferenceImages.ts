import { spawn } from "child_process";

const createReferenceImages = (refPath: string) => {
  return new Promise(async (resolve, reject) => {
    const command =
      process.env.NODE_ENV === "development" ? "python" : "python3";
    const pyprog = spawn(command, ["./pyLibs/refToImages.py", refPath]);
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

export default createReferenceImages;
