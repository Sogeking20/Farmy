import Product from '../../components/Product/Product'
import { Divider } from 'antd'
import { useUser } from '../../hooks/useUser';
import { useLang } from "../../Layout";
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Main() {
    const { lang } = useLang();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const generateLang = () => {
      if (lang === "en") {
        return "/EN_out.json";
      }
      if (lang === "fr") {
        return "/FR_out.json";
      }
      if (lang === "de") {
        return "/DE_out.json";
      }
    };

    const [scrollY, setScrollY] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const handleScroll = () => {
        setScrollY(window.scrollY);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const getSizeClass = () => {
        if (scrollY < 15) {
          return 'h-[140px]'; // начальный размер
        } else{
          return 'h-[100px]'; // уменьшается при скролле
        }
      };
    
    
    
    useEffect(() => {
      fetch(generateLang())  // Путь к вашему JSON файлу
        .then(response => response.json())
        .then(jsonData => {
          setData(jsonData)
          console.log(data);
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error));
      }, []);

      const handleSearch = () => {
        if (searchTerm.trim() !== '') {
          // Навигация на страницу с результатами поиска с передачей поискового запроса через параметры
          navigate(`/farm-shop/?query=${searchTerm}`);
        }
      };

    const user = useUser();

    let firstArray = data.slice(4, 8)
    let secondArray = data.slice(100, 104)
    let thirdArray = data.slice(200, 204)
  return (
    <>
    {!user ?(
        <div className="relative w-[100vw] h-[360px] bg-[#107433] bg-no-repeat bg-fixed bg-[0_-150px] bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/dashboard1/farmy-header-bubbles-77194d6594dbf71e407354c9860f9eaa1fd6f5698a1b5dc43feca6e6bb945420.svg')] text-white mb-[200px]">
            <div className='flex flex-col h-[100%] items-center text-center'>
            <div className='mb-[35px] mt-[30px]'>
                <h1 className='text-shadow text-[48px] font-bold outline-black'>The online market that really has everything</h1>
                <p className='text-[35px]'>Your fresh food directly from producers</p>
            </div>
            <a href="/fresh-food-delivered-to-your-door"><button className='text-shadow shadow-md text-[25px] py-[10px] px-[20px] bg-[#F4991A] rounded-sm font-bold'>Convince yourself</button></a>
            </div>
            <div className="absolute max-w-[1140px] w-[100%] left-[50%] bottom-[-100px] transform -translate-x-1/2 px-10">
            <div className='w-[100%] flex justify-between'>
                <div className="w-[32%] border rounded-xl overflow-hidden">
                <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/01/EN_HPB_weekly-offers-new.webp" alt="" /></a>
                </div>
                <div className="w-[32%] border rounded-xl overflow-hidden">
                <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/EN_BackToSchool.webp" alt="" /></a>
                </div>
                <div className="w-[32%] border rounded-xl overflow-hidden">
                <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/Nescafe-new_EN-min-scaled.webp" alt="" /></a>
                </div>
            </div>
            </div>
        </div>
    ) : (
        <div className="max-w-[1140px] w-[100%] mx-auto">
        <div className='hidden sm:flex w-[100%] px-5 py-[50px] justify-between'>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/01/EN_HPB_weekly-offers-new.webp" alt="" /></a>
            </div>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/EN_BackToSchool.webp" alt="" /></a>
            </div>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/Nescafe-new_EN-min-scaled.webp" alt="" /></a>
            </div>
        </div>
        <Swiper
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper sm:hidden w-[100%] pb-5"
        >
            <SwiperSlide>
                <div className="w-[100vw] overflow-hidden">
                    <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/DE_Wine_Festival.webp" alt="" /></a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[100%] overflow-hidden">
                    <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/04/Farmypass-HPB_DE.webp" alt="" /></a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[100%] overflow-hidden">
                    <a href="/farm-shop"><img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/03/DE_FriendReferral.webp" alt="" /></a>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    )
    }
    <div className="w-[100vw]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>Current offers</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
            {firstArray.length ? (
            firstArray?.map((product, index) => {
                const packaging = product.product_properties.find(
                (el) => el.name === "packaging"
                );

                return (
                <div key={product.id} className="h-[335px]">
                    <Product
                    img={product.images.lg}
                    name={product.name}
                    priceAfrer={product.price}
                    description={product.supplier.name}
                    supplier={packaging?.value}
                    id={product?.id}
                    />
                </div>
                );
            })
            ) : (
            <></>
            )}
        </div>
        <button className='shadow-text shadow-sm w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button>
        <Divider />
        </div>
    </div>
    <div className="w-[100vw] px-5 text-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 max-w-[940px] w-[100%] mx-auto p-[20px] bg-no-repeat bg-cover bg-[url('https://www.farmy.ch/resources/farmy/images/banerDiscount.png')] rounded-lg">
        <div className="ml-0 text-center sm:text-start sm:ml-[15%] font-bold text-[20px]">
            <p>Discover a world of benefits with the Farmy Pass:</p>
            <p>Get your first 3 months for free.</p>
        </div>
        <a href="/farmy-pass"><button className='w-[230px] h-[46px] bg-inherit border-[2px] border-black rounded-xl'>Try it now!</button></a>
        </div>
        <p className='text-center mt-10 text-[24px] font-bold'>The finest products from over 1,200 authentic producers</p>
        <div className="container hidden lg:flex relative flex-col items-center">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  className='w-[100%] mt-10 border p-2 rounded-md' type="text" placeholder="'Smoothie', 'Vegan', 'Fruit' or 'Tomatoes'? .."/>
        <button onClick={handleSearch} className='absolute right-[23px] top-[23px] w-[20%] h-[37px] mt-5 text-[18px] font-bold bg-[#F4991A] rounded-md text-white'>Search</button>
        </div>
        <Divider style={{marginTop: '70px'}}/>
    </div>
    <div className="w-[100vw]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>New products</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
        {secondArray.length ? (
            secondArray?.map((product, index) => {
                const packaging = product.product_properties.find(
                (el) => el.name === "packaging"
                );

                return (
                <div key={product.id} className="h-[335px]">
                    <Product
                    img={product.images.lg}
                    name={product.name}
                    priceAfrer={product.price}
                    description={product.supplier.name}
                    supplier={packaging?.value}
                    id={product?.id}
                    />
                </div>
                );
            })
            ) : (
            <></>
            )}
        </div>
        <a href="/farm-shop"><button className='shadow-text shadow-sm w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button></a>
        <Divider />
        </div>
    </div>
    <div className="w-[100vw]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>Most popular</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
        {thirdArray.length ? (
            thirdArray?.map((product, index) => {
                const packaging = product.product_properties.find(
                (el) => el.name === "packaging"
                );

                return (
                <div key={product.id} className="h-[335px]">
                    <Product
                    img={product.images.lg}
                    name={product.name}
                    priceAfrer={product.price}
                    description={product.supplier.name}
                    supplier={packaging?.value}
                    id={product?.id}
                    />
                </div>
                );
            })
            ) : (
            <></>
            )}
        </div>
        <a href="/farm-shop"><button className='shadow-text shadow-sm w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button></a>
        <Divider />
        </div>
    </div>
    <div className="max-w-[940px] w-[100%] px-5 mx-auto mb-[50px]">
        <div className="mb-[40px]">
        <h3 className='text-[20px] font-bold text-center mb-[15px]'>Shop from the comfort of your own home</h3>
        <p className='text-[16px] leading-[1.4rem]'>With our online grocery delivery service, you can shop from the comfort of your own home without ever having to leave. We provide you with an easy and fast way to do your shopping online and have the delivery brought right to your doorstep.</p>
        </div>
        <div className="">
        <h3 className='text-[20px] font-bold text-center mb-[15px]'>Fresh and high-quality groceries</h3>
        <p className='text-[16px] leading-[1.4rem]'>Our goal is to always provide you with fresh and high-quality groceries. We work closely with our suppliers to ensure that you receive the best quality possible. Our groceries are carefully selected and packaged to maintain their freshness and are delivered directly to your doorstep.</p>
        </div>
    </div>
    </>
  )
}

export default Main