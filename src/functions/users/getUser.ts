import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { UserController } from '../../services/user.controller';
import buildResponse from '../../utils/buildResponse';
import { ClientErrorCodes, SuccessfullCodes } from '../../utils/statusCode';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const email = _event.pathParameters?.email as string;
  const user = new UserController();

  try {
    const result = await user.getUser(email);

    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.OK, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
