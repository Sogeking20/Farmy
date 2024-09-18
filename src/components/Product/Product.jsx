import { HeartOutlined, PlusOutlined, MinusOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState, useContext, useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import PostcodeModal from '../PostcodeModal/PostcodeModal';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import Item from 'antd/es/list/Item';

export default function Product({
  img,
  name,
  priceBefore,
  priceAfrer,
  description,
  id
}) {
  const user = useUser();

  const { cart } = useContext(CartContext);

  const [offerPrice, setOfferPrice] = useState('');

  useEffect(() => {
    const arr = ['Seasonal', '', '-20%'];
    const rand = Math.floor(Math.random() * arr.length);
    setOfferPrice(arr[rand]); // Обновляем состояние внутри useEffect
  }, []);

  const { addToCart, minus, addToFavorites, favorites } = useContext(CartContext);


  const [activeModal, setActiveModal] = useState(false);

  function onClick() {
    const newItem = { name: name, description: description, img: img, price: priceAfrer, id: id, num: 1 };
    console.log(newItem)
    addToCart(newItem);
  }

  const prevUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  return (
    <div className='min-w-[160px] shadow-md max-w-[270px] h-full border'>
      <div className='relative h-[55%] w-[100%]'>
        <div className='group relative w-[100%] h-[100%]'>
          <img className='w-[100%] h-[100%]' src={img} alt='' />
          <div className='absolute w-[100%] h-[100%] top-0 bg-[#000000] transition-all opacity-0 group-hover:opacity-100 bg-opacity-50'>
            <div className='flex flex-col w-[100%] h-[100%] gap-0 items-center justify-center text-white opacity-100 py-3'>

              {!cart?.find(item => item.name === name) ? (
                <>
                  <p className='text-[23px]'>Only</p>
                  <p className='text-[28px]'>CHR 11.90</p>
                  <Link to={`/product/${id}`} className='underline text-[16px]'>
                    View product
                  </Link>
                  <Button
                  onClick={onClick}
                  icon={<PlusOutlined />}
                  style={{
                    width: '80%',
                    backgroundColor: '#F4991A',
                    borderColor: '#F4991A',
                    fontSize: '19px',
                    opacity: '1',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                                >
                  Add to cart
                  </Button>
                </>) : (
                <>
                  <p className='text-[28px]'>
                    {cart.map((item) => {
                      if (item.name === name) {
                        return item.num
                      }
                    })} Piece
                  </p>
                  <p className='text-[23px]'>In Cart</p>
                  <Link to={`/product/${id}`} className='underline text-[16px]'>
                    View product
                  </Link>
                  
                  <div className='w-[100%] flex justify-between gap-3 px-5'>
                    <button onClick={() => minus({name: name})} className='w-[110px] text-black bg-white h-[45px] border border-[#999999]'><MinusOutlined /></button>
                    <button onClick={onClick} className='w-[110px] bg-[#F4991A] h-[45px] border border-[#F4991A]'><PlusOutlined /></button>
                  </div>
                </>
              )
            }
            </div>
          </div>
        </div>
        
        {(offerPrice === '') ? (
          <div className=""></div>
        ) : (
          <div className='absolute left-0 top-3 p-2 bg-[#F4991A] text-white rounded-r-sm font-bold z-10'>
            {offerPrice}
          </div>

        )
        }
        <div onClick={() => addToFavorites({ name: name, description: description, img: img, price: priceAfrer, id: id})} className='absolute right-3 top-3'>
          { favorites?.find(item => item.name === name) ? (<HeartFilled style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} />) : (<HeartOutlined style={{ color: '#999999', fontSize: '25px', cursor: 'pointer' }} />) }
          {/* <HeartOutlined
            className={`${favorites?.find(item => item.name === name) ? 'bg-[red]' : 'bg-[#999999]'}`}
            style={{ color: '#999999', fontSize: '25px', cursor: 'pointer' }}
          /> */}
        </div>
      </div>
      <div className='flex flex-col h-[45%] justify-between py-1 px-3'>
        <p className='text-[18px] leading-[1.2rem]'>{name}</p>
        <div className=''>
          <p className='text-[14px] text-[#8F877F]'>{description}</p>
          <div className='flex gap-3 items-center justify-end mt-[10px]'>
            {(offerPrice === '-20%') ? (<div className='relative text-[12px] text-[#999999]'>
              <span className='relative top-[-5px] text-[7px] mr-[2px]'>
                CHR
              </span>
              {priceBefore}{priceAfrer + 10}
              <span className='absolute w-[48px] h-[1px] bg-[#F4991A] bottom-2.5 left-0 -rotate-[18deg]'></span>
            </div>) : (<div></div>)}
            <div className={`relative text-[16px] ${(offerPrice === '-20%') ? 'text-[#F4991A]' : 'text-[#107431]'}`}>
              <span className='relative top-[-5px] text-[12px] mr-[2px]'>
                CHR
              </span>
              {priceAfrer}
            </div>
          </div>
        </div>
      </div>
      <PostcodeModal
        isModalOpen={activeModal === true}
        onClose={() => setActiveModal(false)}
      />
    </div>
  );
}
