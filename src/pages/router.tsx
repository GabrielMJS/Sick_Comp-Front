import { Routes, Route } from "react-router-dom";
import PaginaHome from "./paginaHome";
import PaginaDeLogin from "./paginaDeLogin";
import CriaçãoDeConta from "./paginaDeCriaçãoDeConta";
import PerfilDeCuidadora from "./paginaPerfilCuidadora";
import PerfilDeIdoso from "./paginaPerfilIdoso";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={< PaginaHome />} />
      <Route path="/Login" element={<PaginaDeLogin />} />
      <Route path="/CriacaoDeConta" element={<CriaçãoDeConta />} />
      <Route path="/PerfilCuidadora" element={<PerfilDeCuidadora />} />
      <Route path="/PerfilIdoso" element={<PerfilDeIdoso />} />
    </Routes>
  );
}

export default AppRouter;
