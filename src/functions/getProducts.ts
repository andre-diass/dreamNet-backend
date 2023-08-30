import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ProductController } from '../controllers/product.controller';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const param = _event.queryStringParameters?.userId;
  const product = new ProductController();

  const response = product.getProducts(param);

  return response;
};
