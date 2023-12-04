import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CategoryController } from '../../services/category.controller';
import buildResponse from '../../utils/buildResponse';
import { ClientErrorCodes, SuccessfullCodes } from '../../utils/statusCode';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const categoryId = _event.pathParameters?.categoryId;
  const category = new CategoryController();

  try {
    const result = await category.deleteCategory(categoryId);

    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.NoContent, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
