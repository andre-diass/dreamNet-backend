import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ProductController } from '../controllers/product.controller';
import buildResponse from '../utils/buildResponse';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const productId = _event.queryStringParameters?.productId;
  const product = new ProductController();

  try {
    const result = await product.getProduct(productId);

    const response = buildResponse.buildSuccessfullResponse(result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(error);
    return failedResponse;
  }
};
