import { IProduct } from '../utils/_types';
import ProductRepository from '../repositories/products.repository';

export class ProductController {
  private productRepository = new ProductRepository();

  getProducts = async (userID: string | undefined): Promise<IProduct[]> => {
    const result = await this.productRepository.getProducts(userID);
    return result;
  };

  createProduct = async (productObj: IProduct): Promise<IProduct> => {
    const result = await this.productRepository.createProduct(productObj);
    return result;
  };
}
