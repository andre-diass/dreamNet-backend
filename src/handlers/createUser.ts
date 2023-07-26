import { databaseConnection } from "../database/db";
import UserModel from "../models/user";

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await databaseConnection();
    const { name, email, password } = JSON.parse(event.body);
    let userObj = {
      name,
      email,
      password,
    };

    userObj = await UserModel.create(userObj);
    return {
      statusCode: 201,
      body: JSON.stringify(userObj),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode,
      body: JSON.stringify({ message: "error to the function" }),
    };
  }
};
