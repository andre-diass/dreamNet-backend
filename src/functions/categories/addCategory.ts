import { APIGatewayProxyHandler } from 'aws-lambda';
import { CategoryController } from '../../services/category.controller';
import { ICategory } from '../../utils/_types';
import buildResponse from '../../utils/buildResponse';
import { SuccessfullCodes, ClientErrorCodes } from '../../utils/statusCode';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const requestBody = event.body || '{}';
  const { name, userId } = JSON.parse(requestBody);
  const categoryObj: ICategory = {
    name,
    userId,
  };
  const categoryController = new CategoryController();

  try {
    const result = await categoryController.createCategory(categoryObj);
    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
