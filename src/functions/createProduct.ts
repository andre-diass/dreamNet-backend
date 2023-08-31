import { APIGatewayProxyHandler } from 'aws-lambda';
import { connectDatabase } from '../database/db';
import { ProductController } from '../controllers/product.controller';
import { IProduct } from '../utils/_types';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connectDatabase();

  const requestBody = event.body || '{}';
  const { name, description, price, userId } = JSON.parse(requestBody);
  const productObj: IProduct = {
    name,
    description,
    price,
    userId,
  };
  const product = new ProductController();

  const response = product.createProduct(productObj);

  return response;
};
