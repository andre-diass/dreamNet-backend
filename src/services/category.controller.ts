import { ICategory } from '../utils/_types';
import CategoryRepository from '../repositories/category.repository';

export class CategoryController {
  private categoryRepository = new CategoryRepository();

  createCategory = async (categoryObj: ICategory): Promise<ICategory> => {
    const result = await this.categoryRepository.createCategory(categoryObj);
    return result;
  };

  getCategories = async (userID: string | undefined): Promise<ICategory[]> => {
    const result = await this.categoryRepository.getCategories(userID);
    return result;
  };
}
