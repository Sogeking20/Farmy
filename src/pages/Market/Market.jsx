import { useEffect, useRef, useState, useContext } from "react";
import Product from "../../components/Product/Product";
import { useLang } from "../../Layout";
import { filterOptions, filtersAddition, filtersAnimalTypes, filtersCountries, filtersGrapeVariety, filtersPrice, filtersProducers, filtersRecommendable, filtersRegions, filtersTaste, typeOfProducts, typeOfProductsCounts } from "../../utils/constants";
import { useSearchParams, useLocation } from "react-router-dom";
import { Drawer } from "../../components/Checkbox/Checkbox";
import { Switch, ConfigProvider, Divider } from "antd";
import CartWindow from "../../components/CartWindow/CartWindow";
import { ControlOutlined, MenuOutlined, StarOutlined, CalendarOutlined, FunnelPlotOutlined, InfoCircleOutlined, CaretDownOutlined, CaretUpOutlined, CaretRightFilled } from "@ant-design/icons";
const PRODUCTS_PER_PAGE = 40;
import { useUser } from "../../hooks/useUser";
import { CartContext } from "../../CartContext"; 

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

  const items = [{name:'Relevancy', img: <MenuOutlined />}, {name:'Popular', img: <StarOutlined />}, {name:'New', img: <CalendarOutlined />}, {name:'proximity', img: <FunnelPlotOutlined />}, {name:'CHF', filter: true}, {name:'CHF/100G', filter: true}, {name:'CO2 Saving', img: <InfoCircleOutlined />, filter: true} ];
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

  return (
    <div className="container flex flex-col md:flex-row justify-center gap-5">
      <button onClick={() => setOpen(!open)} className={`sm:hidden text-white rounded-full z-[100000] fixed bottom-[20px] right-[20px] w-[48px] h-[48px] ${!open ? "bg-[#F4991A]" : "bg-[#999999]"}`}>{open ? <CaretRightFilled /> : <ControlOutlined />}</button>
      <div className={`fixed overflow-y-auto h-[100vh] sm:h-[auto] w-[100vw] sm:w-[auto] z-[10000] transition-all bg-[white] sm:z-0 sm:bg-inherit pt-[50px] pb-[50px] sm:pb-0 px-5 sm:px-0 top-0 sm:static filters sm:pt-4 ${!open ? 'right-[-100vw] ' : 'right-[0]'}`}>
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
        {typeOfProducts.map((type, index) => {
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
        })}
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
              <Switch className="w-[50px] h-[30px]" defaultChecked />
              <p>Swiss</p>
            </div>
            <div className="flex items-center gap-3">
              <Switch className="w-[50px] h-[30px]" defaultChecked />
              <p>Bio-certified</p>
            </div>
            <div className="flex items-center gap-3">
              <Switch className="w-[50px] h-[30px]" defaultChecked />
              <p>Vegan</p>
            </div>
            <div className="flex items-center gap-3">
              <Switch className="w-[50px] h-[30px]" defaultChecked />
              <p>Veggie</p>
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
          <div className="flex flex-wrap  d-center  justify-center sm:justify-start space-x-3 col-span-2 sm:col-span-3">
            {items.map((item, index) => (
              <p
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex gap-2 text-[11px] uppercase border-r-2 border-black pr-3 ${
                  activeIndex === index ? 'text-[#F4991A]' : 'text-black'
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
  );
};

export default Market;
