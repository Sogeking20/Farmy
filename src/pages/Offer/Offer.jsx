import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FAQItem from "../../components/FaqItem/FAQ";
import { useLang } from "../../Layout";
import { useUser } from '../../hooks/useUser';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Offer.css";
import Product from "../../components/Product/Product";

function Offer() {
  const { id } = useParams();
  console.log(id)
  
  const { lang } = useLang();
  const generateLang = () => {
    if (lang === "en") {
      return "/EN_prod_out.json";
    }
    if (lang === "fr") {
      return "/FR_prod_out.json";
    }
    if (lang === "de") {
      return "/DE_prod_out.json";
    }
  };
  
  const [data, setData] = useState([]);
  
  useEffect(() => {

    fetch(generateLang())  // Путь к вашему JSON файлу
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData)
        console.log(data[id-1]);
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, []);
    
    const product = data[id-1]
    console.log(product)

  if (product){

    return (
      <div className="px-16">
        <div className="offer md:flex justify-between gap-4">
          <div className="md:w-[30%] mb-10">
            <p className="font-bold text-[17px] mb-4">{product.products[0].supplier}</p>
            <p className="flex items-center gap-2 mb-4">
              Located in Cazzago San Martino, Italy{" "}
              <img
                width={25}
                src="https://www.farmy.ch/flags/v2/50/arm-italy.png"
                alt=""
              />
            </p>
            <Carousel>
              <img
                src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/2671/thumb/New_Producers_500x500.jpg?1710520603"
                alt=""
              />
              <img
                src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/2671/thumb/New_Producers_500x500.jpg?1710520603"
                alt=""
              />
            </Carousel>
            <p className="text-[14px] ">
              There is something that goes beyond scientific definitions. It is a
              recovery of the ability of observation and sensitivity that had the
              ancient farmers who followed the phases of the moon and knew how to
              pick up certain signals of the earth, plants and animals. The winery
              1701 work to increase and maintain the fertility of the soil, taking
              care of its fundamental factor, humus. The deep connection with
              nature and the complete respect for its rhythms lead the winery 1701
              to avoid the use of synthetic fertilizers and chemical pesticides.
            </p>
            <p className="flex text-[14px] items-center gap-4 text-[#F4991A] my-4 mx-0">
              <img
                width="18"
                //   height="16"
                src="https://img.icons8.com/material-outlined/96/monitor.png"
                alt="monitor"
              />
              Visit Website
            </p>
            <hr />
            <FAQItem question={"Kategorie"} answers={["Wines[1]"]} />
            <hr />
            <FAQItem
              question={"Options"}
              answers={[
                "Wines[1]",
                "Gluten-free[1]",
                "Lactose-free[1]",
                "Vegan[1]",
                "Vegetarian[1]",
              ]}
            />
            <FAQItem question={"Country"} answers={["Italy[1]"]} />
            <FAQItem question={"Region"} answers={["Lombardie[1]"]} />
            <FAQItem
              question={"Grape Variety"}
              answers={[
                "Chardonnay / Morillon[1]",
                "Pinot Blanc[1]",
                "Pinot Noir[1]",
              ]}
            />
          </div>
          <div className="md:w-[70%] mb-10">
            <h1 className="title text-[25px] text-[#333]">
              All products from {product.products[0].supplier}
            </h1>
            <div id="product-filter-sorting">
              <span className="sorting-modes flex gap-2 flex-wrap">
                <div className="sorting-mode flex gap-2">
                  <a href="#" className="flex gap-2 items-start">
                    <i className="fa fa-bars"></i>
                    <span
                      translate="sorting.modes.relevancy"
                      className="ng-scope"
                    >
                      Relevancy
                    </span>
                  </a>
                </div>
                &nbsp;|&nbsp;
                <div className="sorting-mode">
                  <a href="#">
                    <i className="fa fa-star-empty"></i>
                    <span
                      translate="sorting.modes.popularity"
                      className="ng-scope"
                    >
                      Popular
                    </span>
                  </a>
                </div>
                &nbsp;|&nbsp;
                <div className="sorting-mode">
                  <a className="translate-cloak" href="#">
                    <i className="fa fa-calendar"></i>
                    <span translate="sorting.modes.new" className="ng-scope">
                      New
                    </span>
                  </a>
                </div>
                &nbsp;|&nbsp;
                <div className="sorting-mode">
                  <a className="translate-cloak" href="#">
                    <i
                      className="fa fa-location"
                      style={{ marginLeft: "-4px" }}
                    ></i>
                    <span
                      translate="sorting.modes.proximity"
                      className="ng-scope"
                    >
                      proximity
                    </span>
                  </a>
                </div>
                &nbsp;|&nbsp;
                <div className="sorting-mode flex gap-2">
                  <a className="filter-name" href="#">
                    <span translate="sorting.modes.price" className="ng-scope">
                      CHF
                    </span>
                  </a>
                  <div className="arrows flex gap-2">
                    <a href="#">
                      <i className="fa fa-caret-down"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-caret-up"></i>
                    </a>
                  </div>
                </div>
                &nbsp;|&nbsp;
                <div className="sorting-mode flex gap-2">
                  <a href="#">
                    <span
                      translate="sorting.modes.price_per_100"
                      className="ng-scope"
                    >
                      CHF/100g
                    </span>
                  </a>
                  <div className="arrows flex gap-2">
                    <a href="#">
                      <i className="fa fa-caret-down"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-caret-up"></i>
                    </a>
                  </div>
                </div>
              </span>
              {/* <div className="layout-modes">
                <div className="sorting-mode products-list-mode-switch">
                  <a className="active">
                    <i className="fa-th-large"></i>
                  </a>
                  <a>
                    <i className="fa-bars"></i>
                  </a>
                </div>
              </div> */}
              <div className="clearfix"></div>
            </div>
            <div className="offer-products">
              <div className="product grid grid-cols-3 gap-3 mt-7">
                {product.products.map((product) => (
                  <Product
                    key={product.id}
                    img={product.image}
                    name={product.name}
                    priceBefore={product.price + 10}
                    priceAfrer={product.price}
                    id={1}
                    description={"Cantina Colli del Soligo"}
                  />
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Offer;
