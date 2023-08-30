import { APIGatewayProxyHandler } from 'aws-lambda';
import { connectDatabase } from '../database/db';
import { Product } from '../models/product';

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const requestBody = event.body || '{}';
    const { name, description, price, userId } = JSON.parse(requestBody);
    let productObj = {
      name,
      description,
      price,
      userId,
    };
    productObj = await Product.create(productObj);

    const response = {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify(productObj),
    };

    return response;
  } catch (err) {
    console.error(err);
    const errorResponse = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify({ error: (err as Error).message }), // Use type assertion here
    };

    return errorResponse;
  }
};
