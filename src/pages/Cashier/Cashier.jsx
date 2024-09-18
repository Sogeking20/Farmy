import { plus, deleteIcon } from "../../assets";
import { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Divider } from "antd";
import CartWindow from "../../components/CartWindow/CartWindow";
import { CartContext } from "../../CartContext";

const Cashier = () => {
  const [delivery, setDelivery] = useState('first')
  const position = [47.3769, 8.5417]
  const [activeSlot, setActiveSlot] = useState(0);
  const [activeSlotSecond, setActiveSlotSecond] = useState(0);
  const [activePayment, setActivePayment] = useState(null);
  const { cart, endPrice } = useContext(CartContext);

  const slots = [
    { label: "Early-bird slot", time: "by 6:00 am", price: "CHF 3.90" },
    { label: "4-hour slot", time: "09:30-13:30", price: "CHF 3.90" },
    { label: "4-hour slot", time: "15:00-19:00", price: "CHF 3.90" },
    { label: "4-hour slot", time: "16:00-18:00", price: "CHF 3.90" },
    { label: "4-hour slot", time: "18:00-22:00", price: "CHF 3.90" },
  ];

  const payment = [
    { label: "Twint", html: <div className="mt-[10px] px-2">
                                <p className="text-[16px] mb-[5px] text-[#333333]">Pay easily with your phone or tablet using the <a className="text-[#F4991A]" href="https://www.twint.ch/en/download-the-app/">Twint app</a>.</p>
                                <p className="text-[16px] mb-[20px] text-[#333333]">Just scan the QR code we will bring you with your phone or tablet, press "Accept" and enjoy your purchase.</p>
                                <p className="text-[16px] mb-[25px] text-[#333333]">By submitting the form you accept the terms & conditions and the privacy policy</p>
                                <hr />
                                <button className="text-[18px] mt-[30px] px-6 py-2 rounded-sm mb-5 shadow-md bg-[#F4991A] text-[#fff]">
                                  Complete your checkout
                                </button>
                            </div> },

    { label: "Credit Card", html: <div className="mt-[10px] px-2">
                                <p className="text-[16px] mb-[5px] text-[#333333]">The payment will take place in a popup. Please wait for the payment procedure to load...</p>
                            </div> },

    { label: "Paypal", html: <div className="mt-[10px] px-2">
                                <p className="text-[16px] mb-[25px] text-[#333333]">By submitting the form you accept <a className="text-[#F4991A]" href="/terms-and-conditions">the terms & conditions</a> and the <a className="text-[#F4991A]" href="/terms-and-conditions">privacy policy</a></p>
                                <hr />
                                <button className="text-[18px] mt-[30px] px-6 py-2 rounded-sm mb-5 shadow-md bg-[#F4991A] text-[#fff]">
                                  Proceed to PayPal
                                </button>
                                <p className="text-[13.6] px-1 text-[#999999] mb-4">By clicking on "Proceed to PayPal" you will be redirected to paypal.com to finalize your payment.</p>
                            </div> },   
    { label: "Postfinance", html: <div className="mt-[10px] px-2">
                                  <p className="text-[16px] mb-[25px] text-[#333333]">By submitting the form you accept <a className="text-[#F4991A]" href="/terms-and-conditions">the terms & conditions</a> and the <a className="text-[#F4991A]" href="/terms-and-conditions">privacy policy</a></p>
                                  <hr />
                                  <button className="text-[18px] mt-[30px] px-6 py-2 rounded-sm mb-5 shadow-md bg-[#F4991A] text-[#fff]">
                                    Complete your checkout
                                  </button>
                              </div> },
    { label: "Postfinance E-finance", html: <div className="mt-[10px] px-2">
                                  <p className="text-[16px] mb-[25px] text-[#333333]">By submitting the form you accept <a className="text-[#F4991A]" href="/terms-and-conditions">the terms & conditions</a> and the <a className="text-[#F4991A]" href="/terms-and-conditions">privacy policy</a></p>
                                  <hr />
                                  <button className="text-[18px] mt-[30px] px-6 py-2 rounded-sm mb-5 shadow-md bg-[#F4991A] text-[#fff]">
                                    Complete your checkout
                                  </button>
                              </div> },                                                                                      
  ] 

  const handlePayment = (value) => {
    if (activePayment == value) {
      setActivePayment(null);
    } else {
      setActivePayment(value);
    }
  };

  const handleSlotClick = (index) => {
    setActiveSlot(index);
  };

  const handleSlotClickSecond = (index) => {
    setActiveSlotSecond(index);
  };

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const newDates = [];

    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + i);

      const day = futureDate.toLocaleDateString('en-US', { weekday: 'long' });
      const date = futureDate.getDate();
      const month = futureDate.toLocaleDateString('en-US', { month: 'long' });

      newDates.push({ day, date, month });
    }

    setDates(newDates);
  }, []);

  return (
    <>
      <div className={`container ${cart?.lenght > 0 ? 'xl:pr-[100px]' : ''}`}>
        {delivery === 'first' ? (
          <div className="checkout text-start md:text-center px-[30px]">
            <h1 className="text-[28px] text-[#585858] font-bold title mt-6">Choose delivery method</h1>
            <p className="text-center mt-4 mb-4">
              <small className="uppercase text-[11px] font-semibold">Delivery method</small> <br />
              We deliver the order to you
            </p>
            <hr />
            <h1 className="text-[28px] text-[#585858] font-bold title text-center mt-6 mb-3">Shipping details</h1>
            <hr className="bg-green-800 h-[4px] max-w-[250px] w-[100%] mx-auto" />
            <h1 className="text-center text-[20px] font-bold uppercase text-[#585858] mt-5">
              Shipping Address:
            </h1>
            <div className="flex gap-4 items-center justify-center">
              <select className="border-2 w-[100%] sm:w-[35%] px-4">
                <option value="">Jean Hotz Straße 4, 8606 Nänikon </option>
              </select>
              <div className="flex gap-4">
                <div className="p-2 rounded-full bg-[#bbb]">
                  <img width={20} height={20} src={plus} alt="" />
                </div>
                <div className="p-2 rounded-full bg-[#bbb]">
                  <img width={20} height={20} src={deleteIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-center">Alex Kim</p>
              <p className="text-center">8606 Nänikon, Jean Hotz Straße 4</p>
              <div className="text-center mt-4">
                <button className="w-[60px] h-[30px] border rounded-sm">Edit</button>
              </div>
            </div>
            <div className="flex flex-col text-center items-center justify-center mt-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="font-bold">
                  Billing address is the same as the delivery address.
                </span>
              </label>
              <label className="flex items-center gap-2 ">
                <input type="checkbox" />
                <span className="font-bold">I want to pay as a company</span>
              </label>
            </div>
            <div className="flex justify-center items-center mt-8">
              <div className="shadow-2xl w-[100%] max-w-[440px] p-4 flex flex-col">
                <textarea
                  name=""
                  id=""
                  placeholder="Building entrance, dog warnings, etc..."
                  className="h-[100px] border-b-2"
                ></textarea>
                <span className="text-[11px] uppercase font-semibold text-[#556666] px-2">
                  Delivery comments, text for a greeting card (we write them for
                  you), etc.
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-16 mb-6">
              <button onClick={() => setDelivery('second')} className="text-[23px] font-bold px-6 py-4 rounded-md shadow-md bg-[#F4991A] text-[#fff]">
                Continue
              </button>
            </div>
            <hr />
            <h1 className="sec-title text-center p-3 py-5 text-[28px] text-[#AAAAAA] font-bold">Delivery time</h1>
            <hr />
            <h1 className="sec-title text-center p-3 py-5 text-[28px] text-[#AAAAAA] font-bold">Vouchers</h1>
            <hr />
            <div className="flex justify-between mt-10 mb-20">
              <div className="w-1/2">
                <p className="italic text-[#bbb]">Alex Kim</p>
                <p>
                  <b className="text-[#aaa]">R325664002</b>
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-center text-[#aaa] font-bold mb-2">Total</p>
                <hr />
                <div className="flex justify-between">
                  <p className="text-[#aaa]">(tax incl.)</p>
                  <h1 className="text-[20px] font-bold text-[#aaa]">
                    {endPrice}
                  </h1>
                </div>
                <p className="text-center text-[#aaa] font-bold mb-2 mt-3">
                  Adjustments
                </p>
                <hr />
                <div className="flex justify-between border-b-2 py-3">
                  <p className="text-[#aaa] text-[14px] font-bold">
                    Value of goods
                  </p>
                  <p className="text-[#aaa] text-[14px] font-bold">
                    {endPrice}
                  </p>
                </div>
                <div className="flex justify-between border-b-2 py-3">
                  <p className="text-[#aaa] text-[14px] font-bold">
                    Small order surcharge
                  </p>
                  <p className="text-[#aaa] text-[14px] font-bold">
                    CHF 7<sup>90</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : delivery === 'second' ? (
          <div className="relative checkout text-start md:text-center px-[30px]">
          <h1 className="text-[28px] text-[#AAAAAA] font-bold title mt-6">Choose delivery method</h1>
          <p className="text-center mt-6 mb-4">
          <small className="uppercase text-[11px] font-semibold">Delivery method</small> <br />
            We deliver the order to you
          </p>
          <hr />
          <h1 className="text-[28px] text-[#585858] font-bold title text-center mt-6 mb-3">Shipping details</h1>
          <MapContainer className="w-[100%] md:w-[505px]" center={position} zoom={13} style={{ height: "300px", marginLeft: "auto", marginRight: "auto" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Цюрих. <br />
              </Popup>
            </Marker>
          </MapContainer>
          <button onClick={() => setDelivery('first')} className="hidden md:block absolute top-[210px] right-[0] w-[85px] h-[36px] border rounded-sm text-[#8C9AA9] text-[18px] font-semibold shadow-sm">Edit</button>
          <div className="flex justify-between md:block">
            <div>
              <p className="text-[11px] font-semibold uppercase mt-5">Delivering to:</p>
              <p className="text-[16px]">8606 Nänikon, Jean Hotz Straße 4</p>
            </div>
            <button onClick={() => setDelivery('first')} className="block md:hidden text-[#8C9AA9] text-[18px] underline font-semibold shadow-sm">Edit</button>
          </div>
          {/* <hr className="bg-green-800 h-[4px] w-[20%] mx-auto" /> */}
          <Divider style={{ borderColor: "lightgray" }}/>
          <h1 className="text-[28px] text-[#585858] font-bold title text-center mt-6 mb-3">Delivery time</h1>
          <hr className="bg-green-800 h-[4px] max-w-[250px] w-[100%] mx-auto" />
          <div className="text-start text-[18px] mt-[30px]">
            <p>Choose your delivery date</p>
            <div className="flex gap-3 overflow-x-auto mt-[15px] mb-[25px]">
              {dates.map((date, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex flex-col text-center py-2 items-center bg-[#F2F2F2] justify-center px-2 rounded-md w-[100px] h-[80px] ${
                    activeSlotSecond === index ? "border-2 border-black" : ""
                  }`}
                  onClick={() => handleSlotClickSecond(index)}
                >
                  <p className="text-[11px]">{date.day}</p>
                  <Divider style={{ borderColor: "black", margin: "0" }} />
                  <p className="text-[16px]">{date.date}</p>
                  <p className="text-[16px]">{date.month}</p>
                </div>
              ))}
            </div>
            <p>Choose your delivery time</p>
            <div className="flex whitespace-nowrap mt-[15px] gap-3 overflow-x-auto overflow-y-hidden">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  onClick={() => handleSlotClick(index)}
                  className={`cursor-pointer flex flex-col text-center py-2 items-center bg-[#F2F2F2] justify-center px-2 rounded-md w-[100px] h-[80px] ${
                    activeSlot === index ? "border-2 border-black" : ""
                  }`} // Меняем цвет в зависимости от состояния
                >
                  <p className="text-[11px]">{slot.label}</p>
                  <Divider style={{ borderColor: "black", margin: "0" }} />
                  <p className="text-[16px] font-bold py-1">{slot.time}</p>
                  <Divider style={{ borderColor: "black", margin: "0" }} />
                  <p className="text-[16px]">{slot.price}</p>
                </div>
              ))}
            </div>
          <div className="max-w-[505px] w-[100%] p-5 shadow-[0_3px_20px_-9px_rgba(0,0,0,0.3)] mt-[80px] mx-[auto]">
            <p className="text-[16px] text-center text-[#F4991A] uppercase mb-[10px]">Information</p>
            <p className="text-[14.4px]">The courier will deliver your order <strong>between 2am and 6am</strong> on the day of delivery. The order is placed at the outside doorbell in a cardboard box. This will protect your order from the weather and animals. The courier <strong>will NOT ring the doorbell</strong>. You are welcome to return the Farmy bags and the box with your next delivery. IMPORTANT: Make sure you leave them at the outside doorbell. Our couriers are not allowed to enter buildings.</p>
          </div>
          </div>
          {/* <hr className="bg-green-800 h-[4px] w-[20%] mx-auto" /> */}
          <div className="qwe"></div>
          <div className="flex justify-center mt-8 mb-6">
            <button onClick={() => setDelivery('third')} className="text-[23px] font-bold px-6 py-4 rounded-md shadow-md bg-[#F4991A] text-[#fff]">
              Continue to payment
            </button>
          </div>
          <hr />
          <h1 className="sec-title text-center p-3 py-5 text-[28px] text-[#AAAAAA] font-bold">Vouchers</h1>
          <hr />
          <div className="flex justify-between text-start mt-10 mb-20">
            <div className="w-1/2">
              <p className="italic text-[#bbb]">Alex Kim</p>
              <p>
                <b className="text-[#aaa]">R325664002</b>
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-center text-[#aaa] font-bold mb-2">Total</p>
              <hr />
              <div className="flex justify-between">
                <p className="text-[#aaa]">(tax incl.)</p>
                <h1 className="text-[20px] font-bold text-[#aaa]">
                  {endPrice}
                </h1>
              </div>
              <p className="text-center text-[#aaa] font-bold mb-2 mt-3">
                Adjustments
              </p>
              <hr />
              <div className="flex justify-between border-b-2 py-3">
                <p className="text-[#aaa] text-[14px] font-bold">
                  Value of goods
                </p>
                <p className="text-[#aaa] text-[14px] font-bold">
                  {endPrice}
                </p>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <p className="text-[#aaa] text-[14px] font-bold">
                  Small order surcharge
                </p>
                <p className="text-[#aaa] text-[14px] font-bold">
                  CHF 7<sup>90</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        ) : delivery === 'third' ? (
          <div className="relative checkout text-start md:text-center px-[30px]">
          <h1 className="text-[28px] text-[#AAAAAA] font-bold title mt-6">Choose delivery method</h1>
          <p className="text-center mt-6 mb-4">
          <small className="uppercase text-[11px] font-semibold">Delivery method</small> <br />
            We deliver the order to you
          </p>
          <hr />
          <h1 className="text-[28px] text-[#AAAAAA] font-bold title text-center mt-6 mb-3">Shipping details</h1>
          <MapContainer className="w-[100%] md:w-[505px]" center={position} zoom={13} style={{ height: "300px", marginLeft: "auto", marginRight: "auto" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Цюрих. <br />
              </Popup>
            </Marker>
          </MapContainer>
          <button onClick={() => setDelivery('first')} className="hidden md:block absolute top-[210px] right-[0] w-[85px] h-[36px] border rounded-sm text-[#8C9AA9] text-[18px] font-semibold shadow-sm">Edit</button>
          <div className="flex justify-between md:block">
            <div>
              <p className="text-[11px] font-semibold uppercase mt-5">Delivering to:</p>
              <p className="text-[16px]">8606 Nänikon, Jean Hotz Straße 4</p>
      
            </div>
            <button onClick={() => setDelivery('first')} className="block md:hidden text-[#8C9AA9] text-[18px] underline font-semibold shadow-sm">Edit</button>
          </div>
          {/* <hr className="bg-green-800 h-[4px] w-[20%] mx-auto" /> */}
          <Divider style={{ borderColor: "lightgray" }}/>
          <h1 className="text-[28px] text-[#AAAAAA] font-bold title text-center mt-6 mb-3">Delivery time</h1>
          <div className="text-[#333333] mt-[50px] mb-[10px] relative">
            <p className="text-[11px] font-semibold uppercase">Delivery time:</p>
            <p className="text-[16px]">Thu. 19. Sep., 02:00-06:00 hours</p>
            <button onClick={() => setDelivery('second')} className="hidden md:block absolute bottom-0 right-[0] w-[85px] h-[36px] border rounded-sm text-[#8C9AA9] text-[18px] font-semibold shadow-sm">Edit</button>
          </div>
          {/* <hr className="bg-green-800 h-[4px] w-[20%] mx-auto" /> */}
          <div className="qwe"></div>
          <hr />
          <h1 className="sec-title text-center p-3 py-5 text-[28px] text-[#585858] font-bold">Vouchers</h1>
      https://www.farmy.ch/products?keywords=BBQMONTH&locale=en&_gl=1*1j0fmrv*_up*MQ..*_ga*MTE0NTMxNzk1NS4xNzI2NTk4NjM0*_ga_2EC1K8SN04*MTcyNjU5ODYzMy4xLjAuMTcyNjU5ODYzMy4wLjAuNjA2NzMwMjgx        <hr className="bg-green-800 h-[4px] max-w-[250px] w-[100%] mx-auto" />
          <p className="text-[16px] text-[#999999] text-center mt-[30px]">(optional)</p>
          <p className="text-[22px] text-[#585858] text-center font-bold">Redeem your code here</p>
          <div className="flex flex-col md:flex-row items-center gap-5 max-w-[600px] w-[100%] mx-[auto] justify-between">
            <div className="w-[100%] text-[#333333] text-start">
              <input type="text" className="border-b outline-none text-[25px] w-[100%] pl-1 pr-[25px] h-[35px] pt-3 " />
              <p className="text-[11px] font-semibold mt-1 uppercase pl-1">Enter the code</p>
            </div>
            <button className="w-[200px] text-[#333333] mb-10 rounded-sm bg-white h-[45px] border border-[#999999]">Redeem voucher</button>
          </div>
          <hr />
          <div className="text-center mt-5 text-[#333333] text-[20px]">
            <p className="font-bold">Courier Tip</p>
            <p>The tip is paid in full to the couriers.<br />Farmy does not keep anything from the tip.</p>
          </div>
          <hr />
          <div className="text-center mt-5 mb-5">
            <p className="text-[28px] mb-3 text-[#585858] font-bold">Payment method</p>
            <div className="w-[100%] flex flex-col gap-3">
              {payment.map((date, index) => (
                  <div
                    key={index}
                    className={`text-start rounded-sm w-[100%] border border-[#585858]`}
                  >
                    <p onClick={() => handlePayment(index)} className="w-[100%] text-[18px] font-bold px-2 py-2 hover:text-[#F4991A] cursor-pointer">{date.label}</p>
                    {activePayment === index ? (
                      date.html
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          <hr />
          <div className="flex justify-between text-start mt-10 mb-20">
            <div className="w-1/2">
              <p className="italic text-[#bbb]">Alex Kim</p>
              <p>
                <b className="text-[#aaa]">R325664002</b>
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-center text-[#aaa] font-bold mb-2">Total</p>
              <hr />
              <div className="flex justify-between">
                <p className="text-[#aaa]">(tax incl.)</p>
                <h1 className="text-[20px] font-bold text-[#aaa]">
                  {endPrice}
                </h1>
              </div>
              <p className="text-center text-[#aaa] font-bold mb-2 mt-3">
                Adjustments
              </p>
              <hr />
              <div className="flex justify-between border-b-2 py-3">
                <p className="text-[#aaa] text-[14px] font-bold">
                  Value of goods
                </p>
                <p className="text-[#aaa] text-[14px] font-bold">
                  {endPrice}
                </p>
              </div>
              <div className="flex justify-between border-b-2 py-3">
                <p className="text-[#aaa] text-[14px] font-bold">
                  Small order surcharge
                </p>
                <p className="text-[#aaa] text-[14px] font-bold">
                  CHF 7<sup>90</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className=""></div>
        )
        }
      
      </div>
      <div className="hidden xl:block">
        <CartWindow />
      </div>
    </>                                                                                                                                                                                                                                                                                                 
  );
};

export default Cashier;
