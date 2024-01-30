import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async evento => {
  console.log('DADOS EVENTO DO CONSUMEEEEER DE EMAIL', evento);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
};
