import { IUser } from '../utils/_types';
import UserRepository from '../repositories/user.repository';

export class UserController {
  private userRepository = new UserRepository();

  getUser = async (email: string): Promise<IUser | null> => {
    const result = await this.userRepository.getUser(email);
    return result;
  };
}
