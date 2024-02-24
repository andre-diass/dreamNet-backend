/* eslint-disable camelcase */
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  image: string;
  emailVerified: string | null;
  email: string;
}

export interface IAccount extends Document {
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
  userId: mongoose.Types.ObjectId;
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

export const AccountSchema: Schema<IAccount> = new mongoose.Schema({
  provider: { type: String, required: true },
  type: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  access_token: { type: String, required: true },
  expires_at: { type: Number, required: true },
  scope: { type: String, required: true },
  token_type: { type: String, required: true },
  id_token: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
});
