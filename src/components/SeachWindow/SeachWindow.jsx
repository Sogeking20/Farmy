import { useState, useEffect } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'; 
import { useNavigate } from 'react-router-dom';

export default function SeachWindow({open, close}) {
    const [scrollY, setScrollY] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSearch = () => {
      if (searchTerm.trim() !== '') {
        // Навигация на страницу с результатами поиска с передачей поискового запроса через параметры
        navigate(`/farm-shop/?query=${searchTerm}`);
      }
    };
  

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Изменяем размер элемента в зависимости от scrollY
    const getSizeClass = () => {
      if (scrollY < 15) {
        return 'h-[140px]'; // начальный размер
      } else{
        return 'h-[100px]'; // уменьшается при скролле
      }
    };
  

    return(
        <div className={`fixed w-[100vw] top-0 h-[100vh] bg-[rgba(100,100,100,0.5)] z-[100000] ${open ? "block" : "hidden"} `}>
            <div className={`w-[100%] transition-all bg-white ${getSizeClass()}`}>
                <div className={`container w-[100%] transition-all bg-white flex items-center justify-between ${getSizeClass()}`}>
                    <img className="w-[50px] h-[64px]" src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_2021-a4bb04c0a7b06ab668a55ef622c39f24d2823a490ffcc37a18ed1eced70df81c.svg" alt="" />
                    <div className="w-[95%] flex gap-3 items-center justify-end">
                        <div className="w-[80%] flex relative flex-col items-center">
                            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-[90%] border p-2 rounded-md border-[#6F6F6F]' type="text" placeholder="'Smoothie', 'Vegan', 'Fruit' or 'Tomatoes'? .."/>
                            <button onClick={handleSearch} className='absolute right-[45px] top-[-17px] w-[200px] h-[37px] mt-5 text-[18px] font-bold bg-[#F4991A] rounded-md text-white'><SearchOutlined /> Search</button>
                        </div>
                        <button onClick={close} className="w-[150px] h-[38px] text-[18px] font-bold bg-[#EEEEEE] text-[#6F6F6F] border border-[#6F6F6F] rounded-md"><CloseOutlined /> Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}