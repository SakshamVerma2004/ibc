import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Thankyou from "../pages/Thankyou";
import NotFound from "../pages/NotFound";
import Checking from "../pages/Checking";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route
        path="auth/ey/7446859e69024286833e93c63b768294"
        element={<Checking />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
