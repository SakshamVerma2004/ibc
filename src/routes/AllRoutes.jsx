import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Thankyou from "../pages/Thankyou";
import NotFound from "../pages/NotFound";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
