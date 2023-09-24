import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import buildResponse from '../utils/buildResponse';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = buildResponse.buildSuccessfullResponse({ teste: 'teste' });
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(error);
    return failedResponse;
  }
};
