import { APIGatewayProxyHandler } from 'aws-lambda';
import jwt from 'jsonwebtoken';
import { UserService } from '../../services/user.service';
import buildResponse from '../../utils/buildResponse';
import { ServerErrorCodes, SuccessfullCodes } from '../../utils/statusCode';
import { userLoginSchema } from '../../validations/userLogin';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const { userID, accountID } = await userLoginSchema.validateAsync(JSON.parse(event.body as string) || {});
  const user = new UserService();

  const result = user.login(userID, accountID);

  const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, result);
  return response;
};
