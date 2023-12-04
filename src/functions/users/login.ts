import { APIGatewayProxyHandler } from 'aws-lambda';
import jwt from 'jsonwebtoken';
import buildResponse from '../../utils/buildResponse';
import { SuccessfullCodes } from '../../utils/statusCode';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const secret = 'ssshhh';

  const token = jwt.sign({ id: 23 }, secret);
  console.log(`JWT issued: ${token}`);

  const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, token);
  return response;
};
