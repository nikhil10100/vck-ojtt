import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div>
     <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/not-found" element={<NotFoundPage/>} />
      </Routes>
     </Router>
     </>
    </div>
  );
};

export default App
