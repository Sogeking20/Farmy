import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
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
import CostDelivery from './pages/CostDelivery/CostDelivery';
import FarmyPass from './pages/FarmyPass/FarmyPass';
import ProductKnowledgePage from './pages/ProductKnowledgePage/ProductKnowledgePage';
import { CartProvider } from './CartContext';
import Favorites from './pages/Favorites/Favorites';

function App() {
  const { letter } = useParams(); // Извлекаем параметр из URL

  return (
    <>
      <Router>
        <Layout>
          {/* <CartProvider> */}
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
              <Route path='/farmy-app' element={<FarmyApp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cashier" element={<Cashier />} />
              <Route path="/our-producers/:id" element={<Offer />} />
              <Route path="/cost-delivery" element={<CostDelivery />} />
              <Route path='/profile-settings' element={<Profile settings='myInfo' />} />
              <Route path='/profile-settings-family' element={<Profile settings={'familyPeople'} />} />
              <Route path='/profile-settings-referral' element={<Profile settings={'referral'} />} />
              <Route path='/profile-settings-password' element={<Profile settings={'password'} />} />
              <Route path='/profile-settings-account-balance' element={<Profile settings={'accountBalance'} />} />
              <Route path='/profile-settings-dietary-pref' element={<Profile settings={'dietaryPref'} />} />
              <Route path='/profile-settings-location' element={<Profile settings={'location'} />} />
              <Route path='/profile-settings-bonus-eggs' element={<Profile settings={'bonusEggs'} />} />
              <Route path='/farmy-pass' element={<FarmyPass />} />
              <Route path='/product-knowledge/:letter' element={<ProductKnowledgePage />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
            
          {/* </CartProvider> */}
        </Layout>
      </Router>
    </>
  );
}

export default App;
