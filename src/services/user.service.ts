/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import jwt from 'jsonwebtoken';
import { ClientErrorCodes } from '../utils/statusCode';
import { IUser } from '../models/user';
import UserRepository from '../repositories/user.repository';
import { TokenPayload } from '../utils/_types';

export class UserService {
  private userRepository = new UserRepository();

  login = async (accountID: string, userID: string) => {
    const userInfo = await this.userRepository.getUser(userID);
    const account = await this.userRepository.getAccount(accountID);

    if (userInfo === null || account === null) {
      return {
        error: {
          status: ClientErrorCodes.NotFound,
          apiErrorType: 'User:NotFound',
        },
      };
    }

    const token = this.generateToken(userInfo?.name, userInfo?.email);
    console.log(`JWT issued: ${token}`);
    return token;
  };

  getUser = async (userID: string): Promise<IUser | null> => {
    const result = await this.userRepository.getUser(userID);

    return result;
  };

  // eslint-disable-next-line class-methods-use-this
  private generateToken(userName, userEmail) {
    const payload: TokenPayload = {
      name: userName,
      email: userEmail,
    };

    const token = jwt.sign(payload, process.env.JWTSECRET);
    return token;
  }
}
