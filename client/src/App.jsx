import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from "./routes/MainROutes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen text-black  dark:bg-sigmaBackground dark:text-white">
      <ToastContainer />
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
