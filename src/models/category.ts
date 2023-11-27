import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  userId: string;
}
export const CategorySchema: Schema<ICategory> = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a category'],
  },
  userId: {
    type: String,
    required: true,
  },
});
