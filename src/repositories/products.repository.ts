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

  getProduct = async (productID: string | undefined): Promise<IProduct> => {
    const productModel = await this.db.getModel();

    const result = (await productModel.findById({ _id: productID }).exec()) as IProduct;
    return result;
  };

  createProduct = async (productObj: IProduct): Promise<IProduct> => {
    const productModel = await this.db.getModel();
    const result = await productModel.create(productObj);
    return result;
  };

  updateProduct = async (productObj: Partial<IProduct>, productID: string): Promise<IProduct | null> => {
    const productModel = await this.db.getModel();
    const result = await productModel.findByIdAndUpdate({ _id: productID }, productObj, {
      new: true,
    });
    if (!result) {
      return null;
    }

    return result;
  };
}
