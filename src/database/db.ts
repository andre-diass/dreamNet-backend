import mongoose, { Connection } from "mongoose";

let conn: Connection | null = null;

export const databaseConnection = async (): Promise<Connection> => {
  if (conn == null) {
    if (!process.env.DB) {
      throw new Error("The DB environment variable is not set.");
    }

    console.log("Creating a new connection to the database");
    conn = await mongoose.createConnection(process.env.DB);
    return conn;
  }

  console.log("Connection already established, reusing the connection");
  return conn;
};
