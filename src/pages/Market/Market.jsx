import { useEffect, useRef, useState, useContext } from "react";
import Product from "../../components/Product/Product";
import { useLang } from "../../Layout";
import { filterOptions, filtersAddition, filtersAnimalTypes, filtersCountries, filtersGrapeVariety, filtersPrice, filtersProducers, filtersRecommendable, filtersRegions, filtersTaste, typeOfProducts, typeOfProductsCounts } from "../../utils/constants";
import { useSearchParams, useLocation } from "react-router-dom";
import { Drawer } from "../../components/Checkbox/Checkbox";
import { Switch, ConfigProvider, Divider } from "antd";
import CartWindow from "../../components/CartWindow/CartWindow";
import { ControlOutlined, CloseOutlined, CaretDownOutlined, CaretUpOutlined, CaretRightFilled } from "@ant-design/icons";
const PRODUCTS_PER_PAGE = 40;
import { useUser } from "../../hooks/useUser";
import { CartContext } from "../../CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faInfoCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; 
import { faStar, faCalendarAlt  } from '@fortawesome/free-regular-svg-icons';

const Market = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const lastCardRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [permission, setPermission] = useState(true)
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([])
  const query = new URLSearchParams(location.search).get('query');
  const { user } = useUser();
  const { cart } = useContext(CartContext);
  const [imgActive, setImgActive] = useState(true);


  useEffect(() => {
    if (query) {
      const filtered = data.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filtered)
      setDisplayedProducts(filtered);
    } else {
      setDisplayedProducts(data);
    }
  }, [query, data]);

  const toggleActive = (index) => {
    if (activeIndices.includes(index)) {
      // Если индекс уже активен, удаляем его из массива
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Если индекс не активен, добавляем его в массив
      setActiveIndices([...activeIndices, index]);
    }
  };

  const items = [{name:'Relevancy', img: <FontAwesomeIcon fontSize={17} icon={faBars} />}, {name:'Popular', img: <FontAwesomeIcon fontSize={17} icon={faStar} />}, {name:'New', img: <FontAwesomeIcon fontSize={17} icon={faCalendarAlt} />}, {name:'proximity', img: <FontAwesomeIcon fontSize={17} icon={faLocationDot} />}, {name:'CHF', filter: true}, {name:'CHF/100G', filter: true}, {name:'CO2 Saving', img: <FontAwesomeIcon fontSize={17} icon={faInfoCircle} />, filter: true} ];
  const itemsSecond = ['Swiss', 'Bio-certified', 'Vegan', 'Veggie']

  useEffect(() => {
    if (searchParams.get("search")) {
      setDisplayedProducts(
        data.filter((product) =>
          product.category[0]?.name
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        )
      );
    } else if (searchParams.get("query")) {
      const filtered = data.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(filtered)
      setDisplayedProducts(filtered);
    }
  }, [searchParams]);

  const { lang } = useLang();
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
  useEffect(() => {
    fetch(generateLang())
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      }) // Read the file content as text
      .then((text) => {
        if (searchParams.get("search")) {
          setData(
            text.filter((product) =>
              product.category[0]?.name
                .toLowerCase()
                .includes(searchParams.get("search").toLowerCase())
            )
          );
        } else {
          setData(text);
        }
      })
      .catch((err) => {
        setError("Failed to fetch the file.");
      });
  }, [lang]);

  useEffect(() => {
    const loadMoreProducts = () => {
      const newProducts = data.slice(0, page * PRODUCTS_PER_PAGE);
      setDisplayedProducts(newProducts);
    };

    loadMoreProducts();
  }, [page, data]);

  useEffect(() => {
    const handleScroll = () => {
      if (lastCardRef.current) {
        const lastCard = lastCardRef.current.getBoundingClientRect();
        if (lastCard.bottom <= window.innerHeight) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  console.log(searchParams.get("search")?.toLowerCase())

  return (
    <>
      {searchParams.get("search")?.toLowerCase() == 'fruits ' ? (
        imgActive ? (
            <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/fruits_vegetables_desktop-21f2686ddd17510dcca07a2c9fa7a82dedac6bb0bf09503e4873ef118fb3e304.png)]">
              <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
              <p className="text-[21px] sm:text-[32px] font-bold text-white">Fresh fruits & vegetables</p>
              <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Choose from our seasonal, fresh variety of fruits and vegetables from mainly Swiss and European farms, 2/3 of which are certified organic.</p>
            </div> 
          ) : null
        
        ) : searchParams.get("search")?.toLowerCase() == 'butchery ' ? (
          imgActive ? (
            <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/butchery_fish_market_desktop-e5df208d7f5beb6b812090febd60622e332ef03a28fdd0af337f33322df3c279.png)]">
              <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
              <p className="text-[21px] sm:text-[32px] font-bold text-white">Largest butchery & fish market</p>
              <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Take a digital stroll through the largest assortment of fresh meat in the best quality from more than 10 butcheries offering over 85 % Swiss products and freshly fished regional delicacies as well as common fish from trustworthy sources.</p>
            </div> 
          ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'milk, cheese ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/milk_cheese_eggs_desktop-7983d217c9356869f4d3a7ebf23757d98dba7dfcb4215512dd4ef46938046cc6.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Swiss dairy products</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Enjoy over 500 cheese types as well as milk and eggs from Swiss farms and discover our large assortment of certified organic dairy products.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'bakery ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/bakery_confectionery_desktop-3d9265fd3ff009ed4510bf3c38d8cc16370c1ebd9a3031cd11e1c4626941332c.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Freshly baked and confectioned</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Taste crispy bread from 10 local bakeries and indulge yourself with the finest confectionery from Swiss confectioners while more than 50 % of the assortment is organic.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'ready meals' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/ready_meals_desktop-8699b26f68cc6627498b72594459cc7766d4c028750f5728632284d33b0265a9.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Ready meals for you</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Sometimes things have to happen quickly. And that’s exactly why we have healthy, balanced ready meals hand-made by butchers and restaurants.
            </p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'pantry' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/pantry_desktop-c401ec564bda40a8dd6ee452f74beee8071b31bc6e1deea81fb9a6e2163c5e7b.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Perfect pantry</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">It’s always good to have some basics on hand. Find everything you need to stock up your pantry from regional producers and brands with more than 2/3 of organic products.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'frozen' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/frozen_desktop-dbac34613a57bbc6ef1a41c1e182e6eee9da4b42da5b28d6afdc08aaa39b764f.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Frozen freshness</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Find everything frozen here, from ice cream to peas to pizza.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'drinks' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/drinks_desktop-e52871e8eaf490523ebb67b2c8b284579cab12c159f6c76b368548e850d550a9.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Sustainably refreshing drinks</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">For your daily hydration, for the apéro or to take on hikes: Find all the refreshing drinks you need in mainly reusable glass bottles with a deposit system and pick-up service.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'wine cellar' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/wine_cellar_desktop-cd23a96bf6a205a371cf7f497b1b02f314347b0570cc818b79cac70de6f7179b.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Welcome to our wine cellar</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">At Farmy we offer a selected range of the finest wines from small wineries, perfectly attuned to current trends and individual tastes - also non-alcoholic.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'baby ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/baby_child_desktop-cfa19bfad8c5c6b9f71644c0638b8a2b525ea0c7543dca66e5fdeff522fac8a9.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">For our little ones only the healthiest</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Children deserve healthy treats, tasty toothpaste and all the love we have. Spoil your kids with our preselected products of the best quality.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'pet supplies' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/pet_supplies_desktop-65a8fc31b33b06565a22d8c475529282164ea287a2fa4e3050f6281717a5af9f.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">For our pet friends</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Take the best care of your pet to have your healthy and happy companion by your side for as long as possible with dry food and fresh meat products directly from our butcheries.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'household ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/household_cosmetics_desktop-3c87cae745346e63d4c83d5d932ddde5ac5c0a8a2bcc2e0a9b172314c8afc526.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Your online drug store</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Whether you need cleaning supplies, some relaxing bath foam or sanitary products - we got you covered with a large eco-friendly range.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'gifts ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/gifts_sets_desktop-382574cc1f218cad8564645d8311b5ec78da3f13d01d5fdb74ffb6a2c8ce3e3d.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white text-center">Beautiful gift sets & delicious presents</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Discover hand-picked presents, carefully chosen gift sets and other great products to spread joy.</p>
          </div> 
        ) : null
      ) : searchParams.get("search")?.toLowerCase() == 'flowers ' ? (
        imgActive ? (
          <div className="relative w-[100vw] flex justify-center flex-col items-center h-[222px] bg-no-repeat bg-cover bg-[url(https://d23qaq2ahooeph.cloudfront.net/assets/components/category_header_component/flowers_gardening_desktop-498b53234a469273cabfbccce6611eb434f0867cb950be8fc58e61690299a6b9.png)]">
            <button onClick={() => setImgActive(false)} className="text-white absolute top-[10px] right-[10px]"><CloseOutlined /></button>
            <p className="text-[21px] sm:text-[32px] font-bold text-white">Sustainable flowers & gardening</p>
            <p className="text-[16px] sm:text-[17px] max-w-[500px] w-[100%] text-center text-white">Find the most sustainable flower bouquets in Switzerland, freshly tied for you in our very own flower shop next to potted plants and everything else to make your garden bloom.</p>
          </div> 
        ) : null
      ) : (
        <div className="asd"></div>
      )}
      <div className={`container flex flex-col md:flex-row justify-center gap-5 ${cart?.length > 0 ? 'xl:pr-[100px]' : ''}`}>
        <button onClick={() => setOpen(!open)} className={`sm:hidden text-white rounded-full z-[1000000000] fixed bottom-[20px] right-[20px] w-[48px] h-[48px] ${!open ? "bg-[#F4991A]" : "bg-[#999999]"}`}>{open ? <CaretRightFilled /> : <ControlOutlined />}</button>
        <div className={`overflow-y-auto fixed h-[100vh] sm:h-[auto] w-[100vw] sm:w-[auto] z-[100000000] transition-all bg-[white] sm:z-0 sm:bg-inherit pt-[50px] pb-[50px] sm:pb-0 px-5 sm:px-0 top-0 sm:static filters sm:pt-4 ${!open ? 'right-[-100vw] ' : 'right-[0]'}`}>
        <div className="w-[100%] flex justify-between space-x-3 col-span-3 sm:hidden overflow-auto">
              {itemsSecond.map((item, index) => (
                <p
                  key={index}
                  onClick={() => toggleActive(index)}
                  className={`cursor-pointer text-[11px] font-bold rounded-2xl uppercase border p-2 ${
                    activeIndices.includes(index) ? 'bg-[#F4991A] text-[white] border-[#F4991A]' : 'text-black bg-white border-black'
                  }`}
                >
                  {item}
                </p>
              ))}
          </div>
          <div className="sm:hidden mt-[10px] mb-[20px]">
            <p className="text-[14px] font-bold">Ergebnisse filtern</p>
            <Divider style={{ margin: "1px" }}/>
          </div>
          {searchParams.get("search")?.toLowerCase() == 'fruits ' ? (
                <div className=" z-[100000000000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="group-hover:sm:flex hidden absolute p-3 bg-[#f3f0ec] top-[53%] left-[23%] z-[1000000000000] w-[200px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Fruits & vegetables</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Vegetables [156]</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Sausage & charcuterie [365]</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Onions, garlic & herbs [35]</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Fruits [71]</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Nuts [2]</a>
                  <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Asia Corner [37]</a>
                  {/* <a href="/farm-shop?search=Fruits%20&%20vegetables" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white"></a> */}
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'butchery ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Butchery & fish market</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Nose to tail [26]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Fresh meat [484]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Oven- & pan- ready [109]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Mushrooms [26]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Edible Insects [6]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Fish & seafood [243]</a>
                  <a href="/farm-shop?search=Butchery%20&%20fish%20market" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Meat alternatives [113]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'milk, cheese ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Milk, cheese & eggs</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'ready meals' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Ready meals</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Pan- & oven-ready [88]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Birchermüesli [4]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Fresh soups [9]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Ready-made salads [24]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Fresh pasta [23]</a>
                  <a href="/farm-shop?search=Ready%20meals" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Antipasti [27]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'bakery ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Bakery & confectionery</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Bread & braided bread [81]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Buns & croissants [82]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Sandwiches & pâtisseries salées [40]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cakes & tortes [24]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Sweet pastries & sweet pies [55]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Pâtisserie [10]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Chocolaterie [39]</a>
                  <a href="/farm-shop?search=Bakery%20&%20confectionery" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Prepared dough & tortillas [15]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'pantry' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Pantry</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Staple food [349]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Preserves & canned food [272]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Sauces & dressings [226]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Soups [26]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Bouillons & spices [274]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Vinegar & oil [116]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Baking ingredients [61]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Muesli & cereals [85]</a>
                  <a href="/farm-shop?search=Pantry" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Crisps & snacks [345]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'frozen' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Frozen</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Frozen" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'drinks' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Drinks</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Drinks" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'wine cellar' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Wine cellar</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Wine%20cellar" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'baby ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Baby & child</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Baby%20&%20child" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'pet supplies' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Pet supplies</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Pet%20supplies" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'household ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Household & cosmetics</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Household%20&%20cosmetics" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'gifts ' ? (
                <div className="relative z-[10000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Gifts & sets</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Gifts%20&%20sets" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : searchParams.get("search")?.toLowerCase() == 'flowers ' ? (
                <div className="relative z-[1000000] flex flex-col">
                  <div className="group text-[#333333] transition-[color_.2s_ease-out] flex w-[100%] justify-between cursor-pointer list-none text-sm hover:text-[#F4991A]">
                    <a href="/farm-shop" className="font-bold p-[8px_5px_8px_5px]">Market</a>
                    <CaretDownOutlined />
                    <div className="hidden group-hover:flex absolute p-3 bg-[#f3f0ec] top-0 z-[100000] w-[200px] right-[-150px] flex-col gap-3">
                      <a href="/farm-shop?search=Fruits%20&%20vegetables">Fruits & vegetables</a>
                      <a href="/farm-shop?search=Butchery%20&%20fish%20market">Butchery & fish market</a>
                      <a href="/farm-shop?search=Milk,%20cheese%20&%20eggs">Milk, cheese & eggs</a>
                      <a href="/farm-shop?search=Bakery%20&%20confectionery">Bakery & confectionery</a>
                      <a href="/farm-shop?search=Ready%20meals">Ready meals</a>
                      <a href="/farm-shop?search=Pantry">Pantry</a>
                      <a href="/farm-shop?search=Frozen">Frozen</a>
                      <a href="/farm-shop?search=Drinks">Drinks</a>
                      <a href="/farm-shop?search=Wine%20cellar">Wine cellar</a>
                      <a href="/farm-shop?search=Baby%20&%20child">Baby & child</a>
                      <a href="/farm-shop?search=Pet%20supplies">Pet supplies</a>
                      <a href="/farm-shop?search=Household%20&%20cosmetics">Household & cosmetics</a>
                      <a href="/farm-shop?search=Gifts%20&%20sets">Gifts & sets</a>
                      <a href="/farm-shop?search=Flowers%20&%20gardening">Flowers & gardening</a>
                    </div>
                  </div>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] font-bold transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:text-[#F4991A]">Flowers & gardening</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cheese counter [317]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk [19]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Cream [19]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Milk drinks [26]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Butter & margarine [36]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Yoghurt & curd [121]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Desserts [10]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">Eggs [11]</a>
                  <a href="/farm-shop?search=Flowers%20&%20gardening" className="text-[#333333] p-[8px_5px_8px_5px] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white">DEgg substitute products [3]</a>
                </div>
              ) : (
                typeOfProducts.map((type, index) => {
                  // index === 0 && console.log(ty)
                  return (
                    <li
                      key={type}
                      onClick={() => setSearchParams({ search: type })}
                      className=" p-[11px_5px_12px_8px] text-[#333333] transition-[color_.2s_ease-out] cursor-pointer list-none text-sm hover:bg-[#F4991A] hover:text-white"
                    >
                      {type}{" "}
                      <span className="opacity-75">
                        [{typeOfProductsCounts[index]}]
                      </span>
                    </li>
                  );
                })

                ) 
            }
          <Drawer text="Options" list={filterOptions} />
          <Drawer text="Animal Type" list={filtersAnimalTypes} />
          <Drawer text="Life phase" list={["Adult [1]", "Kitten [1]"]} />
          <Drawer text="Country" list={filtersCountries} />
          <Drawer text="Dish" list={["Apero [1]", "Starter [5]"]} />
          <Drawer text="Seasonal" list={["Mother's Day [64]", "Seasonal for you [5]"]} />
          <Drawer text="Season" list={["Grill [303]"]} />
          <Drawer text="Preparation Type" list={["Cold kitchen [1]"]} />
          <Drawer text="Season" list={["Easter [1]"]} />
          <Drawer text="Addition" list={filtersAddition} />
          <Drawer text="Taste" list={filtersTaste} />
          <Drawer text="Milk Type" list={["Cow's milk [2]", "Goat's milk [1]", "Sheep's milk [7]"]} />
          <Drawer text="Taste" list={["Fruit & Aroma [7]", "Nature [1]"]} />
          <Drawer text="Milk Type" list={["Sheep's milk [8]"]} />
          <Drawer text="Sausages" list={["Fried sausages [3]"]} />
          <Drawer text="Milk processing" list={["Raw milk [2]", "Thermised milk [7]"]} />
          <Drawer text="Taste" list={["Insects [4]"]} />
      
          <Drawer text="Region" list={filtersRegions} />
          <Drawer text="Type" list={["Nut & Fruit Bread [3]", "Pretzel pastries [16]", "Sourdough bread [7]"]} />
          <Drawer text="Flour Type" list={["(Original) spelt flour [15]", "White Flour [12]", "Wholemeat flour [1]", "Ruch flour [1]"]} />
          <Drawer text="Grape Variety" list={filtersGrapeVariety} />
          <Drawer text="Country" list={["Switzerland [9]"]} />
          <Drawer text="Rennet" list={["Animal [7]"]} />
          <Drawer text="Recommendable with" list={filtersRecommendable} />
          <Drawer text="Taste" list={["Mild [6]", "Recente [3]"]} />
          <Drawer text="Bottle size" list={["Big bottles [17]", "Small bottles [51]"]} />
          <Drawer text="Price" list={filtersPrice} />
          <Drawer text="Producer" list={filtersProducers} />
        </div>
        <div>
        {searchParams.get("search") ? (
              <p className=" col-span-2 sm:col-span-3 text-[#333333] text-[10px] text-center mt-4">
                Only: <span className="text-[#F4991A]">{searchParams.get("search")}</span>
              </p>
            ) : null}
          <div className="hidden sm:block">
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  handleBg: "white",
                  colorPrimary: "#107433",
                  colorPrimaryHover: "#107433",
                  handleSize: 25,
                },
              },
            }}
            >
            <div className="flex items-centet gap-5 text-[#585858] text-[13px] font-semibold mt-[20px]">
              <div className="flex items-center gap-3">
                <Switch className="w-[50px] h-[30px]" />
                <p>Swiss</p>
              </div>
              <div className="flex items-center gap-3">
                <Switch className="w-[50px] h-[30px]" />
                <p>Bio-certified</p>
              </div>
              <div className="flex items-center gap-3">
                <Switch className="w-[50px] h-[30px]" />
                <p>Vegan</p>
              </div>
              <div className="flex items-center gap-3">
                <Switch className="w-[50px] h-[30px]" />
                <p>Veggie</p>
              </div>
              <div className="group relative flex items-center">
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#F4991A', width: '16px', height: '16px' }}/>
                <div className="absolute left-[-30px] top-[30px] hidden group-hover:block bg-[#107431] rounded-lg text-white px-2 py-1 text-center w-[200px] text-[12px]">
                  <p>Turn Farmy your very own, personalised shopping experience by using our global filters to set your preferences. Find additional filters in the filter menu.</p>
                </div>
              </div>
            </div>
          </ConfigProvider>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3  gap-[20px_15px]">
            {searchParams.get("search") ? (
              <p className=" col-span-2 sm:col-span-3 text-[#333333] text-2xl mt-4">
                {searchParams.get("search")} <span className="text-xs">{displayedProducts.length} PRODUCTS</span>
              </p>
            ) : (
              <p className="col-span-2 text-[#333333] text-2xl mt-4">
                Market <span className="text-xs">705 PRODUCTS</span>
              </p>
            )}
            <div className="flex flex-wrap  d-center justify-center sm:justify-start space-x-3 col-span-2 sm:col-span-3">
              {items.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer flex gap-2 items-center text-[11px] uppercase border-r-2 border-[#585858] pr-3 ${
                    activeIndex === index ? 'text-[#F4991A]' : 'text-[#585858]'
                  }`}
                >
                  {item.img}
                  {item.name}
                  {item.filter ? (
                      <div className="flex gap-2">
                        <CaretUpOutlined />
                        <CaretDownOutlined />
                      </div>
                  ): null}
                </p>
              ))}
            </div>
      
            {displayedProducts.length ? (
              displayedProducts?.map((product, index) => {
                const packaging = product.product_properties.find(
                  (el) => el.name === "packaging"
                );
                return (
                  <div key={product.id} className="h-[335px]" ref={index === displayedProducts.length - 7 ? lastCardRef : null}>
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
        </div>
        {user?.cart ? <div className="hidden xl:block">
          <CartWindow />
        </div> : cart ? <div className="hidden xl:block">
          <CartWindow />
        </div> : null}
      </div>
    </>
  );
};

export default Market;
