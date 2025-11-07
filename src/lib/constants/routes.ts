// src/lib/constants/routes.ts
export const ROUTES = {
  HOME: "/", // src/app/page.tsx
  SHOPS: "/shop-directory", // src/app/shop-directory/shopDirectoryPage.tsx
  SHOP: (id: string) => `/shop-directory/${id}`, // src/app/shop-directory/[id]/shopStorefront.tsx
  ABOUT: "/about", // create src/app/about/page.tsx if needed
  LOGIN: "/login", // create src/app/login/page.tsx if needed
  SIGNUP: "/signup", // create src/app/signup/page.tsx if needed
  DASHBOARD: "/dashboard", // create src/app/dashboard/page.tsx if needed
  MY_SHOPS: "/dashboard/my-shops", // create nested pages as needed
  EDIT_SHOP: (id: string) => `/dashboard/edit-shop/${id}`,
  PRODUCTS: (shopId: string) => `/dashboard/products/${shopId}`,
  CATALOGS: (shopId: string) => `/dashboard/catalogs/${shopId}`,
  INVENTORY: (shopId: string) => `/dashboard/inventory/${shopId}`,
};
