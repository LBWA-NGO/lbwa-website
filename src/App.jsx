import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="" >
<Navbar/>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
<Footer/>
</div>
  );
}

export default App;
