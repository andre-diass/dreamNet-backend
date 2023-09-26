import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import buildResponse from '../utils/buildResponse';
import createLocalS3Client from '../utils/createLocalS3client';

export async function makeUploadToBucket(): Promise<void> {
  // const client = createLocalS3Client();
  const client = new S3Client({});
  const uploadCommand = new PutObjectCommand({
    Bucket: 'upload-csv-local4567',
    Key: 'teste.csv',
    Body: Buffer.from('12345'),
  });

  await client.send(uploadCommand);
}

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    makeUploadToBucket();
    const response = buildResponse.buildSuccessfullResponse({ simulateS3Trigger: 'HTTP request succesfull' });
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(error);
    return failedResponse;
  }
};
