import {
  Address,
  Categories,
  Fabourites,
  ForgetPassword,
  Home,
  Login,
  Orders,
  ProductDetails,
  Profile,
  Ragistration,
  ResetPassword,
  Subcategories,
} from "../pages";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/categories/:id", element: <Categories /> },
  { path: "/subcategory/:id", element: <Subcategories /> },
  { path: "/productdetails/:id", element: <ProductDetails /> },
];

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Ragistration /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
];

export const privateRoutes = [
  { path: "/profile", element: <Profile /> },
  { path: "/orders", element: <Orders /> },
  { path: "/fabourites", element: <Fabourites /> },
  { path: "/address", element: <Address /> },
];
