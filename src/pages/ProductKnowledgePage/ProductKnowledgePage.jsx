import { useParams, Link } from 'react-router-dom';
import { Divider } from 'antd';
import { useLang } from "../../Layout";
import { useEffect, useState } from 'react';

export default function ProductKnowledgePage() {
    const { letter } = useParams();
    const { lang } = useLang();
    const [data, setData] = useState([]);
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
      fetch(generateLang())  // Путь к вашему JSON файлу
        .then(response => response.json())
        .then(jsonData => {
          setData(jsonData)
          console.log(data);
        })
        .catch(error => console.error('Ошибка при загрузке данных:', error));
      }, []);

      const product = data.filter(item => item.name.toLowerCase().startsWith(letter.toLowerCase()));
      
    return (
        <div className="text-center flex flex-col items-center">
            <p className="text-[32px] font-bold text-[#585858]">Product knowledge with "{letter.toLocaleUpperCase()}"</p>
            <Divider style={{ minWidth: '0', width: '300px', borderColor: 'black' }}/>
            <div className="mt-[50px]">
            {product.length ? (
          product?.map((product, index) => {

            return (
              <div key={index}>
                <Link to={`/product/${product.id}`} className='text-[#F4991A] text-[32px]'>
                    {product.name}
                </Link>
              </div>
            );
          })
        ) : (
          <></>
        )}
            </div>
        </div>
    )
}