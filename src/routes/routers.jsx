import {
  Address,
  Cart,
  CategoryView,
  Favourites,
  ForgetPassword,
  Home,
  Login,
  Orders,
  ProductDetails,
  Profile,
  Ragistration,
  ResetPassword,
  Subcategories,
  Checkout,
  OrderConfirmation,
  OrderDetails,
  SizeGuide,
} from "../pages";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/categories/:id", element: <CategoryView /> },
  { path: "/subcategory/:id", element: <Subcategories /> },
  { path: "/productdetails/:id", element: <ProductDetails /> },
  { path: "/productdetails/:id/sizeguide/", element: <SizeGuide /> },
  { path: "/cart/", element: <Cart /> },
];

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Ragistration /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
];

export const privateRoutes = [
  { path: "/profile", element: <Profile /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/order-confirmation/:orderId", element: <OrderConfirmation /> },
  { path: "/orders", element: <Orders /> },
  { path: "/orders/:orderId", element: <OrderDetails /> },
  { path: "/favourites", element: <Favourites /> },
  { path: "/address", element: <Address /> },
];
