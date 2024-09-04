import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../../Layout";
import { typeOfProducts } from "../../utils/constants";
import cartImg from "../../../cart-inverted.png";
import mobileAppSvg from "../../../farmy-mobile-app-icon.svg";
import { Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const items = [
    {
      label: <a href='/profile-settings'>Farmy Family profile</a>,
      key: '0',
        
    },
    {
      label: <a onClick={() => setOpenDrawer(true)}>My account</a>,
      key: '1',
      
    },
    {
      label: <a onClick={() => setOpenDrawer(true)}>My orders</a>,
      key: '2',
      
    },
    {
      label: <a onClick={() => setOpenDrawer(true)}>Farmy Pass</a>,
      key: '3',
      
    },
    {
    label: <a onClick={() => setOpenDrawer(true)}>Account balance</a>,
    key: '4',
    
    },
    {
    label: <a onClick={() => setOpenDrawer(true)}>Bonus Eggs</a>,
    key: '5',
    
    },
  ]

  const { changeLang, lang } = useLang();

  const [searchParams, setSearchParams] = useSearchParams();

  const [isTranslateReady, setIsTranslateReady] = useState(false);

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


  const user = useUser();

  function onClick() {
    UsersService.logout();
  }

  return (
  <>
    <Link to="/farmy-app">
      <div className="flex max-w-[1210px] justify-end mx-auto items-center gap-[7px] pt-2.5">
        <img height={29} width={26} src={mobileAppSvg} alt="" />
        <p className=" font-extrabold">Do you know the Farmy app?</p>
      </div>
    </Link>
    {/* DO NOT REMOVE IT IT IS FOR TRANSLATION */}
    <div id="google_translate_element"></div>
    {/*  */}
      <header className='hidden md:block w-[100vw] border-b border-[#27aa55] fixed z-[1000] top-0 left-0'>
        <div className='bg-white font-[signika]'>
          <div className='container flex justify-between items-center h-[100px] '>
            <div className='flex gap-[50px] items-center'>
              <a href='/'>
                <img
                  className='w-[80px] h-[80px]'
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
                  <p>Zürich</p>
                  <p>Next delivery date</p>
                </div>
                <div className='flex gap-3 font-bold text-[16px]'>
                  <a href='/farm-shop' className='hover:text-[#F4991A]'>
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
            <div className='flex flex-col gap-3 justify-end'>
              {!user ? (
                <div className='text-end'>
                  <a
                    href='/login'
                    className='text-[16px] font-bold hover:text-[#F4991A]'
                  >
                    Log in
                  </a>
                </div>
              ) : (
                <div className='text-end'>
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
              <a href="/cart">
                <button className="w-[140px] text-[#959595] flex items-center justify-center gap-2 border">
                    <img width={19} height={19} src={cartImg} alt="" /> (0)CHF 0
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#107433] py-2'>
        <div className="max-w-[1240px] mx-[auto] flex justify-between gap-3 text-[12px] text-[#FFFFFF] text-center items-center">
            {typeOfProducts.map((product) => (
              <p
                key={product}
                onClick={() => setSearchParams({ search: product })}
                className="text-[12px] cursor-pointer text-white font-bold hover:text-[#F4991A]"
              >
                {product}
              </p>
            ))}
          </div>
        </div>
      </header>
  </>
  );
};

export default Header;
