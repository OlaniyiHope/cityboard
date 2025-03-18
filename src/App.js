import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Donation from "./pages/Donation";
// import DonateDet from "./pages/DonateDet";
// import DonateNow from "./pages/DonateNow";
// import Contact from "./pages/Contact";
// import Gallery from "./pages/Gallery";
// import Testimomy from "./pages/Testimony";
// import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation-details" element={<DonateDet />} />
        <Route path="/donate-now" element={<DonateNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimomy />} />
        <Route path="/volunteers" element={<Team />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
