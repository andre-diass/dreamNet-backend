import { CategorySchema } from '../models/category';
import MongoConnection from '../database/db';
import { ICategory } from '@src/utils/_types';

export default class CategoryRepository {
  private db = new MongoConnection('category', CategorySchema);

  createCategory = async (categoryObj: ICategory): Promise<ICategory> => {
    const categoryModel = await this.db.getModel();
    const result = await categoryModel.create(categoryObj);
    return result;
  };
}
