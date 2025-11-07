import products from "../../mocks/products.json";

export class ProductService {
  static getAllProducts() {
    return products;
  }

  static getProductById(id: string) {
    return products.find((p) => p.id === id);
  }
}
