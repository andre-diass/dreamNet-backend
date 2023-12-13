import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { UserService } from '../../services/user.service';
import buildResponse from '../../utils/buildResponse';
import { ClientErrorCodes, SuccessfullCodes } from '../../utils/statusCode';
import { userLoginSchema } from '../../validations/userLogin';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { userID, accountID } = await userLoginSchema.validateAsync(JSON.parse(_event.body as string) || {});
  const user = new UserService();

  try {
    const result = await user.getUser(userID);

    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.OK, result);
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
