import { APIGatewayProxyHandler } from 'aws-lambda';
import { CategoryController } from '../../services/category.controller';
import { ICategory } from '../../utils/_types';
import buildResponse from '../../utils/buildResponse';
import { ClientErrorCodes, SuccessfullCodes } from '../../utils/statusCode';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const categoryId = event.pathParameters?.categoryId as string;
  const requestBody = event.body || '{}';
  const { name } = JSON.parse(requestBody);

  const categoryObj: Partial<ICategory> = {
    name,
  };
  const categoryController = new CategoryController();

  try {
    const result = await categoryController.updateCategory(categoryObj, categoryId);
    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
