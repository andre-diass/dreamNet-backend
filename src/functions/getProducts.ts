import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ProductController } from '../controllers/product.controller';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const userId = _event.queryStringParameters?.userId;
  const product = new ProductController();

  const response = product.getProducts(userId);

  return response;
};
