import { connectDatabase } from '../../database/db';
import { User } from '../../models/user';

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { email, password, name } = JSON.parse(event.body);
    let userObj = {
      email,
      name,
      password,
    };
    userObj = await User.create(userObj);

    const response = {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify(userObj),
    };

    return response;
  } catch (err) {
    console.error(err);
    const errorResponse = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      },
      body: JSON.stringify({ error: (err as Error).message }), // Use type assertion here
    };

    return errorResponse;
  }
};
