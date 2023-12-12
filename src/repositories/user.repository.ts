import { ObjectId } from 'mongodb';
import { UserSchema, AccountSchema, IUser, IAccount } from '../models/user';
import MongoConnection from '../database/db';

export default class CategoryRepository {
  private usersConn = new MongoConnection('users', UserSchema);

  private accountsConn = new MongoConnection('account', AccountSchema);

  getUser = async (userID: string): Promise<IUser | null> => {
    const userCol = await this.usersConn.getModel();
    const result = await userCol.findOne({ _id: new ObjectId(userID) });

    return result;
  };

  getAccount = async (accountID: string): Promise<IAccount | null> => {
    const userCol = await this.accountsConn.getModel();
    const result = await userCol.findOne({ providerAccountId: accountID });

    return result;
  };
}
