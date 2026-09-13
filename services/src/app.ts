import { Server } from "node:http";

let server: Server | undefined;
let isShuttingDown = false;

const closeHttpServer = async ():Promise<void> => {
  if(!server){
    return;
  }

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => {
      if(error){
        reject(error);
        reject;
      }
      resolve();
    })
  })
}