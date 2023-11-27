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

  getCategories = async (userID: string | undefined): Promise<ICategory[]> => {
    const categoryModel = await this.db.getModel();
    const result = await categoryModel.find({ userId: userID }).exec();
    return result;
  };

  updateCategory = async (categoryObj: Partial<ICategory>, categoryID: string): Promise<ICategory | null> => {
    const categoryModel = await this.db.getModel();
    const result = await categoryModel.findByIdAndUpdate({ _id: categoryID }, categoryObj, {
      new: true,
    });
    if (!result) {
      return null;
    }
    return result;
  };

  deleteCategory = async (categoryID: string | undefined): Promise<ICategory> => {
    const categoryModel = await this.db.getModel();
    const result = (await categoryModel.findByIdAndDelete({ _id: categoryID })) as ICategory;
    return result;
  };
}

// refatorar pra getCollection
