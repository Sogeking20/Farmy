import { Alert, Divider } from "antd"
import { Select } from "antd"
import React,{ useState, useEffect, useContext } from "react"
import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import { CartContext } from '../../CartContext';

export default function CartWindow() {
  const user = useUser();
  const { cart, clearCart, addToCart, deleteFromCart } = useContext(CartContext);
  console.log(user)
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
      return 'top-[200px]'; // начальный размер
    } else{
      return 'top-[155px]'; // уменьшается при скролле
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
          setTotalPrice(total); // Обновляем общую цену при изменении количества
      }
  }, [user.cart, quantities]);

  const handleQuantityChange = (itemName, value) => {
      // qwe = value
  };

  return (
      <div className={`${user?.cart?.length > 0 ? "block" : cart?.length > 0 ? "block" : "hidden"} fixed top-[200px] overflow-y-auto w-[222px] right-[10px] text-[10px] ${getSizeClass()}`}>
          <a href={`${user? '/cashier' : '/login'}`}>
            <button disabled={totalPrice < 79} className={`w-[100%] h-[30px] border ${totalPrice < 79 ? "bg-[white] border-[#999999]" : "bg-[#F499A1] border-[#F499A1] text-white"} rounded-[5px] text-[10px] text-[#999999] mb-1`}>
                Cart {totalPrice}
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
          <div className="flex w-[100%] justify-between">
              <p>Small order surcharge</p>
              <p className="relative">CHF 7 <span className="text-[7px] absolute top-[-3px]">90</span></p>
          </div>
          <Divider className="my-1" />
          <div className="flex w-[100%] justify-between">
              <p>Cut by hand</p>
              <p className="relative">CHF 3 <span className="text-[7px] absolute top-[-3px]">90</span></p>
          </div>
          <Divider className="my-1" />
          <div className="bg-[rgb(223,206,242)] w-[100%] p-3">
              <p className="text-[12px] font-bold">Unlock a world of benefits with Farmy Pass: every order above CHF 159 comes with exclusive rewards!</p>
              <button className="w-[100%] h-[36px] border-2 border-black rounded-xl">Unlock now</button>
          </div>

          {/* User's cart */}
          {user ? (
              user.cart && user.cart.length > 0 ? (
                  user.cart.map((itemName, index) => {
                      // const quantity = quantities[itemName[0]] || 1;
                      const [num, setNum] = useState(1);

                      useEffect(() => {
                        setQuantities((prevQuantities) => ({
                            ...prevQuantities,
                            [itemName[0]]: num
                        }));
                    }, [num]);

                      let price = itemName[3] * num;

                      // console.log(price)

                      // Добавляем цену текущего товара к общей сумме
                      totalPrice += price

                      return (
                          <div key={itemName[0]} className="w-[100%] mt-[20phttp://localhost:5173/product/390x]">
                              <p className="font-bold">Markets</p>
                              <Divider className="my-1" />
                              <div className="flex flex-col w-[100%] gap-3">
                                  <div className="flex gap-1">
                                      <img className="w-[35px] h-[26px] rounded-md" src={itemName[2]} alt="" />
                                      <div className="w-[100%]">
                                          <p>{itemName[0]}</p>
                                          <div className="w-[98%] flex justify-between">
                                              <Select
                                                  style={{ width: '98px', height: '16px', borderRadius: '0', border: '1px solid black' }}
                                                  defaultValue={1}
                                                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => ({
                                                      label: `${el} piece CHF ${(itemName[3] * el).toFixed(2)}`,
                                                      value: el
                                                  }))}
                                                  onChange={(value) => setNum(value)}
                                                  // value={num}
                                              />
                                              <button onClick={() => UsersService.deleteFromCart(itemName[0])} className="text-red-500">x</button>
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
          ) : (
              cart && cart.length > 0 ? (
                  cart.map((item) => {
                    let num = quantities[item.name] || 1; // Количество товаров

                    let price = item.price * num;

                      if (num < 1) {
                          deleteFromCart(item.name);
                      }

                      return (
                          <div key={item.name} className="w-[100%] mt-[20px]">
                              <p className="font-bold">Markets</p>
                              <Divider className="my-1" />
                              <div className="flex flex-col w-[100%] gap-3">
                                  <div className="flex gap-1">
                                      <img className="w-[35px] h-[26px] rounded-md" src={item.img} alt="" />
                                      <div className="w-[100%]">
                                          <p>{item.name}</p>
                                          <div className="w-[98%] flex justify-between">
                                              <Select
                                                  style={{ width: '98px', height: '16px', borderRadius: '0', border: '1px solid black' }}
                                                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => ({
                                                      label: `${el} piece CHF ${(item.price * el).toFixed(2)}`,
                                                      value: el
                                                  }))}
                                                  onChange={(value) => handleQuantityChange(item.name, value)}
                                                  value={num}
                                              />
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
          )}
      </div>
  );
}
