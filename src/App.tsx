import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

function App() {
  return (
    <>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
