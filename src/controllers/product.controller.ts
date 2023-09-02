import { APIGatewayProxyResult } from 'aws-lambda';
import mongoose from 'mongoose';
import { connectDatabase } from '../database/db';
import { Product, ProductSchema } from '../models/product';
import buildResponse from '../utils/buildResponse';
import { IProduct } from '../utils/_types';
import ProductRepository from '../repositories/products.repository';

export class ProductController {
  private productRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  getProducts = async (userID: string | undefined): Promise<APIGatewayProxyResult> => {
    try {
      const result = await this.productRepository.getProducts(userID);

      const response = buildResponse.buildSuccessfullResponse(result);

      return response;
    } catch (err) {
      const failedResponse = buildResponse.builFailedResponse(err);
      return failedResponse;
    }
  };

  createProduct = async (productObj: IProduct): Promise<APIGatewayProxyResult> => {
    try {
      await connectDatabase();
      const result = await Product.create(productObj);

      const response = buildResponse.buildSuccessfullResponse(result);
      return response;
    } catch (err) {
      const failedResponse = buildResponse.builFailedResponse(err);
      return failedResponse;
    }
  };
}
