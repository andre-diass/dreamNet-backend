/* eslint-disable camelcase */
import mongoose from 'mongoose';

export interface IProduct {
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
