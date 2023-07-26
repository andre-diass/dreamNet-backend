import mongoose, { Model, Schema } from 'mongoose';

let conn: typeof mongoose | null = null;
export const connectDatabase = async function () {
  if (conn === null) {
    conn = await mongoose.connect(process.env.DB as string, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  return conn;
};
