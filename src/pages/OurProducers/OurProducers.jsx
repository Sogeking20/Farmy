import { Divider, Radio } from "antd"
import ProducerCard from "../../components/ProducerCard/ProducerCard"
import { useEffect, useRef, useState } from "react";
import { useLang } from "../../Layout";
import { useSearchParams } from "react-router-dom";
import Offer from "../Offer/Offer"
import { Link } from 'react-router-dom';;

const PRODUCTS_PER_PAGE = 40;

export default function OurProducers() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [page, setPage] = useState(1);
    const lastCardRef = useRef(null);
  
    const { lang } = useLang();
    const generateLang = () => {
      if (lang === "en") {
        return "../../../EN_prod_out.json";
      }
      if (lang === "fr") {
        return "../../../FR_prod_out.json";
      }
      if (lang === "de") {
        return "../../../DE_prod_out.json";
      }
    };

    console.log(generateLang());

    useEffect(() => {
        fetch(generateLang())  // Путь к вашему JSON файлу
          .then(response => response.json())
          .then(jsonData => {
            setData(jsonData)
            console.log(data[0]);
          })
          .catch(error => console.error('Ошибка при загрузке данных:', error));
        }, []);
  
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
        <div className="max-w-[960px] w-[100%] mx-auto text-center px-3">
            <h3 className="text-[24px] font-bold">Our Producers</h3>
            <Divider style={{borderColor: 'black', marginTop: '20px'}}/>
            <div className="w-[100%] flex justify-between">
                <Radio.Group
                className="w-[100%] grid grid-cols-3 lg:grid-cols-6 gap-5"
                defaultValue="a"
                >
                {['A-C', 'D-F', 'G-L', 'M-Q', 'R-V', 'V-Z'].map((city, index) => (
                    <Radio.Button
                    key={index}
                    value={city.toLowerCase()}
                    style={{
                        border: 'none',
                        backgroundColor: 'white',
                        textAlign: 'center',
                        padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        fontSize: '20px'
                    }}
                    >
                    {city}
                    </Radio.Button>
                ))}
                <style jsx>{`
                    .ant-radio-button-wrapper {
                    color: black; /* Исходный цвет текста */
                    border-left: none !important; /* Убираем левый бордер */
                    border-right: none !important; /* Убираем правый бордер */
                    }

                    .ant-radio-button-wrapper:first-child {
                    border-left: none !important; /* Убираем левый бордер у первого элемента */
                    }

                    .ant-radio-button-wrapper:last-child {
                    border-right: none !important; /* Убираем правый бордер у последнего элемента */
                    }

                    .ant-radio-button-wrapper:hover {
                    color: #ff8c00; /* Оранжевый цвет текста при наведении */
                    }

                    .ant-radio-button-wrapper-checked {
                    color: #ff8c00 !important; /* Оранжевый цвет текста в активном состоянии */
                    }
                `}</style>
                </Radio.Group>
            </div>
            <Divider style={{borderColor: 'black',  marginBottom: '20px'}}/>
            <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-[100px]">
            {displayedProducts.length ? (
          displayedProducts?.map((product, index) => {

            return (
              <Link to={`/${product.products[0].sup_url}`} ref={index === displayedProducts.length - 7 ? lastCardRef : null}>
                <ProducerCard
                  name={product.products[0].supplier}
                  url={product.products[0].sup_url}
                />
              </Link>
            );
          })
        ) : (
          <></>
        )}
            </div>
        </div>
    )
}