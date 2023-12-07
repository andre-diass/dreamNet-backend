/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import jwt from 'jsonwebtoken';
import { ClientErrorCodes } from '../utils/statusCode';
import { IUser } from '../models/user';
import UserRepository from '../repositories/user.repository';

export class UserService {
  private userRepository = new UserRepository();

  // eslint-disable-next-line consistent-return
  login = async (accountID: string, userID: string) => {
    const userInfo = await this.userRepository.getUser(userID);

    const account = await this.userRepository.getAccount(accountID);

    console.log(userInfo, account);

    const token = jwt.sign({ id: 23 }, process.env.JWTSECRET);
    console.log(`JWT issued: ${token}`);
    return token;
  };

  getUser = async (userID: string): Promise<IUser | null> => {
    const result = await this.userRepository.getUser(userID);

    return result;
  };
}
