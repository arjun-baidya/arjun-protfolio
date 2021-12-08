import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import MyNavbar from "./Components/Header/MyNavbar";
import Projects from "./Components/Projects/Projects";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
