import shops from "../../mocks/shops.json";
import products from "../../mocks/products.json";


export class ShopService {
  static getAllShops() {
    return shops;
  }

  static getShopById(id: string) {
    const shop = shops.find((s) => s.id === id);
    if (!shop) return null;
    const shopProducts = products.filter((p) => p.shopId === id);
    return { ...shop, products: shopProducts };
  }

  // static findShopsByName(name: string) {
  //   const shop = shops.find((s) => s.name === name);
  //   if (!shop) return null;
  //   const shopProducts = products.filter((p) => p.shopId === name);
  //   return { ...shop, products: shopProducts };
  // }
}

