import { APIGatewayProxyResult } from 'aws-lambda';
import { connectDatabase } from '../database/db';
import { Product } from '../models/product';
import buildResponse from '../utils/buildResponse';
import { IProduct } from '../utils/_types';

export class ProductController {
  getProducts = async (userID: string | undefined): Promise<APIGatewayProxyResult> => {
    try {
      await connectDatabase();
      const result = await Product.find({ userId: userID }).exec();

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
