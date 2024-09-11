import { HeartOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState, useContext } from 'react';
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import PostcodeModal from '../PostcodeModal/PostcodeModal';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

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


  const arr = ['Seasonal', '', '-20%']

  const rand = Math.floor(Math.random() * arr.length);
  const offerPrice = arr[rand];
  const { addToCart } = useContext(CartContext);


  const [activeModal, setActiveModal] = useState(false);

  function onClick() {
    if (!user) {
      const newItem = { name: name, description: description, img: img, price: priceAfrer, id: id };
      addToCart(newItem);
      // setActiveModal(true);
    } else {
      // console.log(name, description );
      UsersService.addToCart(name, description, img, priceAfrer, id);
      // console.log(img);
    }
  }

  const prevUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  return (
    <div className='min-w-[160px] max-w-[270px] h-full border'>
      <div className='relative h-[55%] w-[100%]'>
        <div className='group relative w-[100%] h-[100%]'>
          <img className='w-[100%] h-[100%]' src={img} alt='' />
          <div className='absolute w-[100%] h-[100%] top-0 bg-[#000000] transition-all opacity-0 group-hover:opacity-100 bg-opacity-50'>
            <div className='flex flex-col w-[100%] h-[100%] gap-3 items-center justify-center text-white opacity-100'>
              <p className='text-[23px]'>Only</p>
              <p className='text-[28px]'>CHR 11.90</p>
              <Link to={`/product/${id}`} className='underline text-[16px]'>
                View product
              </Link>
              {user?.cart ? (!user.cart.includes(name) && !cart?.includes(id) ? (
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
              </Button>) : (
                <div className="w-[100%] flex gap-3 justify-center text-black">
                  <button className='w-[110px] bg-white h-[45px] border border-[#999999]'><MinusOutlined /></button>
                  <button className='w-[110px] bg-[#F4991A] h-[45px] border border-[#999999]'><PlusOutlined /></button>
                </div>
              )) : (
                
                <Button
                onClick={onClick}
                icon={<PlusOutlined />}
                s
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
        <div className='absolute right-3 top-3'>
          <HeartOutlined
            style={{ color: '#999999', fontSize: '25px', cursor: 'pointer' }}
          />
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
            <div className='relative text-[16px] text-[#F4991A]'>
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
