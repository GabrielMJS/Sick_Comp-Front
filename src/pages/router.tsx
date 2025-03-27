import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import NotFound from "./not-found/not-found";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
