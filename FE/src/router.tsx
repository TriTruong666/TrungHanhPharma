import Layout from "@/components/layout";
import CartPage from "@/pages/cart";
import ProductListPage from "@/pages/catalog/product-list";
<<<<<<< HEAD
import CategoryListPage from "@/pages/catalog/index";
=======
import CategoryListPage from "@/pages/catalog";
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
import ProductDetailPage from "@/pages/catalog/product-detail";
import HomePage from "@/pages/home";
import ProfilePage from "@/pages/profile/index";
import SearchPage from "@/pages/search";
import { PolicyPage } from "@/pages/profile/policy";
import { createBrowserRouter } from "react-router-dom";
import { getBasePath } from "@/utils/zma";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          handle: {
            logo: true,
          },
        },
        {
          path: "/categories",
          element: <CategoryListPage />,
          handle: {
            title: "Danh mục sản phẩm",
            back: true,
          },
        },
        {
          path: "/cart",
          element: <CartPage />,
          handle: {
            title: "Giỏ hàng",
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            title: "Trang cá nhân",
          },
        },
        {
          path: "/flash-sales",
          element: <ProductListPage />,
          handle: {
            title: "Flash Sales",
          },
        },
        {
          path: "/category/:id",
          element: <ProductListPage />,
          handle: {
            title: ({ categories, params }) =>
              categories.find((c) => c.id === Number(params.id))?.name,
          },
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
          handle: {
            scrollRestoration: 0,
          },
        },
        {
          path: "/search",
          element: <SearchPage />,
          handle: {
            title: "Tìm kiếm",
          },
        },
        {
          path: "/policy",
          element: <PolicyPage />,
          handle: {
            title: "Chính sách và điều khoản",
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
