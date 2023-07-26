import mongoose, { Model, Schema } from 'mongoose';

const db = 'mongodb+srv://dreamNet-admin:mengonaveia@dreamnet-users.t0piljw.mongodb.net/?retryWrites=true&w=majority';

let conn: typeof mongoose | null = null;
export const connectDatabase = async function () {
  if (conn === null) {
    conn = await mongoose.connect(db as string, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  return conn;
};
