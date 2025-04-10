import { Routes, Route } from "react-router-dom";
import PaginaHome from "./paginaHome";
import PaginaDeLogin from "./paginaDeLogin";
import CriaçãoDeConta from "./paginaDeCriaçãoDeConta";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={< PaginaHome/>} />
      <Route path="/Login" element={<PaginaDeLogin />} />
      <Route path="/CriacaoDeConta" element={<CriaçãoDeConta />} />
    </Routes>
  );
}

export default AppRouter;
