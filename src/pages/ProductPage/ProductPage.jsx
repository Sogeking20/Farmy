import { Divider } from 'antd';
import React, { useState, useEffect } from 'react';
import { useLang } from "../../Layout";
import { useParams } from "react-router-dom";
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';

export default function ProductPage() {
  const [activeText, setActiveText] = useState(0);
  const [rating, setRating] = useState(0); // Текущее значение рейтинга
  const [hover, setHover] = useState(0); // Временное значение рейтинга при наведении
  const [data, setData] = useState([]);
  const { id } = useParams();
  const user = useUser();

  function onClick(id, name, img, description, priceAfrer) {
    if (!user) {
      setActiveModal(true);
    } else {
      UsersService.addToCart();
    }
  }

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

    // console.log(product.images.lg)

    if (product) {
      return (
            <div className='container w-[100%] lg:flex gap-4'>
              <div className='w-[100%] lg:w-[65%] relative'>
                <div className='w-[100%]'>
                  <img
                    width={'100%'}
                    src={product.images.lg}
                    alt=''
                  />
                  <div className='absolute left-0 top-3 p-2 bg-[#107433] text-white rounded-r-sm font-bold z-10 text-[24px]'>
                    Seasonal
                  </div>
                </div>
                <div className='hidden sm:block w-[100%] mt-[20px]'>
                  <h3 className='text-[20px] text-[#107433] font-bold mb-[10px]'>
                    Product Details
                  </h3>
                  <p className='text-[16px]'>
                    {product.description}
                  </p>
                  <div className='w-[100%] mt-[20px] mb-[60px]'>
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Producer</p>
                        <p>Räss Wildbeeren</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>
                    { product.product_properties.find(item => item.name === "produced_in") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Produced in</p>
                        <p>{product.product_properties.find(item => item.name === "produced_in").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                    
                    { product.product_properties.find(item => item.name === "quality") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Quality / Certification</p>
                        <p>{product.product_properties.find(item => item.name === "quality").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                     { product.product_properties.find(item => item.name === "ingredient") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Ingredients</p>
                        <p>{product.product_properties.find(item => item.name === "ingredient").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                    { product.product_properties.find(item => item.name === "storage") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Storage</p>
                        <p>{product.product_properties.find(item => item.name === "storage").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                    { product.product_properties.find(item => item.name === "packaging") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Packaging Unit</p>
                        <p>{product.product_properties.find(item => item.name === "packaging").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                    { product.product_properties.find(item => item.name === "weight") ? (
                    <div className='w-[100%]'>
                      <div className='w-[100%] flex justify-between text-[16px]'>
                        <p className='font-bold'>Weight</p>
                        <p>{product.product_properties.find(item => item.name === "weight").value}</p>
                      </div>
                      <Divider variant='dotted' className='border-[black] mt-0' />
                    </div>) : (
                      <div className=""></div>
                    )}
                  </div>
                  <div className='w-[100%] flex gap-5'>
                    <div className='w-[50%]'>
                      <h3 className='text-[18px] text-[#107433] mb-[10px]'>
                        Reviews (0)
                      </h3>
                      <div className='w-[100%] flex flex-col gap-2'>
                        <div className='w-[100%] flex justify-between items-center'>
                          <p className='text-[16px] font-semibold'>5 points</p>
                          <div className='w-[70%] flex gap-1 items-center'>
                            <div className='w-[90%] h-[12px] border border-black rounded-2xl overflow-hidden'>
                              <div className='w-[2%] h-[12px] bg-[#F4991A] rounded-l-2xl'></div>
                            </div>
                            <p className='text-[16px]'>(0)</p>
                          </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                          <p className='text-[16px] font-semibold'>5 points</p>
                          <div className='w-[70%] flex gap-1 items-center'>
                            <div className='w-[90%] h-[12px] border border-black rounded-2xl overflow-hidden'>
                              <div className='w-[2%] h-[12px] bg-[#F4991A] rounded-l-2xl'></div>
                            </div>
                            <p className='text-[16px]'>(0)</p>
                          </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                          <p className='text-[16px] font-semibold'>5 points</p>
                          <div className='w-[70%] flex gap-1 items-center'>
                            <div className='w-[90%] h-[12px] border border-black rounded-2xl overflow-hidden'>
                              <div className='w-[2%] h-[12px] bg-[#F4991A] rounded-l-2xl'></div>
                            </div>
                            <p className='text-[16px]'>(0)</p>
                          </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                          <p className='text-[16px] font-semibold'>5 points</p>
                          <div className='w-[70%] flex gap-1 items-center'>
                            <div className='w-[90%] h-[12px] border border-black rounded-2xl overflow-hidden'>
                              <div className='w-[2%] h-[12px] bg-[#F4991A] rounded-l-2xl'></div>
                            </div>
                            <p className='text-[16px]'>(0)</p>
                          </div>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                          <p className='text-[16px] font-semibold'>5 points</p>
                          <div className='w-[70%] flex gap-1 items-center'>
                            <div className='w-[90%] h-[12px] border border-black rounded-2xl overflow-hidden'>
                              <div className='w-[2%] h-[12px] bg-[#F4991A] rounded-l-2xl'></div>
                            </div>
                            <p className='text-[16px]'>(0)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-[50%]'>
                      <h3 className='text-[18px] text-[#107433] mb-[10px]'>
                        Reviews (0)
                      </h3>
                      <div className='flex justify-center items-center'>
                        {[...Array(5)].map((_, index) => {
                          const value = index + 1;
        
                          return (
                            <img
                              key={index}
                              src={
                                value <= (hover || rating)
                                  ? '../../assets/rating-2x-a66687d765ed03d793cef019060c308697e2663c66a73d063349f42be517b02b (1).png'
                                  : '../../assets/rating-2x-a66687d765ed03d793cef019060c308697e2663c66a73d063349f42be517b02b (2).png'
                              }
                              alt={`${value} stars`}
                              className='w-[40px] h-[40px] object-cover object-bottom cursor-pointer transition-transform transform hover:scale-110 bg-no-repeat '
                              onClick={() => setRating(value)}
                              onMouseEnter={() => setHover(value)}
                              onMouseLeave={() => setHover(0)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <h3 className='text-[18px] font-bold text-[#107433]'>
                    {product.name}
                  </h3>
                </div>
              </div>
              <div className='w-[100%] lg:w-[35%]'>
                <h3 className='flex text-[24px] mb-[15px] text-center lg:text-start'>
                  {product.name} also featured in
                </h3>
                <p className='text-[12px] text-[#999999]'>CHF 0.69 / 100g</p>
                <div className='w-[100%] flex flex-col items-end'>
                  <p className='text-[16px] mb-[15px] text-[#107433] font-bold'>
                    <span className='relative top-[-5px] text-[12px]'>CHF</span> {product.price}/
                    Piece
                  </p>
                  <button onClick={onClick} className='text-[18px] bg-[#F4991A] text-[white] py-[10px] px-[70px] font-bold mb-[30px]'>
                    Add to cart
                  </button>
                  <p className='text-[12px] text-[#F4991A] cursor-pointer font-semibold'>
                    plus shipping costs
                  </p>
                  <div className='hidden sm:flex gap-2 mt-[15px]'>
                    <span className="w-[20px] h-[20px] bg-no-repeat bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/sprites/rating-ba9f2b327ecb6eaf94aaddafdff772c22fd4dde9c343d3eefee01f5db49f40d4.png')]"></span>
                    <span className="w-[20px] h-[20px] bg-no-repeat bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/sprites/rating-ba9f2b327ecb6eaf94aaddafdff772c22fd4dde9c343d3eefee01f5db49f40d4.png')]"></span>
                    <span className="w-[20px] h-[20px] bg-no-repeat bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/sprites/rating-ba9f2b327ecb6eaf94aaddafdff772c22fd4dde9c343d3eefee01f5db49f40d4.png')]"></span>
                    <span className="w-[20px] h-[20px] bg-no-repeat bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/sprites/rating-ba9f2b327ecb6eaf94aaddafdff772c22fd4dde9c343d3eefee01f5db49f40d4.png')]"></span>
                    <span className="w-[20px] h-[20px] bg-no-repeat bg-[url('https://d23qaq2ahooeph.cloudfront.net/assets/sprites/rating-ba9f2b327ecb6eaf94aaddafdff772c22fd4dde9c343d3eefee01f5db49f40d4.png')]"></span>
                  </div>
                  <img
                    className='mt-[15px] w-[40px] h-[40px]'
                    src='https://www.farmy.ch/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTZDQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f3b5983d3f09aa6d4bc0e67423b7ad6cf7616f7a/ch_bio.png'
                    alt=''
                  />
                </div>
                <div className='w-[100%] flex items-center text-center'>
                  <div
                    onClick={() => setActiveText(!activeText)}
                    className='text-[16px] cursor-pointer text-center w-[100%] group'
                  >
                    <p className='font-bold text-[#F4991A] group-hover:text-[#A54C00]'>
                      Cut by hand
                    </p>
                    <p className='font-bold text-[#F4991A] group-hover:text-[#A54C00]'>
                      ( Max surcharge per Stück CHF 137 )
                    </p>
                    <p
                      style={activeText ? { display: 'block' } : { display: 'none' }}
                      className='mt-[10px]'
                    >
                      This product is{' '}
                      <strong>cut by the vendor specially for your order</strong> and
                      the exact weight fo the piece might present slight variations. We
                      charge you a little more initially and will return the remaining
                      to your Farmy Credit account as soon as the actual piece is
                      weighted.
                    </p>
                  </div>
                </div>
                <Divider className='border-black' />
                <div className='w-[100%] flex flex-col gap-4 mb-[15px]'>
                  <h3 className='text-[18px] text-[#107C10]'>Producer</h3>
                  <img
                    width={'100%'}
                    src={product.supplier.image}
                    alt=''
                  />
                  <p className='text-[18px] font-bold'>{product.supplier.name}</p>
                  <p className='text-[16px] font-semibold'>Located in</p>
                  <p className='flex gap-2 text-[18px] text-[#999999] font-bold'>
                    Benken{' '}
                    <img
                      width={'20px'}
                      height={'20px'}
                      src='https://www.farmy.ch/flags/v2/50/arm-zurich.png'
                      alt=''
                    />
                  </p>
                  <p className='text-[16px] font-semibold'>
                    {product.supplier.short_description}
                  </p>
                </div>
                <a
                  className='flex justify-end text-[#F4991A] text-[15px] font-semibold'
                  href={product.supplier.path}
                >
                  More
                </a>
                <Divider className='border-black' />
              </div>
            </div>
      );

    }

}
