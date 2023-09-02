import { APIGatewayProxyHandler } from 'aws-lambda';
import { ProductController } from '../controllers/product.controller';
import { IProduct } from '../utils/_types';
import buildResponse from '../utils/buildResponse';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const requestBody = event.body || '{}';
  const { name, description, price, userId } = JSON.parse(requestBody);
  const productObj: IProduct = {
    name,
    description,
    price,
    userId,
  };
  const product = new ProductController();

  try {
    const result = await product.createProduct(productObj);
    const response = buildResponse.buildSuccessfullResponse(result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(error);
    return failedResponse;
  }
};
