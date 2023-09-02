/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mongoose, { Model, Schema } from 'mongoose';

let conn: typeof mongoose | null = null;
export const connectDatabase = async function Connect(): Promise<typeof mongoose> {
  if (conn === null) {
    conn = await mongoose.connect(process.env.DB as string, {
      serverSelectionTimeoutMS: 5000,
    });
  }

  return conn;
};

export default class MongoConnection<T> {
  private modelName: string;

  private schema: Schema<T>;

  constructor(modelName: string, schema: Schema<T>) {
    this.modelName = modelName;
    this.schema = schema;
  }

  async getModel() {
    await connectDatabase();
    const model = mongoose.model(this.modelName, this.schema);
    return model;
  }
}
