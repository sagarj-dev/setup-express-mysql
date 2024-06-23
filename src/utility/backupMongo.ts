import { exec } from "child_process";

const backupMongo = () => {
  return new Promise((resolve, reject) => {
    const cleanUpCommand = `rm -rf /root/mongoBackup/aviteusdb`;
    const backupCommand = `mongodump --db aviteusdb --out /root/mongoBackup --username sagar --password Sgj_264315018840
        `;

    exec(cleanUpCommand, (error, stdout, stderr) => {
      if (error) {
        console.error("Error cleaning up old mongo database backup");
        reject(stderr);
      } else {
        exec(backupCommand, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error during backup: ${stderr}`);
            reject(stderr);
          } else {
            console.log("Backup completed successfully:", stdout);
            resolve(stdout);
          }
        });
      }
    });
  });
};

export default backupMongo;
