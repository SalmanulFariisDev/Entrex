import app from "./app"; // import the app from app.ts
import connectToDb from "./config/db";

const port = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  await connectToDb();
  app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
};

startServer();

