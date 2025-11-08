// src/lib/constants/routes.ts
export const ROUTES = {
  HOME: (lang: string) => `/${lang}`, // src/app/[lang]/page.tsx
  SHOPS: (lang: string) => `/${lang}/shop-directory`, // src/app/[lang]/shop-directory/page.tsx
  SHOP: (lang: string, id: string) => `/${lang}/shop-directory/${id}`, // src/app/[lang]/shop-directory/[id]/page.tsx
  ABOUT: (lang: string) => `/${lang}/about`, // src/app/[lang]/about/page.tsx
  LOGIN: (lang: string) => `/${lang}/login`, // src/app/[lang]/login/page.tsx
  SIGNUP: (lang: string) => `/${lang}/signup`, // src/app/[lang]/signup/page.tsx
  DASHBOARD: (lang: string) => `/${lang}/dashboard`, // src/app/[lang]/dashboard/page.tsx
  MY_SHOPS: (lang: string) => `/${lang}/dashboard/my-shops`, // nested pages
  EDIT_SHOP: (lang: string, id: string) => `/${lang}/dashboard/edit-shop/${id}`,
  PRODUCTS: (lang: string, shopId: string) =>
    `/${lang}/dashboard/products/${shopId}`,
  CATALOGS: (lang: string, shopId: string) =>
    `/${lang}/dashboard/catalogs/${shopId}`,
  INVENTORY: (lang: string, shopId: string) =>
    `/${lang}/dashboard/inventory/${shopId}`,
};
