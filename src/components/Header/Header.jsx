import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import { useEffect, useState, useContext } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useLang } from "../../Layout";
import { typeOfProducts } from "../../utils/constants";
import cartImg from "../../../cart-inverted.png";
import mobileAppSvg from "../../../farmy-mobile-app-icon.svg";
import { Dropdown } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import PostcodeModal from '../PostcodeModal/PostcodeModal';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SeachWindow from '../SeachWindow/SeachWindow';
import { CartContext } from '../../CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Импорт нужных иконок
import { faLock, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const items = [
    {
      label: <a href='/favorites'>My favorites</a>,
      key: '0',
        
    },
    {
      label: <a href='/profile-settings'>Farmy Family profile</a>,
      key: '1',
        
    },
    {
      label: <a href='/profile-settings'>My account</a>,
      key: '2',
      
    },
    {
      label: <a href='/farmy-pass'>Farmy Pass</a>,
      key: '3',
      
    },
    {
    label: <a href='/profile-settings-account-balance'>Account balance</a>,
    key: '4',
    
    },
    {
    label: <a href='/profile-settings-bonus-eggs'>Bonus Eggs</a>,
    key: '5',
    
    },
    {
      label: <a onClick={onClick}>Log Out</a>,
      key: '6',
      
    },
  ]

  // const { cart } = useContext(CartContext);

  const { changeLang, lang } = useLang();

  const [isTranslateReady, setIsTranslateReady] = useState(false);

  const [activeModal, setActiveModal] = useState(false);

  const [activeBurger, setActiveBurger] = useState(false);

  const navigate = useNavigate();

  const [search, setSearch] = useState(false);

  const { cart, endPrice } = useContext(CartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const selectField = document.querySelector(".goog-te-combo");
      if (selectField) {
        setIsTranslateReady(true);
        clearInterval(intervalId);
      }
    }, 1000);

    // Dynamically inject the CSS to hide the Google Translate header
    const style = document.createElement("style");
    style.textContent = `
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(intervalId);
      document.head.removeChild(style);
    };
  }, []);

  const translatePage = (lang) => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      changeLang(lang);
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Изменяем размер элемента в зависимости от scrollY
  const getSizeClass = () => {
    if (scrollY < 15) {
      return 'h-[120px] w-[90px] relative top-[-10px]'; // начальный размер
    } else{
      return 'h-[120px] w-[60px]'; // уменьшается при скролле
    }
  };


  const user = useUser();

  function onClick() {
    UsersService.logout();
  }

  const handleClick = (product, index ) => {
    setActiveIndex(index)
    
    // Навигация к новому роуту с параметрами
    navigate({
      pathname: '/farm-shop', 
      search: `?search=${product}`
    });
  };

  return (
  <>
    <Link className='hidden md:block' to="/farmy-app">
      <div className="flex max-w-[1210px] justify-end mx-auto items-center gap-[7px] pt-2.5">
        <img height={29} width={26} src={mobileAppSvg} alt="" />
        <p className=" font-extrabold">Do you know the Farmy app?</p>
      </div>
    </Link>
    {/* DO NOT REMOVE IT IT IS FOR TRANSLATION */}
    <div id="google_translate_element"></div>
    {/*  */}
      <header className='hidden md:block w-[100vw] border-b border-[#27aa55] sticky top-0 z-[1000] left-0'>
        <SeachWindow open={search} close={() => setSearch(false)}/>
        <div className='bg-white font-[signika]'>
          <div className='container flex justify-between items-center h-[100px] '>
            <div className='flex gap-[50px] items-center'>
              <a href='/'>
                <img
                  className={`${getSizeClass()} cursor-pointer transition-all`}
                  src='https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_2021-a4bb04c0a7b06ab668a55ef622c39f24d2823a490ffcc37a18ed1eced70df81c.svg'
                  alt=''
                />
              </a>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 text-[12px]'>
                <button
                    type="button"
                    translate="no"
                    disabled={!isTranslateReady}
                    onClick={() => translatePage("de")}
                    className={`cursor-pointer ${
                      lang === "de" ? "text-[#F4991A]" : ""
                    }`}
                  >
                    de
                  </button>{" "}
                  |
                  <button
                    type="button"
                    translate="no"
                    disabled={!isTranslateReady}
                    onClick={() => translatePage("fr")}
                    className={`cursor-pointer ${
                      lang === "fr" ? "text-[#F4991A]" : ""
                    }`}
                  >
                    fr
                  </button>{" "}
                  |
                  <button
                    type="button"
                    translate="no"
                    disabled={!isTranslateReady}
                    onClick={() => translatePage("en")}
                    className={`cursor-pointer ${
                      lang === "en" ? "text-[#F4991A]" : ""
                    }`}
                  >
                    en
                  </button>
                  {user ? (
                    <div className='flex gap-1 items-center mx-3 cursor-pointer'>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p onClick={() => setActiveModal(true)} className='text-[#F4991A] underline'>{user.zipcode}</p>
                    </div>
                  ) : (
                    <div className='flex gap-1 items-center mx-3 cursor-pointer'>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p onClick={() => setActiveModal(true)} className='text-[#F4991A] underline'>Zürich</p>
                    </div>
                  )}
                  <p>Next delivery date <a className='text-[#F4991A]' href="cost-delivery">09. Sep</a></p>
                </div>
                <div className='flex gap-3 font-bold text-[16px]'>
                  <a href='/farm-shop' className='hover:text-[#F4991A] '>
                    Market
                  </a>
                  <a href='/farm-shop' className='hover:text-[#F4991A]'>
                    Barbecue
                  </a>
                  <a href='/farm-shop' className='hover:text-[#F4991A]'>
                    Best Price
                  </a>
                  <a href='/farm-shop' className='hover:text-[#F4991A]'>
                    Offers
                  </a>
                  <a href='/farm-shop' className='hover:text-[#F4991A]'>
                    Save Me
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              {!user ? (
                <div className='text-end'>
                  <a
                    href='/login'
                    className='text-[16px] flex gap-2 w-[100%] justify-end hover:text-[#F4991A]'
                  >
                    <FontAwesomeIcon width={12} icon={faLock} /> 
                    Log in
                  </a>
                </div>
              ) : (
                <div className='text-end flex justify-end'>
                <Dropdown
                    trigger={['click']}
                    menu={{ items }}
                    placement="bottomRight"
                >
                  <div className='flex cursor-pointer text-right'>
                    <span className='mr-4'>Hi, {user.firstName}</span>
                    <MenuOutlined />
                    {/* <button
                      onClick={onClick}
                      className='text-[16px] font-bold hover:text-[#F4991A]'
                    >
                      Log out
                    </button> */}
                  </div>

                </Dropdown>
                </div>
              )}
              <div className='flex gap-3'>
              <button onClick={() => setSearch(true)} className="w-[140px] text-[#959595] flex items-center pl-3 justify-start gap-2 border">
                <SearchOutlined />
                    search...
              </button>                
              <a href="/cart">
                <button className={`${cart?.length ? 'bg-[#F4991A] text-white' : 0} w-[140px] text-[#959595] flex items-center justify-center gap-2 border`}>
                    <img width={19} height={19} src={cart?.length ? "https://d23qaq2ahooeph.cloudfront.net/assets/cart-a3662d20e778e18f7113a8c61b5c2aae355ad501d14d23e1e09ec4e9b51b266e.png" : cartImg} alt="" />({cart?.length ? cart.length : 0})CHF {Number((endPrice).toFixed(2))}
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#107433] py-2'>
        <div className="max-w-[1100px] mx-[auto] flex justify-between gap-3 text-[12px] text-[#FFFFFF] text-center items-start">
            {typeOfProducts.map((product, index) => (
              <a
                key={product}
                // href={`/market/${() => setSearchParams({ search: product }}`}
                onClick={() => handleClick(product, index)}
                className={`text-[12px] cursor-pointer text-white font-bold hover:text-[#F4991A] ${activeIndex === index ? "text-[#F4991A]" : ""}`}
                // style={{ color: activeIndex === index ? "#F4991A" : "white" }}
              >
                {product}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Mobail */}
      <header className='block md:hidden w-[100vw] h-[50px] sticky top-0 z-[1000] left-0'>
          <div className="bg-white font-[signika] px-3 flex items-center justify-between h-[100%] border-b border-[#d8d8d8]">
            <a href="/"><img className='w-[33px] h-[36px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021-8eef2297ff12eff810b770ea421b83fffc826aac7b361b553c3aa7aad252a678.svg" alt="" /></a>
            <div className="flex gap-3 items-center h-[100%]">
                <img className='w-[30px] h-[30px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/icon_profile_green-44eada336c44706c930cdf775506c6b72c99882fcf867735f661e0dec8c6feb8.png" alt="" />
              <a className='h-[100%] pl-3 border-l border-[#d8d8d8] flex justify-center items-center' href="/profile-settings">
                <img className='w-[30px] h-[30px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/icon_search_green-1f14c3074ad8393dc6cc16d459b8b8c8894fffd79961fe8dca5d734ed6fea080.png" alt="" />
              </a>
              <a className='h-[100%] pl-3 border-l border-[#d8d8d8] flex justify-center items-center' href="/cart">
                <img className='w-[30px] h-[30px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/icon_bag_green-8f463a571cc80186649f8995e16371969c1556fba40ef13ecab35632def5a622.png" alt="" />
              </a>
              <div onClick={() => setActiveBurger(!activeBurger)} className='h-[100%] pl-3 border-l border-[#d8d8d8] flex justify-center items-center'>
                <img className='w-[30px] h-[30px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/icon_burger_menu_green-f041f21029bfb93249b0cac0db040e7b80458f6afc431e22bd2381bba3000a27.png" alt="" />
              </div>
            </div>
          </div>
          <BurgerMenu active={activeBurger} />
      </header>
      <PostcodeModal
        isModalOpen={activeModal === true}
        onClose={() => setActiveModal(false)}
      />
  </>
  );
};

export default Header;
