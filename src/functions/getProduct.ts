import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { MongoClient } from 'mongodb';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const client = await MongoClient.connect(process.env.DB as string);
    const db = client.db('test');
    const collection = db.collection('products');

    const result = await collection.find({}).toArray();

    client.close();

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify(result),
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: 'An error occured',
    };
  }
};
