import React, { useState, useEffect, useContext } from 'react';
import { CaretDownOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { useLang } from "../../Layout";
import { useNavigate } from 'react-router-dom'



const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false); // состояние для отслеживания, открыт ли аккордеон
    
    const [searchTerm, setSearchTerm] = useState('');
    const query = new URLSearchParams(location.search).get('query');
    const navigate = useNavigate();

    const handleSearch = () => {
      if (searchTerm.trim() !== '') {
        // Навигация на страницу с результатами поиска с передачей поискового запроса через параметры
        navigate(`farm-shop/?query=${searchTerm}`);
      }
    };
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen); // изменяем состояние
    };
  
    return (
      <div className="w-[100%] text-white font-semibold">
        <div className="w-[100%] text-[18px] flex justify-between">
          <a href='farm-shop'>{title}</a>
          <div className='w-[50px] flex justify-end' onClick={toggleAccordion}>{isOpen ? <CaretDownOutlined /> : <CaretLeftOutlined />}</div>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  };
  

export default function BurgerMenu({active}) {
    const { changeLang, lang } = useLang();
    const [isTranslateReady, setIsTranslateReady] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

          if (searchTerm.trim() !== '') {
        // Навигация на страницу с результатами поиска с передачей поискового запроса через параметры
        navigate(`farm-shop/?query=${searchTerm}`);
      }

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
    return (
        <div className={`w-[100vw] h-[100vh] ${active ? 'translate-x-0' : 'translate-x-full'} fixed overflow-y-auto transition-all text-white font-semibold bg-[#107433] top-[50px]`}>
            <div className="w-[100vw] h-[100vh] overflow-auto pb-[100px] px-5">
                <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className=" transform w-[100%] h-[50px] mt-[30px] px-5 py-3 rounded-sm" placeholder="Search..." />
                <div className="w-[100%] mt-[20px] px-5 flex flex-col gap-5">
                    <AccordionItem title={ "Fruits & vegetables" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Vegetables
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Salad
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Onions, garlic & herbs
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Mushrooms
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fruits
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Nuts
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Asia Corner
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Butchery & fish market" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fresh meat
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Sausage & charcuterie
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Oven- & pan- ready
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Nose to tail
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Edible Insects
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fish & seafood
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Meat alternatives
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Milk, cheese & eggs" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cheese counter
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Milk
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cream
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Milk drinks
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Butter & margarine
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Yoghurt & curd
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Desserts
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Alternatives to dairy products
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Eggs
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Egg substitute products
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Bakery & confectionery" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Bread & braided bread
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Buns & croissants
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Sandwiches & pâtisseries salées
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cakes & tortes
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Sweet pastries & sweet pies
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Pâtisserie
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Chocolaterie
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Prepared dough & tortillas
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Ready meals" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Pan- & oven-ready
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Birchermüesli
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fresh soups
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Ready-made salads
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fresh pasta
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Antipasti & Sauces
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Ready-made sauces
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Pantry" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Staple food
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Preserves & canned food
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Sauces & dressings
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Soups
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Bouillons & spices
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Vinegar & oil
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Baking ingredients
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Muesli & cereals
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Jam, honey & spreads
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Crisps & snacks
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Crackers & crispbread
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Biscuits & confectionery
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Chocolate & sweets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Coffee, cocoa & tea
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Advent calendar
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Frozen" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Frozen baked goods
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Frozen ready meals & pizza
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Frozen meat, fish & more
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Frozen fruits, vegetables & herbs
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Ice cream
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Drinks" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Water
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Soft drinks
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Juices, nectars & smoothies
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cider & spritzers
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Beers
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Wine cellar" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Wines
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Spirits
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Tobacco products
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Baby & child" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Baby & children's food
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Baby care & hygiene
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Accessories
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Pet supplies" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cats
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Dogs
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                BARF dogs and cats
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Rodents
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Bird & wildlife
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Food supplements for animals
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Pet accessories
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Household & cosmetics" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Body care & hygiene
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Shampoo, hair care & styling
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Makeup & nail polish
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Food Supplement & wellness
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Cleaning
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Washing & textile care
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fire & Grill Accessories
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Stationery
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Ingredients for cleaning products & cosmetics
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Other household products
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Kitchen & party accessories
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Gifts & sets" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Gifts sets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Office boxes
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Fruit & vegetable sets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Breakfast sets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Sample sets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Farmy accessories
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Vouchers
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Bags & packaging
                            </a>
                        </div>
                    </AccordionItem>
                    <AccordionItem title={ "Flowers & gardening" }>
                        <div className="w-[100%] mt-[15px] px-3 flex flex-col gap-1 text-[14px]">
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Bouquets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Mono bouquets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Flower gift sets
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Dried flowers
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Houseplants
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Vases & scissors
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Garden & balcony plants
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Garden & plant accessories
                            </a>
                            <a className="border-l border-[#999999] pl-3 py-1" href="/farm-shop">
                                Flower arrangements & wreaths
                            </a>
                        </div>
                    </AccordionItem>
                </div>
                <Divider style={{ borderColor: "white", borderWidth: "2px" }}/>
                <div className="w-[100%] flex flex-col gap-5 px-5">
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Barbecue</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Farmy Family Discounts</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Wine Cellar</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Discover Best Prices</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Offers</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Save me</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Ready Meals</p>
                    </a>
                    <a href='/farm-shop' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Producers</p>
                    </a>
                </div>
                <Divider style={{ borderColor: "white", borderWidth: "2px" }}/>
                <div className="w-[100%] flex flex-col gap-5 px-5">
                    <a href='/about-us' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>About us</p>
                    </a>
                    <a href='/login' className="w-[100%] flex justify-start gap-3 items-center">
                        <img className='w-[18px] h-[18px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_mobile_2021_white-43233cf535a76e99a94c8ad6298b3de858b25663631571dcce240ed96a544048.svg" alt="qwe" />
                        <p className='text-[18px]'>Log in</p>
                    </a>
                </div>
                <div id="google_translate_element"></div>
                <div className='flex gap-2 text-[12px] px-5 mt-5'>
                <div className='flex'>
                    <button
                        type="button"
                        translate="no"
                        disabled={!isTranslateReady}
                        onClick={() => translatePage("de")}
                        className={`rounded-l-sm border w-[70px] h-[30px] cursor-pointer ${
                          lang === "de" ? "bg-[#F4991A]" : "bg-white"
                        } ${
                          lang === "de" ? "text-white" : "text-black"
                        }`}
                      >
                        de
                      </button>{" "}
                      <button
                        type="button"
                        translate="no"
                        disabled={!isTranslateReady}
                        onClick={() => translatePage("fr")}
                        className={`border w-[70px] h-[30px] cursor-pointer ${
                          lang === "fr" ? "bg-[#F4991A]" : "bg-white"
                        } ${
                          lang === "fr" ? "text-white" : "text-black"
                        }`}
                      >
                        fr
                      </button>{" "}
                      <button
                        type="button"
                        translate="no"
                        disabled={!isTranslateReady}
                        onClick={() => translatePage("en")}
                        className={`rounded-r-sm border w-[70px] h-[30px] cursor-pointer ${
                          lang === "en" ? "bg-[#F4991A]" : "bg-white"
                        } ${
                          lang === "en" ? "text-white" : "text-black"
                        }`}
                      >
                        en
                      </button>
                </div>
                </div>
            </div>
        </div>
    )
}