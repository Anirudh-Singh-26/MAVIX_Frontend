import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css"; // <--- custom styles for toast
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {

  useEffect(() => {
    toast.success("🚀 Test toast works!");
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg text-text overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ToastContainer
          containerId="app-toaster"
          position="top-right"
          autoClose={2000}
          newestOnTop={true}
          closeOnClick
          draggable
          pauseOnHover
          hideProgressBar={false}
          toastClassName="custom-toast"
          bodyClassName="custom-toast-body"
          progressClassName="custom-toast-progress"
          style={{ top: "90px", right: "25px", zIndex: 9999 }}
        />
      </div>
    </Router>
  );
}

export default App;
