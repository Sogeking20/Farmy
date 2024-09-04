import { HeartOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import PostcodeModal from '../PostcodeModal/PostcodeModal';

export default function Product({
  img,
  name,
  priceBefore,
  priceAfrer,
  description,
}) {
  const user = useUser();

  const [activeModal, setActiveModal] = useState(false);

  function onClick() {
    if (!user) {
      setActiveModal(true);
    } else {
      UsersService.addToCart(name);
    }
  }

  return (
    <div className='min-w-[160px] max-w-[270px] min-h-[340px] border'>
      <div className='relative h-[55%] w-[100%]'>
        <div className='group relative w-[100%] h-[100%]'>
          <img className='w-[100%] h-[100%]' src={img} alt='' />
          <div className='absolute w-[100%] h-[100%] top-0 bg-[#000000] transition-all opacity-0 group-hover:opacity-100 bg-opacity-50'>
            <div className='flex flex-col w-[100%] h-[100%] gap-3 items-center justify-center text-white opacity-100'>
              <p className='text-[23px]'>Only</p>
              <p className='text-[28px]'>CHR 11.90</p>
              <a href='#' className='underline text-[16px]'>
                View product
              </a>
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
            </div>
          </div>
        </div>
        <div className='absolute left-0 top-3 p-2 bg-[#F4991A] text-white rounded-r-sm font-bold z-10'>
          - 20 %
        </div>
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
            <div className='relative text-[12px] text-[#999999]'>
              <span className='relative top-[-5px] text-[7px] mr-[2px]'>
                CHR
              </span>
              {priceBefore}{' '}
              <span className='absolute w-[48px] h-[1px] bg-[#F4991A] bottom-2.5 left-0 -rotate-[18deg]'></span>
            </div>
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
