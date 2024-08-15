import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes, privateRoutes, publicRoutes } from "./routers";
import { NotFound } from "../pages";
import { AuthProtector, PrivateProtector } from "./RouterProtector";
import PublicLayout from "../layouts/PublicLayout";

const RouterMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={<PublicLayout>{element}</PublicLayout>} />
        ))}

        {/* Auth Routes */}
        {authRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={<AuthProtector element={element} />} />
        ))}

        {/* Private Routes */}
        {privateRoutes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={<PrivateProtector element={element} />} />
        ))}

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterMain;
