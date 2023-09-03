import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: string;
  userId: string;
}

export const ProductSchema: Schema<IProduct> = new mongoose.Schema({
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
  userId: {
    type: String,
  },
});

// export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);
