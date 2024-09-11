import { Radio } from "antd"
import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

// Компонент для одного вопроса
const AccordionItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false); // состояние для отслеживания, открыт ли аккордеон

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // изменяем состояние
  };

  return (
    <div onClick={toggleAccordion} className="w-[100%]">
      <div className="w-[100%] text-[18px] flex justify-between">
        <h3>{question}</h3>
        {isOpen ? <MinusOutlined style={{ fontSize: '32px' }}/> : <PlusOutlined style={{ fontSize: '32px' }} />}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};


export default function Question() {
    const [category, setCategory] = useState('delivery');

    return(
        <div className="max-w-[960px] mx-[auto] w-[100%] px-5 flex flex-col itens-center text-center">
            <h3 className="text-[24px] font-bold mt-[50px] mb-[15px]">Support</h3>
            <p className="text-[16px] mb-[50px] font-semibold">Please, choose a type of problem you need to solve. Leave your message using our form and we will contact you as soon as possible.</p>
            <input type="text" className="w-[100%] h-[50px] border px-[20px] mb-[15px]" placeholder="Search your problem"/>
            <Radio.Group
                className="w-[100%] flex flex-col md:flex-row items-center gap-3 mb-[50px]"
                defaultValue="a"
                >
                {['Delivery', 'Ordering', 'Payment', 'Complaints', 'Products'].map((city, index) => (
                    <Radio.Button
                    key={index}
                    value={city.toLowerCase()}
                    onClick={() => setCategory(city.toLowerCase())}
                    className="w-[100%] md:[180px]"
                    style={{
                        backgroundColor: 'white',
                        textAlign: 'center',
                        // padding: '8px 16px',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        fontSize: '20px',
                        // borderRadius: '5px',
                        fontWeight: 'bold'
                    }}
                    >
                    {city}
                    </Radio.Button>
                ))}
                <style jsx>{`
                    .ant-radio-button-wrapper {
                    color: black; /* Исходный цвет текста */
                    border-left: none !important; /* Убираем левый бордер */
                    border-right: none !important; /* Убираем правый бордер */
                    }

                    .ant-radio-button-wrapper:first-child {
                    border-left: none !important; /* Убираем левый бордер у первого элемента */
                    }

                    .ant-radio-button-wrapper:last-child {
                    border-right: none !important; /* Убираем правый бордер у последнего элемента */
                    }

                    .ant-radio-button-wrapper:hover {
                    color: #ff8c00; /* Оранжевый цвет текста при наведении */
                    }

                    .ant-radio-button-wrapper-checked {
                    color: #ff8c00 !important; /* Оранжевый цвет текста в активном состоянии */
                    }
                `}</style>
                </Radio.Group>
                {category === 'delivery' ? (
                    <div className="flex flex-col w-[100%] gap-5">
                        <AccordionItem question="Low order value surcharge">
                            <div className="w-[100%] flex flex-col gap-5">
                                <div className="w-[100%] flex flex-col gap-2 text-start">
                                    <p className="text-[16px] font-bold">What is a low order value surcharge and how much is it?</p>
                                    <p className="text-[16px]">For orders from the minimum order value of CHF 80 up to an order value of CHF 100 we charge a minimum order surcharge of CHF 7.90. The minimum order surcharge applies to all zones and is waived as soon as the value of the order exceeds CHF 100 or if you are in possession of a Hofpass, until it expires.</p>
                                </div>
                                <div className="w-[100%] flex flex-col gap-2 text-start">
                                    <p className="text-[16px] font-bold">Why do we now charge a minimum order surcharge?</p>
                                    <p className="text-[16px]">An order of less than CHF 100 causes a similar amount of CO2 emissions as a much larger order. Therefore, we would like to encourage you to order more fresh products and at the same time do something good for the environment. This way, we can continue to offer consistently low delivery costs.</p>
                                </div>
                                <div className="w-[100%] flex flex-col gap-2 text-start">
                                    <p className="text-[16px] font-bold">Is there a way to avoid the low order value surcharge?</p>
                                    <p className="text-[16px]">The best thing would be to simply add a few more products to your shopping basket to reach the order value of CHF 100, because then the surcharge will automatically be waived. </p>
                                </div>
                                <div className="w-[100%] flex flex-col gap-2 text-start">
                                    <p className="text-[16px] font-bold">Do the delivery costs change due to the low order value surcharge?</p>
                                    <p className="text-[16px]">No, the delivery costs remain the same. </p>
                                </div>
                                <div className="w-[100%] flex flex-col gap-2 text-start">
                                    <p className="text-[16px] font-bold">Does the low order value surcharge apply to all delivery zones?</p>
                                    <p className="text-[16px]">Yes, the minimum quantity surcharge applies to all delivery zones.</p>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem question="Farmy Pass">
                            <div className="w-[100%] flex flex-col gap-5 text-start text-[16px]">
                                <p>We're excited to introduce you to the <strong>Farmy Pass</strong> – your ticket to a world of exclusive benefits and savings on every order above CHF 159! Whether you're a loyal customer or just discovering Farmy, the Farmy Pass is designed to enhance your shopping experience and bring more joy to your everyday life.</p>
                                <p className="font-bold mt-[50px] mb-[30px]">What are the advantages?</p>
                                <div className="w-[100%]">
                                    <p>• Double Bonus Eggs: Earn double Bonus Eggs on your orders and convert them directly into credit on Farmy.</p>
                                    <p>• Free delivery for narrow windows: Say goodbye to the CHF 2.90 extra charge for narrow delivery windows and receive your fresh groceries precisely when you need them.</p>
                                    <p>• Exclusive gift for annual subscriptions: If you subsribe to an annual Farmy Pass, you will receive an exclusive surprise gift from us to say thank you for choosing us all year round.</p>
                                </div>
                                <p className="font-bold mt-[50px] mb-[30px]">Subscription fee, cancellation and renewal</p>
                                <p>The Farmy Pass subscription fee is the price displayed on the Farmy website at the time you purchase your Farmy Pass subscription or when your subscription is renewed. Your Farmy Pass subscription will be automatically renewed monthly, or every 6 or 12 months at the end of your minimum term (depending on the type of subscription you have purchased). However, if you prefer not to renew your Farmy Pass subscription or want to change your subsription model, we kindly ask you to reach out to our customer service until 10 p.m. on the eve of the renewal. Our dedicated team is here to assist you with any questions or concerns you may have. (service@farmy.ch / 043 300 86 60)</p>
                                <p className="mt-[30px]">For more information, please refer to the T&Cs available on our website.</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem question="Where does Farmy deliver to?">
                            <p className="text-start mb-[50px]">This page is currently being updated.</p>
                        </AccordionItem>
                        <AccordionItem question="How do you deliver?">
                            <div className="text-start">
                                <p className="my-[50px]">
                                    This depends on the delivery area. Depending on the distance to our two locations in Zurich and Lausanne, we deliver with our own fleet of environmentally friendly electric vehicles, with the private vehicles of our courier team or via an external logistics partner.
                                </p>
                                <p>What needs to be considered for overnight delivery (Tamedia)?</p>
                                <ul className="list-disc pl-10">
                                    <li>The delivery is completed by 06:00 in the morning</li>
                                    <li>The courier team does not ring the doorbell. Couriers have the express order not to enter the building the order is left outside the door of the building (protected from the weather)</li>
                                    <li>Deposit material must be left outside the door so that it can be taken away by the courier team</li>
                                    <li>Please send us an email in advance with all deposit details (number of bottles, glasses, etc.) to service@farmy.ch so that we can refund the amount</li>
                                    <li>The order is delivered and deposited in a carton box to protect the products from any damage</li>
                                </ul>
                            </div>
                        </AccordionItem>
                        <AccordionItem question="Do I have to be home for the delivery?">
                            <div className="text-start flex flex-col gap-7 my-[30px]">
                                <p>No, you do not have to be home when your Farmy delivery arrives.</p>
                                <p>If noone opens for our courier, then your delivery is left before the door of your home or it is deposited according to your notes (e.g. ring a neighbour, leave inside the door using a doorcode).</p>
                                <p>Cool products are delivered in special cooling bags with coolpads; frozen products are delivered with dry ice. However, we want to note that we do not carry any responsibility after delivering your order and that we cannot guarantee the cold chain.</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem question="How much does delivery cost?">
                            <p className="text-start mb-[50px]">Information on delivery costs is currently being adjusted.</p>
                        </AccordionItem>
                        <AccordionItem question="Where is my order?">
                            <p className="text-start mb-[10px]">If you live in a delivery area to which we deliver with our own fleet, you will receive a message (email or SMS) on the day of your delivery with the planned delivery time +/- 15 minutes. As soon as your delivery is next on our courier's list, you will receive a link where you can follow in real time where our courier is currently located. If the link does not work on your cell phone, please try to press and hold the link to open it in your internet browser.</p>
                            <p className="text-start mb-[10px]">If you have not received a notification, then your zip code is in a region which is supplied by our external forwarding partner. Unfortunately, for technical reasons, it is not yet possible to communicate exact delivery times for this delivery zone. We hope to be able to offer this in the near future.</p>
                            <p className="text-start mb-[50px]">If you have any further questions about the delivery status, please give us a call or send us an email. (service@farmy.ch / 043 300 86 60)</p>
                        </AccordionItem>
                        <AccordionItem question="Liability in case of late delivery">
                            <p className="text-start mb-[50px]">If your delivery has not been delivered within the chosen delivery time slot, you have the right to refuse the delivery and ask for a refund.</p>
                        </AccordionItem>
                        <AccordionItem question="Collection of your order in our offices">
                            <p className="text-start mb-[50px]">The collection of your order at our offices is not possible.</p>
                        </AccordionItem>
                        <AccordionItem question="Guaranty of the cold chain">
                            <p className="text-start mb-[20px]">Our frozen products are delivered in cooling bags with dry ice so that they remain frozen when they reach you. For this costly delivery we charge a dry ice fee of CHF 5 as a cost participation. This is not a deposit, but a fee, as frozen transport is very costly.</p>
                            <p className="text-start mb-[20px]">You can return the packing material, but the dry ice is not reusable.</p>
                            <p className="text-start mb-[50px]">Caution is required upon receipt of dry ice products! Use gloves! Dry ice = -78°C! Direct contact with unprotected skin can result in serious frostbite. Dry ice is not to be toyed with and should be kept away from children!</p>
                        </AccordionItem>
                        <AccordionItem question="Specific wishes for the delivery time">
                            <p className="text-start mb-[50px]">It is unfortunately not possible to take into account request for an order to be delivered at a specific time, as the routes are optimized in terms of time and energy use so that they remain fast and ecological.</p>
                        </AccordionItem>
                    </div>
                ) : category === "payment" ? (
                    <div className="flex flex-col w-[100%] gap-5">
                        <AccordionItem question="How can I pay?">
                            <p className="text-start mb-[50px]">We offer various payment methods: Twint, Master and Visa cards, invoice via CembraPay (after automated credit score check), PayPal, Postfinance Card and Postfinance E-Finance as well as American Express and Pointspay.</p>
                        </AccordionItem>
                        <AccordionItem question="How is my payment information protected?">
                            <p className="text-start mb-[50px]">Datatrans has been the Swiss market leader as a Payment Service Provider (PSP) since its foundation in 2001, with more than 4'500 clients and 126 million transactions in 2019. They are specialized in the technical payment processing and e-commerce. As an independent PSP, Datatrans works with a great number of financial institutes and services.</p>
                            <p className="text-start mb-[50px]">Datatrans has been certified since 2006 with the highest Level 1 of the Payment-Card-Industry-Standards (PCI DSS) and thus fulfils the strictest security standards to protect banking information.</p>
                        </AccordionItem>
                        <AccordionItem question="Payment problems">
                            <p className="text-start mb-[50px]">For all payment problems, please contact our customer care team.</p>
                        </AccordionItem>
                        <AccordionItem question="Payment via credit card">
                            <p className="text-start mb-[50px]">Your credit card will be charged with the amount of the order. Depending on the delivery date chosen, this may be several days before the arrival of the delivery.</p>
                        </AccordionItem>
                        <AccordionItem question="Bonus eggs">
                            <p className="text-start mb-[50px]">Thanks to our bonus eggs program, you collect a bonus egg for each franc you spend during your orders with Farmy. Once you have collected 500 eggs, you can convert them into a credit of CHF 5,- in your customer account or donate it to one of the charitable organisations partnering with us. You can find more details by clicking on "bonus eggs" in your client account.</p>
                        </AccordionItem>
                    </div>
                ) : category === "products" ? (
                    <div className="flex flex-col w-[100%] gap-5">
                        <AccordionItem question="How can I find a product?">
                            <p className="text-start mb-[50px]">Click on the category of products that interests you. The corresponding page will open and you can add the products to your basked and select the quantity you want. You can also search by typing in the product name in the search bar. After that, add the products to your basket and select the quantity you want.</p>
                        </AccordionItem>
                        <AccordionItem question="How is meat and fish delivered?">
                            <p className="text-start mb-[50px]">Our meat and fish products are delivered in vacuumed packages for hygienic reasons, packed in cooling bags with cooling elements (cool pads). Products may also be deep-frozen, with the exception of products that are already thawed (please check the product description).</p>
                        </AccordionItem>
                        <AccordionItem question="Change of vintage for the wine">
                            <p className="text-start mb-[50px]">Why does the weight of certain products say "approximate"?</p>
                        </AccordionItem>
                        <AccordionItem question='Why does the weight of certain products say "approximate"?'>
                            <p className="text-start mb-[50px]">These are products for which the price depends on the exact weight of the product that is delivered to us by our producer and that you finally receive. For products in the shop that have an "approx." weight, you will be charged the price for the exact weight. We will charge you an additional amount at checkout and the difference will be credited back to your Farmy account on the day of delivery or charged directly to your payment method. The basic price per unit of measurement is shown on the product page directly under the product name.</p>
                        </AccordionItem>
                        <AccordionItem question='From farm to table'>
                            <p className="text-start mb-[50px]">Our products are delivered fresh by the producers in the morning for afternoon deliveries and the evening before for a morning delivery.</p>
                        </AccordionItem>
                        <AccordionItem question='bio labels'>
                            <p className="text-start mb-[50px]">68% of our products are certified organic ("bio"); the specific certification or seal of approval is noted on each product page.</p>
                        </AccordionItem>
                        <AccordionItem question='Product availability'>
                            <p className="text-start mb-[50px]">Our products are freshly delivered every morning by our producers. We can thus guarantee the freshness of our products and the correct quantity of harvested products according to the orders. Some products may be missing depending on the weather conditions, production or logistical issues. We will then try to replace these products with an equivalent level of quality and value. If a product is suddenly unavailable and not replacable, we will credit the price of the product to your Farmy client account. In both cases, we will inform you by mail before your delivery.</p>
                            <p className="text-start mb-[50px]">If, during checkout, all your products are indicated as "not available in your region": it is simply a technical bug. Please type in your postal code on the homepage on the top left and the refresh the page. The products should then be marked as available.</p>
                        </AccordionItem>
                    </div>
                ) : (
                    <div className="h-[100px]"></div>
                )}
        </div>
    )
}