import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: string;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a name'],
  },
  description: {
    type: String,
    trim: true,
    select: true,
  },
  price: {
    type: String,
    required: [true, 'Please set a password'],
  },
});

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
