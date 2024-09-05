import { useEffect, useRef, useState } from "react";
import Product from "../../components/Product/Product";
import { useLang } from "../../Layout";
import { filterOptions, filtersAddition, filtersAnimalTypes, filtersCountries, filtersGrapeVariety, filtersPrice, filtersProducers, filtersRecommendable, filtersRegions, filtersTaste, typeOfProducts, typeOfProductsCounts } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { Drawer } from "../../components/Checkbox/Checkbox";

const PRODUCTS_PER_PAGE = 40;

const Market = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const lastCardRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    if (searchParams.get("search")) {
      setDisplayedProducts(
        data.filter((product) =>
          product.category[0]?.name
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        )
      );
    } else {
      setDisplayedProducts(data);
    }
  }, [searchParams]);

  const { lang } = useLang();
  const generateLang = () => {
    if (lang === "en") {
      return "../../../EN_out.json";
    }
    if (lang === "fr") {
      return "../../../FR_out.json";
    }
    if (lang === "de") {
      return "../../../DE_out.json";
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
    <div className="flex justify-center gap-5">
      <div className="filters pt-4">
        {typeOfProducts.map((type, index) => {
          // index === 0 && console.log(ty)
          return (
            <li
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

      <div className=" grid grid-cols-3  gap-[20px_15px]">
        {searchParams.get("search") && (
          <p className=" col-span-3 text-[#333333] text-2xl mt-4">
            {searchParams.get("search")} <span className="text-xs">{displayedProducts.length} PRODUCTS</span>
          </p>
        )}
        {displayedProducts.length ? (
          displayedProducts?.map((product, index) => {
            const packaging = product.product_properties.find(
              (el) => el.name === "packaging"
            );

            return (
              <div className="h-[335px]" ref={index === displayedProducts.length - 7 ? lastCardRef : null}>
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
  );
};

export default Market;
