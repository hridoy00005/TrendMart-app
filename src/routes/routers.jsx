import {
  Accounts,
  Address,
  Categories,
  Fabourites,
  Home,
  Login,
  Orders,
  ProductDetails,
  Profile,
  Ragistration,
} from "../pages";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/categories/:id", element: <Categories /> },
  { path: "/productdetails", element: <ProductDetails /> },
];

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Ragistration /> },
];

export const privateRoutes = [
  { path: "/profile", element: <Profile /> },
  { path: "/orders", element: <Orders /> },
  { path: "/fabourites", element: <Fabourites /> },
  { path: "/address", element: <Address /> },
  { path: "/accounts", element: <Accounts /> },
];
