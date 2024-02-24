/* eslint-disable camelcase */
import mongoose from 'mongoose';

export type Timestamp = {
  createdAt: Date;
};
export interface IProduct extends Timestamp {
  name: string;
  description: string;
  price: string;
  userId: string;
  imageLinks: Array<string>;
  category: string;
}

export interface ICategory {
  name: string;
  userId: string;
}

export interface TokenPayload {
  name: string;
  email: string;
}
