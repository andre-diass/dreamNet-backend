import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'invalid email'],
  },
  password: {
    type: String,
    required: [true, 'Please set a password'],
    minlength: 6,
    select: false,
  },
});

// eslint-disable-next-line func-names
UserSchema.pre<IUser>('save', async function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
