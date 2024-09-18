// components/Footer.js
import React, { useState } from 'react';
import { FacebookOutlined, XOutlined,InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import PostcodeModal from '../PostcodeModal/PostcodeModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <footer className='w-[100vw] bg-[#107433] pt-5 text-[14px] px-5'>
      <div className="container flex flex-col text-center md:text-start">
        <div className='flex justify-between items-center flex-col md:flex-row md:items-start'>
          <div className='w-[80%] md:w-[60%] flex gap-[40px] flex-col md:flex-row mb-[50px] md:mb-0'>
            <div className="w-[100%] md:w-[60%]">
              <div className="flex justify-between w-[100%]">
                <div className="mx-auto md:mx-0">
                  <p className='text-white'>Do you have a question?</p>
                  <a href="/question"className='text-white underline hover:text-[#F4991A]'>
                  Click here
                  </a>
                </div>
                <div className="hidden md:flex flex-col gap-2">
                  <a href="/about-us" className='text-white hover:text-[#F4991A]'>About us</a>
                  <a href="/our-producers" className='text-white hover:text-[#F4991A]'>Our producers</a>
                  <a href="/product-knowledge" className='text-white hover:text-[#F4991A]'>Product knowledge</a>
                  <a href="/imprint" className='text-white hover:text-[#F4991A]'>Imprint</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-[30%] gap-2 whitespace-nowrap mx-auto md:mx-0 md:whitespace-normal">
              <a href="https://join.com/companies/farmy" className='text-white hover:text-[#F4991A]'>Careers</a>
              <a href="/terms-and-conditions" className='text-white hover:text-[#F4991A]'>Terms & conditions</a>
              <a href="/profile-settings" className='text-white hover:text-[#F4991A]'>Data protection page</a>
              <a href="/contact" className='text-white hover:text-[#F4991A]'>Contact</a>
              <a href="/farmy-pass" className='text-white hover:text-[#F4991A]'>Farmy Pass</a>
              <p onClick={() => setActiveModal(true)} className='text-white hover:text-[#F4991A]'>Change delivery address</p>
              <a href="/cost-delivery" className='text-white hover:text-[#F4991A]'>Delivery information</a>
              <PostcodeModal
                isModalOpen={activeModal === true}
                onClose={() => setActiveModal(false)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-end items-center md:items-start">
            <div className="flex gap-3">
              <a href="https://www.facebook.com/farmy.ch" className='w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center transition-all hover:bg-[blue] hover:text-[white]'><FontAwesomeIcon className='text-[18px]' icon={faFacebookF} /> </a>
              <a href="https://twitter.com/farmyCH" className='w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center transition-all hover:bg-[black] hover:text-[white]'><XOutlined style={{fontSize: '22px'}}/></a>
              <a href="https://www.instagram.com/farmy_ch/" className='w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center transition-all hover:bg-[#DD2A7B] hover:text-[white]'><InstagramOutlined style={{fontSize: '22px'}}/></a>
              <a href="https://www.youtube.com/channel/UCv6zohUoy1j3XxK2u1MtFWQ" className='w-[36px] h-[36px] bg-white rounded-full flex justify-center items-center transition-all hover:bg-[red] hover:text-[white]'><YoutubeOutlined style={{fontSize: '22px'}}/></a>
            </div>
            <div className="flex gap-3 items-center">
              <a href="https://www.trustedshops.ch/bewertung/info_XC41A6F67DA01EF4108CC6FE6DBCE521C.html" className='w-[55px] h-[55px] rounded-full'><img src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/trusted-shops-badge.webp" alt="" /></a>
              <a href="https://digital-commerce-award.ch/uebersicht-sieger/" className='w-[55px] h-[55px] rounded-full'><img src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/ecommerce-award.webp" alt="" /></a>
              <a href="https://www.swiss-online-garantie.ch/" className='w-[55px] h-[55px] rounded-full'><img src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/swiss_ecommerce_association.webp" alt="" /></a>
              <a href="https://www.farmy.ch/ct/farmy-ist-b-corp-zertifiziert" className='w-[45px] h-[75px] rounded-full'><img src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/bcorp-certificate.webp" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="hidden w-[100%] md:flex justify-between gap-[50px]">
          <div className="bg-white w-[140px] h-[172px] flex flex-col gap-3 items-center py-[10px] px-[15px] rounded-t-xl">
            <a href="/">
              <img className='w-[100px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_2021-a4bb04c0a7b06ab668a55ef622c39f24d2823a490ffcc37a18ed1eced70df81c.svg" alt="" />
              <p className='text-[10px] text-[#8F877F]'>© 2024 Farmy.ch</p>
            </a>
          </div>
          <div className="flex justify-end flex-wrap gap-5 items-center leading-0">
            <img className='h-[35px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_twint.webp" alt="" />
            <img className='h-[50px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_cards.webp" alt="" />
            <img className='h-[45px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_amex_full.webp" alt="" />
            <img className='h-[50px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_paypal.webp" alt="" />
            <img className='h-[50px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_pointspay.webp" alt="" />
            <img className='h-[50px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_postfinance.webp" alt="" />
            <div className="flex gap-2 items-center">
              <img className='h-[50px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_rechnung_icon.webp" alt="" />
              <span className='text-white text-[14px]'>Invoice</span>
            </div>
            <img className='h-[25px]' src="https://www.farmy.ch/resources/farmy/images/components/shared/SiteFooter/footer_payment_logo_cembrapay.webp" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
