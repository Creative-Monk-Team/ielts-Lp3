import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Thankyou from "../pages/Thankyou";
import NotFound from "../pages/NotFound";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
