import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import Cart from './pages/Cart/Cart';
import Contacts from './pages/Contacts/Contacts';
import Convince from './pages/Convince/Convince';
import Imprint from './pages/Imprint/Imprint';
import LogIn from './pages/LogIn/LogIn';
import Main from './pages/Main/Main';
import OurProducers from './pages/OurProducers/OurProducers';
import ProductKnowledge from './pages/ProductKnowledge/ProductKnowledge';
import ProductPage from './pages/ProductPage/ProductPage';
import Question from './pages/Question/Question';
import SignUp from './pages/SignUp/SignUp';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Market from './pages/Market/Market';
import Profile from './pages/Profile/Profile';
import FarmyApp from './pages/FarmyApp.tsx/FarmyApp';
import Cashier from "./pages/Cashier/Cashier";
import Offer from "./pages/Offer/Offer";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route
              path='/fresh-food-delivered-to-your-door'
              element={<Convince />}
            />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/our-producers' element={<OurProducers />} />
            <Route path='/product-knowledge' element={<ProductKnowledge />} />
            <Route path='/imprint' element={<Imprint />} />
            <Route
              path='/terms-and-conditions'
              element={<TermsAndConditions />}
            />
            <Route path='/contact' element={<Contacts />} />
            <Route path='/question' element={<Question />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/farm-shop' element={<Market />} />
            <Route path='/profile-settings' element={<Profile />} />
            <Route path='/farmy-app' element={<FarmyApp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cashier" element={<Cashier />} />
            <Route path="/our-producers/:id" element={<Offer />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
