import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../CartContext';
import "./Cart.css";
import InfoModal from './InfoModal/InfoModal';
import InfoModalSecond from './InfoModal/InfoModalSecond';

const Cart = () => {
  const [offerQuantity, setOfferQuantity] = useState(9.9);
  const [realQuantity, setRealQuantity] = useState(10.8);
  const [offerPrice, setOfferPrice] = useState(offerQuantity);
  const [realPrice, setRealPrice] = useState(realQuantity);
  const navigate = useNavigate();
  const user = useUser();
  const { cart, minus, setEndPrice, addToCart, clearCart, deleteFromCart } = useContext(CartContext);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModalOpenSecond, setInfoModalOpenSecond] = useState(false);

  let changePrice = offerPrice % 1;


  useEffect(() => {
    if (!user?.cart?.length && !cart?.length) {
      navigate('/farm-shop');
    }
  }, [user.cart]);

  let totalPrice = 7.90;

  // useEffect(() => {
  //   setEndPrice(totalPrice);
  // }, [totalPrice]);

  let price = 0

  return (
    <div className="container">
      <div className="cart mb-16">
        <a href="/farmy-pass">
          <div className="sc-gGvHcT fROKwt cart-container flex justify-between items-center">
            <div className="sc-ckEbSK hLKGga w-[60%]">
              <div>
                Discover a world of benefits with the Farmy Pass:
              </div>
            </div>
            <div className="sc-fbYMXx ggAXCX w-[40%]">Try it now!</div>
          </div>
        </a>

        <div className="cart-content flex gap-5 justify-between mt-6">
          <div className="cart-left w-[60%]">
            <h2 className="title text-[rgb(51,51,51)] text-[26px]">
              Dein Warenkorb
            </h2>

            <div className="cart-left-body mt-4 ">
              <div className="cart-left-body-top flex justify-between items-center pb-2 border-b-2 border-[rgba(153, 153, 153, 0.27)]">
                <h3 className="text-[rgb(153,166,196)] text-[20px]">Produkt</h3>

                <div className="flex items-center gap-10">
                  <h3 className="text-[rgb(153,166,196)] text-[20px]">Menge</h3>
                  <h3 className="text-[rgb(153,166,196)] text-[20px]">
                    Gesamtwert
                  </h3>
                </div>
              </div>
              {          
                  cart?.length
                    ? (() => {
                        // let totalPrice = 0; // переменная для хранения общей суммы
                        return cart.map((item) => {
                          const [num, setNum] = useState(Number(item.num));
    
                          // Если количество меньше 1, удалить товар из корзины
                          if (item.num < 1) {
                            deleteFromCart(item.name);
                          }

                          function plus () {
                            setNum(num + 1)
                            addToCart(item.name)
                          }
    
                          // Добавляем цену текущего товара к общей сумме
                          totalPrice += item.price * num;
                          price += item.price * num
    
                          return (
                            <>
                              <div
                                key={item.name}
                                className="cart-left-body-bottom flex justify-between items-center mb-3"
                              >
                                <div>
                                  <h3 className="text-[18px] text-[#333]">{item.name}</h3>
                                  <div className="flex gap-6 mt-4">
                                    <img src={item.img} alt="image" width={75} height={75} />
                                    <p className="text-[#333] text-[17px]">{item.description}</p>
                                  </div>
                                </div>
                                <div className="flex gap-20">
                                  <div className="">
                                    <div className="flex justify-between gap-4 pb-2 border-b-2 border-[#107433]">
                                      <button
                                        className="minus-button rounded"
                                        onClick={() => minus({name: item.name})}
                                        >
                                        -
                                      </button>
                                      <button
                                        className="plus-button rounded"
                                        onClick={() => addToCart({name: item.name})}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <p className="text-center text-[#107433]">{num} Dosen</p>
                                  </div>
                                  <div className="text-center">
                                    <sup>CHF</sup> {Number((item.price * num).toFixed(2))}.
                                    <sup></sup>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                      });
                      })()
                    : 'Нет продуктов в корзине'
              }
              <div onClick={() => clearCart()} className="flex mt-8 gap-4 cursor-pointer">
                <img
                  src="https://www.farmy.ch/resources/farmy/images/components/newbin.svg"
                  className="margin-right-10"
                  alt="basket"
                />
                <p className="text-[#999] underline">Warenkorb löschen</p>
              </div>
            </div>
          </div>
          <div className="cart-right w-[405px]">
            <div className="right-side">
              <div>
                <ul className="padding-0 margin-0">
                  <li
                    className="p-2 rounded-lg"
                    style={{ background: "rgb(242, 242, 242)" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Value of goods </span>
                      <span className="text-[18px] font-semibold">
                        CHF {Number((price).toFixed(2))}
                      </span>
                    </div>
                    <span className="mov-reminder text-[13px] text-[#999] font-bold">
                      Value of goods: {Number((price).toFixed(2))} CHF
                    </span>
                  </li>
                  <li className="p-4">
                    <div className="flex justify-between items-center">
                      <span onClick={() => setInfoModalOpenSecond(true)} className="flex items-center gap-2 cursor-pointer">
                        Small order surcharge
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="text-green-800"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ verticalAlign: "middle" }}
                        >
                          <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                        </svg>
                      </span>
                      <span>CHF 7.90</span>
                    </div>
                  </li>
                  <hr style={{ margin: "0px 12px 10px" }} />
                  <li className="sc-hOzowv eyWOeG flex justify-between items-center mb-2">
                    <span>Gesamtsumme</span>
                    <div className="grand-total-value-container">
                      <span className="sc-cZFQFd iIPcxN font-family-alata">
                        (CHF 15.80 - 16.59)
                      </span>
                      <span>CHF {Number((totalPrice).toFixed(2))}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="summary-padding">
                <div className="cta-wrapper">
                  <a href={user ? "/cashier" : "/login"}>
                    <button disabled={Number((totalPrice).toFixed(2)) < 79} style={Number((totalPrice).toFixed(2)) < 79 ? { backgroundColor: "#999" } : {backgroundColor: "#F4991A"}} className="sc-jTjUTQ fyKlgw flex p-4 rounded-lg justify-content-space-between align-items-center w-full justify-between">
                      {totalPrice > 79 ? (
                        <div className="full-width flex align-items-center w-full justify-between items-center  justify-content-space-between">
                          <div className="cta-text flex text-align-left text-center  justify-between text-white font-bold text-[20px]">
                            {user ? 'Go to checkout' : 'Log in and Checkout '}
                          </div>
                          <div className="total flex gap-2 text-white text-[20px] font-bold">
                            CHF
                            <span className="total-number margin-left-5 max">
                              {Number((totalPrice).toFixed(2))}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="full-width flex align-items-center w-full justify-between items-center  justify-content-space-between">
                        <div className="cta-text flex w-[100%] justify-center text-white font-bold text-[20px]">
                          + add products for CHF {Number((79 - totalPrice).toFixed(2))}
                        </div>
                        {/* <div className="total flex gap-2 text-white text-[20px] font-bold">
                          CHF
                          <span className="total-number margin-left-5 max">
                            {totalPrice.toFixed(2)}
                          </span>
                        </div> */}
                      </div>
                      )}
                    </button>
                  </a>
                  <div className="sc-jRwbcX iXEfUR cta-extra-content full-width text-align-center font-family-alata"></div>
                </div>
                <div className="info-desktop margin-top-10">
                  <div className="sc-fvEvSO ciMfSh  desktop handling_fee">
                    <div className="flex justify-between justify-content-center align-items-center">
                      <span className="flex justify-between items-center gap-2 p-2 rounded-lg w-full mt-4 text-green-950 font-semibold bg-green-100">
                        You just saved CHF 7.90
                        <svg
                          onClick={() => setInfoModalOpen(true)}
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          className="margin-left-10 cursor-pointer"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoModal
        isModalOpen={infoModalOpen === true}
        onClose={() => setInfoModalOpen(false)}
      />
      <InfoModalSecond
        isModalOpen={infoModalOpenSecond === true}
        onClose={() => setInfoModalOpenSecond(false)}
      />
    </div>
  );
};

export default Cart;
