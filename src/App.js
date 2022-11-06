import "./App.css";
import Header from "./Companents/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Donate from "./pages/Shop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetails from "./Companents/DonateProjects/ProjectDetails/ProjectDetails";
import AddToBasket from "./Companents/AddToBasket/AddToBasket";
import CommonDonate from "./pages/CommonDonate";
import ProjectDetailsDonate from "./Companents/DonateProjects/ProjectDetails/ProjectDetailsDonate";
import News from "./pages/News";
import ContactUs from "./Companents/ContactUs/ContactUs";
import Footer from "./Companents/Footer/Footer";
import CommonProjectDetails from "./Companents/CommonProjects/CommonProjectDetails";
import AboutApplyHere from "./Companents/AboutApplyHere/AboutApplyHere";
import AboutApplySubcribe from "./Companents/AboutApplyHere/AboutApplySubcribe";
import CorporatePartnerships from "./Companents/CorporatePartnerships/CorporatePartnerships";
import DisasterResponse from "./Companents/DisasterResponse/DisasterResponse";
import StoryDetails from "./Companents/OurStories/StoryDetails";
import ProductDetails from "./Companents/Product/ProductDetails";
import Pay from "./Companents/AddToBasket/Pay";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/shop" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/commondonate" element={<CommonDonate />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          <Route path="/storydetails/:id" element={<StoryDetails />} />
          <Route path="/addtobasket" element={<AddToBasket />} />
          <Route
            path="/projectdetailsdonate/:id"
            element={<ProjectDetailsDonate />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/commonprojectdetails/:id"
            element={<CommonProjectDetails />}
          />
          <Route path="/aboutapplyhere" element={<AboutApplyHere />} />
          <Route path="/aboutapplysubcribe" element={<AboutApplySubcribe />} />
          <Route
            path="/corporatepartnerships"
            element={<CorporatePartnerships />}
          />
          <Route path="/disasterResponse" element={<DisasterResponse />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/pay/:id" element={<Pay />} />
        </Routes>
        <ContactUs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
