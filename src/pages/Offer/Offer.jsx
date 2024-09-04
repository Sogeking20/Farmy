import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FAQItem from "../../components/FaqItem/FAQ";

import "./Offer.css";
import Product from "../../components/Product/Product";

function Offer() {
  return (
    <div className="px-16">
      <div className="offer flex justify-between gap-4">
        <div className="w-[30%]">
          <p className="font-bold text-[17px] mb-4">1701 Franciacorta</p>
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
              src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/82993/large/1701_franciacorta-1.jpg?1640725998"
              alt=""
            />
            <img
              src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/82993/large/1701_franciacorta-1.jpg?1640725998"
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
        <div className="w-[70%]">
          <h1 className="title text-[25px] text-[#333]">
            All products from 1701 Franciacorta
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
            <div className="product">
              <Product
                img={
                  "https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421"
                }
                name={'Prosecco Extra Dry "Nudo" DOC, 75cl'}
                priceBefore={14.5}
                priceAfrer={11.9}
                description={"Cantina Colli del Soligo"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
