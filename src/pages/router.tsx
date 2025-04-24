import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import PaginaHome from "./paginaHome";
import PaginaDeLogin from "./paginaDeLogin";
import CriaçãoDeConta from "./paginaDeCriaçãoDeConta";
import PerfilDeCuidadora from "./paginaPerfilCuidadora";
import PerfilDeIdoso from "./paginaPerfilIdoso";
import { isTokenValid } from "../essentials/token";

export const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("access_token");
  if (!token || !isTokenValid(token)) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={< PaginaHome />} />
      <Route path="/Login" element={<PaginaDeLogin />} />
      <Route path="/CriacaoDeConta" element={<CriaçãoDeConta />} />
      <Route path="/PerfilCuidadora" element={<PerfilDeCuidadora />} />
      <Route path="/PerfilIdoso" element={<PerfilDeIdoso />} />

      {/* Rotas que o user precisa estar autenticado */}
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/Login" element={<PaginaDeLogin />} />
        <Route path="/CriacaoDeConta" element={<CriaçãoDeConta />} />
        <Route path="/PerfilCuidadora" element={<PerfilDeCuidadora />} />
        <Route path="/PerfilIdoso" element={<PerfilDeIdoso />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRouter;
