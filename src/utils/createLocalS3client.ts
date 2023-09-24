import { S3Client } from '@aws-sdk/client-s3';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createLocalS3Client(): S3Client {
  return new S3Client({
    forcePathStyle: true,
    credentials: {
      accessKeyId: 'S3RVER',
      secretAccessKey: 'S3RVER',
    },
    endpoint: 'http://localhost:4569',
  });
}
