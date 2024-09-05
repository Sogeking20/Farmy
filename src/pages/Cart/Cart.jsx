import { useUser } from '../../hooks/useUser';
import { UsersService } from '../../services/user.service';

// export function Cart() {
  

//   return (
//     <>
//       {user?.cart?.length
//         ? user.cart.map(itemName => {
//             return (
//               <div className="cart-left-body-bottom flex justify-between items-center ">
//               <div>
//                 <h3 className="text-[18px] text-[#333]">Geschenke & Sets</h3>
//                 <div className="flex gap-6 mt-4">
//                   <img
//                     src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/138116/large/Oatsome_Probier-Set__4x50g-farmy-ch-01.JPG?1716284690"
//                     alt="image"
//                     width={75}
//                     height={75}
//                   />
//                   <p className="text-[#333] text-[17px]">
//                     Oatsome Probier-Set, 4x50g
//                   </p>
//                 </div>
//                 <div className="flex mt-8 gap-4">
//                   <img
//                     src="https://www.farmy.ch/resources/farmy/images/components/newbin.svg"
//                     className="margin-right-10 cursor-pointer"
//                     alt="basket"
//                   />
//                   <p className="text-[#999] underline">Warenkorb löschen</p>
//                 </div>
//               </div>
              
//               <div className="flex gap-20">
//                 <div className="">
//                   <div className="flex justify-between gap-4 pb-2 border-b-2 border-[#107433]">
//                     <button
//                       className="minus-button rounded"
//                       onClick={handleDecrease}
//                     >
//                       -
//                     </button>
//                     <button
//                       className="plus-button rounded"
//                       onClick={handleIncrease}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="text-center text-[#107433]">9 Dosen</p>
//                 </div>
//                 <div>
//                   <sup>CHF</sup> {Math.floor(offerPrice)}.
//                   <sup>
//                     {changePrice.toFixed(2).toString()[2] +
//                       changePrice.toFixed(2).toString()[3]}
//                   </sup>
//                 </div>
//               </div>
//             </div>
//             );
//           })
//         : 'Нет продуктов в корзине'}
//     </>
//   );
// }

import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [offerQuantity, setOfferQuantity] = useState(9.9);
  const [realQuantity, setRealQuantity] = useState(10.8);
  const [offerPrice, setOfferPrice] = useState(offerQuantity);
  const [realPrice, setRealPrice] = useState(realQuantity);
  const user = useUser();

  let changePrice = offerPrice % 1;

  const handleIncrease = () => {
    setOfferPrice(offerPrice + offerQuantity);
    setRealPrice(realPrice + realQuantity);
  };

  const handleDecrease = () => {
    setOfferPrice(offerPrice - offerQuantity);
    setRealPrice(realPrice - realQuantity);
  };

  // console.log(user.cart);

  return (
    <div className="container">
      <div className="cart mb-16">
        <a href="/farmypass/new">
          <div className="sc-gGvHcT fROKwt cart-container flex justify-between items-start">
            <div className="sc-ckEbSK hLKGga w-[60%]">
              <div>
                Entdecke eine Welt voller Vorteile mit dem Farmy Pass:
                <br />
                Exklusive Belohnungen für jede Bestellung über CHF 159
                garantiert!
              </div>
            </div>
            <div className="sc-fbYMXx ggAXCX w-[40%]">Jetzt freischalten</div>
          </div>
        </a>

        <div className="cart-content flex justify-between mt-6">
          <div className="cart-left w-[65%]">
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
             {user?.cart?.length
        ? user.cart.map((itemName, itemDescription, itemImg, itemPrice) => {
            console.log(user.cart);
            return (
              <div className="cart-left-body-bottom flex justify-between items-center ">
              <div>
                <h3 className="text-[18px] text-[#333]">{itemName}</h3>
                <div className="flex gap-6 mt-4">
                  <img
                    src={itemImg[6]}
                    alt="image"
                    width={75}
                    height={75}
                  />
                  <p className="text-[#333] text-[17px]">
                    {itemDescription}
                  </p>
                </div>
                <div className="flex mt-8 gap-4">
                  <img
                    src="https://www.farmy.ch/resources/farmy/images/components/newbin.svg"
                    className="margin-right-10 cursor-pointer"
                    alt="basket"
                  />
                  <p className="text-[#999] underline">Warenkorb löschen</p>
                </div>
              </div>
              
              <div className="flex gap-20">
                <div className="">
                  <div className="flex justify-between gap-4 pb-2 border-b-2 border-[#107433]">
                    <button
                      className="minus-button rounded"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <button
                      className="plus-button rounded"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-center text-[#107433]">9 Dosen</p>
                </div>
                <div className='text-center'>
                  <sup>CHF</sup> {itemPrice}.
                  <sup>
                  </sup>
                </div>
              </div>
            </div>
            );
          })
        : 'Нет продуктов в корзине'}        
            </div>
          </div>
          <div className="cart-right w-[30%]">
            <div className="right-side">
              <div>
                <ul className="padding-0 margin-0">
                  <li
                    className="p-2 rounded-lg"
                    style={{ background: "rgb(242, 242, 242)" }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Warenwert </span>
                      <span className="text-[18px] font-semibold">
                        CHF {offerPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="mov-reminder text-[13px] text-[#999] font-bold">
                      Mindestwert: 79.00 CHF
                    </span>
                  </li>
                  <li className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        Von Hand portioniert{" "}
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
                      <span>CHF 0.79</span>
                    </div>
                  </li>
                  <li className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        Mindermengenzuschlag{" "}
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
                      <span>CHF {offerPrice.toFixed(2)}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="summary-padding">
                <div className="cta-wrapper">
                  <a href="/cashier">
                    <button className="sc-jTjUTQ fyKlgw flex p-4 rounded-lg justify-content-space-between align-items-center w-full justify-between bg-[#F4991A]">
                      <div className="full-width flex align-items-center w-full justify-between items-center  justify-content-space-between">
                        <div className="cta-text flex text-align-left  justify-between text-white font-bold text-[20px]">
                          Zur Kasse{" "}
                        </div>
                        <div className="total flex gap-2 text-white text-[20px] font-bold">
                          CHF
                          <span className="total-number margin-left-5">
                            {offerPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </button>
                  </a>
                  <div className="sc-jRwbcX iXEfUR cta-extra-content full-width text-align-center font-family-alata"></div>
                </div>
                <div className="info-desktop margin-top-10">
                  <div className="sc-fvEvSO ciMfSh  desktop handling_fee">
                    <div className="flex justify-between justify-content-center align-items-center">
                      <span className="flex justify-between items-center gap-2 p-2 rounded-lg w-full mt-4 text-green-950 font-semibold bg-green-100">
                        CHF 21.00 hinzufügen und CHF 7.90 sparen!
                        <svg
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
    </div>
  );
};

export default Cart;
