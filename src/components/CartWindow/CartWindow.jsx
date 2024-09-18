import { Alert, Divider } from "antd"
import { Select } from "antd"
import React,{ useState, useEffect, useContext } from "react"
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import { CartContext } from '../../CartContext';

export default function CartWindow() {
  const user = useUser();
  const { cart, endPrice, setEndPrice, clearCart, addToCart, deleteFromCart } = useContext(CartContext);
//   console.log(user)
  const [scrollY, setScrollY] = useState(0);

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
      return 'top-[200px] max-h-[75vh]'; // начальный размер
    } else{
      return 'top-[155px] max-h-[80vh]'; // уменьшается при скролле
    }
  };

  // Локальный стейт для товаров
  let [totalPrice, setTotalPrice] = useState(8.69); // Храним общую цену
  const [quantities, setQuantities] = useState({}); // Храним количество каждого товара

  useEffect(() => {
      if (user && user.cart) {
          const total = user.cart.reduce((acc, itemName) => {
              const quantity = quantities[itemName[0]] || 1;
              return acc + itemName[3] * quantity;
          }, 0);
          setTotalPrice(total);
      }
  }, [user.cart, quantities]);

  return (
      <div className={`${cart?.length > 0 ? "block" : cart?.length > 0 ? "block" : "hidden"} p-1 no-scrollbar rounded-[5px] h-[100%] fixed transition-all overflow-y-scroll w-[222px] right-[10px] text-[10px] ${getSizeClass()}`}>
          <a href='/cart'>
            <button className={`shadow-text w-[100%] h-[30px] border bg-[#F4991A] border-[#F4991A] text-white text-[16px] mb-1`}>
                Cart {Number((endPrice).toFixed(2))}
            </button>
          </a>
          <Alert
              className="rounded-none p-2 items-center"
              description="You need a minimum order value of 79 (without adjustments) to place your order."
              type="warning"
              showIcon
          />
          <p className="text-center font-bold my-3">Adjustments</p>
          <Divider className="my-1" />
          <div className="flex w-[100%] justify-between pr-3">
              <p>Small order surcharge</p>
              <p className="relative">CHF 7 <span className="text-[7px] absolute top-[-3px]">90</span></p>
          </div>
          <Divider className="my-1" />
          <div className="flex w-[100%] justify-between pr-3">
              <p>Cut by hand</p>
              <p className="relative">CHF 0 <span className="text-[7px] absolute top-[-3px]">79</span></p>
          </div>
          <Divider className="my-1" />
          <div className="bg-[rgb(223,206,242)] w-[100%] p-3">
              <p className="text-[12px] font-bold">Unlock a world of benefits with Farmy Pass: every order above CHF 159 comes with exclusive rewards!</p>
              <button className="w-[100%] h-[36px] border-2 border-black rounded-xl">Unlock now</button>
          </div>
            <p className="font-bold">Markets</p>

          {/* User's cart */}
          {
              cart?.length > 0 ? (
                  cart.map((item) => {

                      return (
                          <div key={item.name} className="w-[100%] mt-[20px]">
                              <Divider className="my-1" />
                              <div className="flex flex-col w-[100%] gap-3">
                                  <div className="flex gap-1">
                                      <img className="w-[35px] h-[26px] rounded-md" src={item.img} alt="" />
                                      <div className="w-[100%]">
                                          <p>{item.name}</p>
                                          <div className="w-[98%] flex justify-between">
                                              <select
                                                  style={{ width: '112px', height: '16px', padding: '0', borderRadius: '0', border: '1px solid black' }}
                                                  onChange={(value) => num = value}
                                                  className="custom-select"
                                              >
                                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                                                    <option selected={el === item.num} value={el}>{el} piece CHF {(item.price * el).toFixed(2)}</option>
                                                  ))}
                                              </select>
                                              <button onClick={() => deleteFromCart(item.name)} className="text-red-500">x</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      );
                  })
              ) : (
                  'Нет продуктов в корзине'
              )
           }
      </div>
  );
}
