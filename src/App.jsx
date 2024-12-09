import "./App.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./routes/AllRoutes";
import { HelmetProvider } from "react-helmet-async";
import PopupForm from "./components/PopupForm";
import WaitingLoader from "./components/WaitingLoader";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  let [showForm, setShowForm] = useContext(AuthContext);
  let handleScroll = () => {
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollPosition >= pageHeight * 0.35) {
      setShowForm(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="prepeve">
        <ToastContainer />
        <HelmetProvider>
          <AllRoutes />
        </HelmetProvider>
        <PopupForm />
        <WaitingLoader />
      </div>
    </>
  );
}

export default App;
