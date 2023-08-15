import mongoose, { Schema, Document, Model } from 'mongoose';
import validator from 'validator';

export interface IProduct extends Document {
  productName: string;
  productDescription: string;
  productPrice: string;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  productName: {
    type: String,
    trim: true,
    required: [true, 'Please add a name'],
  },
  productDescription: {
    type: String,
    default: null,
    unique: true,
    select: true,
  },
  productPrice: {
    type: String,
    required: [true, 'Please set a password'],
  },
});

export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
