import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './pages/Main/Main';
import Convince from './pages/Convince/Convince';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import AboutUs from './pages/AboutUs/AboutUs';
import OurProducers from './pages/OurProducers/OurProducers';
import ProductKnowledge from './pages/ProductKnowledge/ProductKnowledge';
import Imprint from './pages/Imprint/Imprint';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Contacts from './pages/Contacts/Contacts';
import Question from './pages/Question/Question';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <>
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fresh-food-delivered-to-your-door" element={<Convince />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-producers" element={<OurProducers />} />
          <Route path="/product-knowledge" element={<ProductKnowledge />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/question" element={<Question />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
     </Router>
    </>
  )
}

export default App
