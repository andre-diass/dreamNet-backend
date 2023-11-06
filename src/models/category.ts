import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  category: string;
}
export const CategorySchema: Schema<ICategory> = new mongoose.Schema({
  category: {
    type: String,
    trim: true,
    required: [true, 'Please add a category'],
  },
});
