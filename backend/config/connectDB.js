import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.MONGODB_URI;
console.log("Database URL:", dbUrl);

if (!dbUrl) {
  console.error(
    "Error: Database URL (DB_URL) is not defined in the environment variables."
  );
  process.exit(1); // Exit with failure status code
}
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("✅ Successfully connected to the database.");
  })
  .catch((error) => {
    console.error("❌ Database connection failed.");
    console.error("Details:", error);
  });
