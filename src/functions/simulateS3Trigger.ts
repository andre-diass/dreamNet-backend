import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import axios from 'axios';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import buildResponse from '../utils/buildResponse';
import createLocalS3Client from '../utils/createLocalS3client';
import { ClientErrorCodes, SuccessfullCodes } from '../utils/statusCode';

export async function makeUploadToBucket(imageUrl: string, fileName: string): Promise<void> {
  // const client = createLocalS3Client();
  const client = new S3Client({});
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const imageData = Buffer.from(response.data);
  const uploadCommand = new PutObjectCommand({
    Bucket: 'upload-png-4567',
    Key: 'fileName',
    Body: imageData,
  });

  await client.send(uploadCommand);
}

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const imageUrl = 'https://image-2455666.s3.us-west-1.amazonaws.com/20230512_12104615.png';

    if (!imageUrl) {
      throw new Error('Image URL is missing.');
    }

    const fileName = 'image.png';

    makeUploadToBucket(imageUrl, fileName);
    const response = buildResponse.buildSuccessfullResponse(SuccessfullCodes.Created, {
      simulateS3Trigger: 'HTTP request succesfull',
    });
    return response;
  } catch (error) {
    const failedResponse = buildResponse.buildErrorResponse(ClientErrorCodes.BadRequest, error);
    return failedResponse;
  }
};
