import "./App.css";
import Loader from "./components/Loader";
import PopupForm from "./components/PopupForm";
import WaitingLoader from "./components/WaitingLoader";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

// Pending Tasks
// https://github.com/SakshamCM/IBC_LP
// 6. To which Mail Sent
// 7. Form Content Change

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Loader />
      <HelmetProvider>
        <AllRoutes />
      </HelmetProvider>
      <PopupForm />
      <WaitingLoader />
    </div>
  );
}

export default App;
