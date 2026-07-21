import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import NotFound from "./pages/Notfound/NotFound";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
}

export default App;
