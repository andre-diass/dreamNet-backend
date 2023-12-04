import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  image: string;
  emailVerified: string | null;
  email: string;
}

export const UserSchema: Schema<IUser> = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  emailVerified: {
    type: String,
    default: null,
  },
  email: {
    type: String,
  },
});
