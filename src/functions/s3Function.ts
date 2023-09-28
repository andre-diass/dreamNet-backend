/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { APIGatewayProxyEvent, APIGatewayProxyResult, S3Event } from 'aws-lambda';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import createLocalS3Client from '../utils/createLocalS3client';

export async function getCsvDataFromBucket(name, key) {
  // const client = createLocalS3Client();
  const client = new S3Client({});

  const command = new GetObjectCommand({
    Bucket: name,
    Key: key,
  });

  const answer = await client.send(command);
  const csvData = await answer.Body?.transformToString();

  return csvData;
}

export const handler = async (event: S3Event): Promise<void> => {
  const s3Event = event.Records[0].s3;
  const bucketName = s3Event.bucket.name;
  const bucketKey = decodeURIComponent(s3Event.object.key.replace(/\+/g, ' '));
  console.log(s3Event);

  // const fileData = await getCsvDataFromBucket(bucketName, bucketKey);
  // console.log(fileData);
};
