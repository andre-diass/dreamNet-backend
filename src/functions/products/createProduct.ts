import { APIGatewayProxyHandler } from 'aws-lambda';
import { ProductController } from '../../services/product.controller';
import { IProduct } from '../../utils/_types';
import buildResponse from '../../utils/buildResponse';
import { SuccessfullCodes, ClientErrorCodes } from '../../utils/statusCode';
import { acessoProducer } from '../producers/acessoProducer';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const sourceIP = event.requestContext.identity.sourceIp;

  const requestBody = event.body || '{}';
  const { name, description, price, userId, imageLinks, category } = JSON.parse(requestBody);
  const productObj: IProduct = {
    name,
    description,
    price,
    userId,
    imageLinks,
    category,
    createdAt: new Date(),
  };
  const product = new ProductController();

  try {
    const result = await product.createProduct(productObj);
    await acessoProducer(sourceIP);

    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
