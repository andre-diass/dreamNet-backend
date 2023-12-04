import { UserSchema } from '../models/user';
import MongoConnection from '../database/db';
import { IUser } from '@src/utils/_types';

export default class CategoryRepository {
  private db = new MongoConnection('users', UserSchema);

  getUser = async (email: string): Promise<IUser | null> => {
    const userModel = await this.db.getModel();
    const result = await userModel.findOne({ email });
    return result;
  };
}
