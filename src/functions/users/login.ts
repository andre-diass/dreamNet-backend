import { APIGatewayProxyHandler } from 'aws-lambda';
import jwt from 'jsonwebtoken';
import buildResponse from '../../utils/buildResponse';
import { SuccessfullCodes } from '../../utils/statusCode';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const secret = 'ssshhh';
  const user = {
    id: 123,
    scopes: ['users:read'],
  };
  const token = jwt.sign({ user }, secret);
  console.log(`JWT issued: ${token}`);

  const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, token);
  return response;
};
