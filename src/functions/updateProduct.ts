import { APIGatewayProxyHandler } from 'aws-lambda';
import { ProductController } from '../controllers/product.controller';
import { IProduct } from '../utils/_types';
import buildResponse from '../utils/buildResponse';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const productId = event.queryStringParameters?.productId as string;
  const requestBody = event.body || '{}';
  const { name, description, price } = JSON.parse(requestBody);

  const productObj: Partial<IProduct> = {
    name,
    description,
    price,
  };
  const product = new ProductController();

  try {
    const result = await product.updateProduct(productObj, productId);
    const response = buildResponse.buildSuccessfullResponse(result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(error);
    return failedResponse;
  }
};
