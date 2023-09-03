import { ProductSchema } from '../models/product';
import MongoConnection from '../database/db';
import { IProduct } from '@src/utils/_types';

export default class ProductRepository {
  private db = new MongoConnection('product', ProductSchema);

  getProducts = async (userID: string | undefined): Promise<IProduct[]> => {
    const productModel = await this.db.getModel();
    const result = await productModel.find({ userId: userID }).exec();
    return result;
  };

  createProduct = async (productObj: IProduct): Promise<IProduct> => {
    const productModel = await this.db.getModel();
    const result = await productModel.create(productObj);
    return result;
  };
}
