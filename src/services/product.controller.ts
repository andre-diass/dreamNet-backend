import { IProduct } from '../utils/_types';
import ProductRepository from '../repositories/products.repository';

export class ProductController {
  private productRepository = new ProductRepository();

  getProducts = async (userID: string | undefined): Promise<IProduct[]> => {
    const result = await this.productRepository.getProducts(userID);
    return result;
  };

  getProduct = async (productID: string | undefined): Promise<IProduct> => {
    const result = await this.productRepository.getProduct(productID);
    return result;
  };

  createProduct = async (productObj: IProduct): Promise<IProduct> => {
    const result = await this.productRepository.createProduct(productObj);
    return result;
  };

  updateProduct = async (productObj: Partial<IProduct>, productID: string): Promise<IProduct | null> => {
    const result = await this.productRepository.updateProduct(productObj, productID);
    return result;
  };

  deleteProduct = async (productID: string | undefined): Promise<IProduct> => {
    const result = await this.productRepository.deleteProduct(productID);
    return result;
  };
}
