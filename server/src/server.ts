import { httpServer } from "./config/app";
import connectToDb from "./config/db";

const port = process.env.PORT || 3008;

const startServer  = async(): Promise< void> =>{
    
  await connectToDb();
  const app = httpServer;
  app.listen(port,() => {
    console.log(`server is running on port ${port}`);
    
  })
}

startServer();