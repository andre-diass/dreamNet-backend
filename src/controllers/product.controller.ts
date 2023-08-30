import { APIGatewayProxyResult } from 'aws-lambda';
import { connectDatabase } from '../database/db';
import { Product } from '../models/product';
import buildResponse from '../utils/buildResponse';

export class ProductController {
  getProducts = async (param: string | undefined): Promise<APIGatewayProxyResult> => {
    try {
      await connectDatabase();
      const result = await Product.find({ userId: param }).exec();

      const response = buildResponse.buildSuccessfullResponse(result);

      return response;
    } catch (err) {
      const failedResponse = buildResponse.builFailedResponse(err);
      return failedResponse;
    }
  };
}
