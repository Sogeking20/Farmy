import React, { useRef } from 'react';

export default function Convince() {
    const FreshProduce = useRef(null);
    const MoreTransparency = useRef(null);
    const FromSwitzerland = useRef(null);
    const OurOrganicProducts = useRef(null);
    const OurLoyaltyProgram = useRef(null);
    const DailyEnvironmentalProtection = useRef(null);
    const AboutUs = useRef(null);
    const DeliveryZone = useRef(null);

    const scrollFreshProduce = () => {
      if (FreshProduce.current) {
        FreshProduce.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollMoreTransparencyt = () => {
    if (MoreTransparency.current) {
        MoreTransparency.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollFromSwitzerland = () => {
        if (FromSwitzerland.current) {
            FromSwitzerland.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollOurOrganicProducts = () => {
        if (OurOrganicProducts.current) {
            OurOrganicProducts.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollOurLoyaltyProgram = () => {
        if (OurLoyaltyProgram.current) {
            OurLoyaltyProgram.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollDailyEnvironmentalProtection = () => {
        if (DailyEnvironmentalProtection.current) {
            DailyEnvironmentalProtection.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollAboutUs = () => {
        if (AboutUs.current) {
            AboutUs.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollDeliveryZone = () => {
        if (DeliveryZone.current) {
            DeliveryZone.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-[940px] w-[100%] mx-auto px-5">
            <img src="https://www.farmy.ch/ct/wp-content/uploads/2021/04/EN-Springboost_LP-Desktop-1024x229.png" alt="" />
            <div className="w-[100%] mt-[50px]">
                <p className="text-[20px] font-bold">With thousands of products from more than 1,200 authentic producers, Farmy provides you with fine, fresh food throughout Switzerland. Because it’s better.</p>
                <img src="https://www.farmy.ch/ct/wp-content/uploads/2021/04/How-It-Works_ENG-ZH-1-1024x294.png" alt="" />
                <p className="text-[16px] mt-[100px] mb-[20px]">Thanks to our sophisticated logistics concept, we deliver your goods 2-5 days fresher than they are available in the supermarket – and that completely plastic-free in the fresh produce section! To achieve this, we pack products such as spinach, carrots or parsnips in compostable bags. We also take the packagings and the deposit back – you just need to give them to the courier upon receiving your next order.</p>
                <button className="w-[115px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">Try now</button>
            </div>
            <div className="w-[100%] mt-[50px]">
                <div className="mb-20">
                    <p className="text-[20px] font-bold mb-5">Welcome to the Farmy Family!</p>
                    <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 text-center text-white font-bold gap-x-8 gap-y-2">
                        <div onClick={scrollFreshProduce} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">Fresh produce</div>
                        <div onClick={scrollMoreTransparencyt} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">More transparency</div>
                        <div onClick={scrollFromSwitzerland} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">From Switzerland</div>
                        <div onClick={scrollOurOrganicProducts} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">Our organic products</div>
                        <div onClick={scrollOurLoyaltyProgram} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">Our Bonus Eggs program</div>
                        <div onClick={scrollDailyEnvironmentalProtection} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">Daily environmental protection</div>
                        <div onClick={scrollAboutUs} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">About Farmy</div>
                        <div onClick={scrollDeliveryZone} className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">Do you know your delivery zone?</div>
                        <div className="bg-[#107433] py-2 rounded-xl cursor-pointer hover:bg-[#F4991A]">To the Online Market</div>
                    </div>
                </div>
                <div ref={FreshProduce} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">More freshness directly from the producer</p>
                    <p className="text-[16px] mb-5">Farmy offers the <strong>largest selection of fresh food in Switzerland</strong>. Nowhere else will you find such a wide range of fresh and authentic products, for which you would otherwise have to travel long distances and wait. Most of our fruits and vegetables come from Switzerland, but you will also find food from abroad, as the enjoyment of coffee or the consumption of avocados is desired by many. In order to be able to meet the wishes of our customers but still follow our philosophy, we have been very careful in the selection process to find producers that fit our requirements. Thus, we can also offer bananas etc. with a clear conscience.</p>
                    <button className="w-[215px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">To the Online Market</button>
                </div>
                <div ref={MoreTransparency} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">More transparency at a glance</p>
                    <p className="text-[16px] mb-5"><strong>Transparency</strong> is a top priority at Farmy. For each product, you will find detailed information about the origin and the producer. No complicated code system or encrypted advertising promises. We carefully examine in advance whether the products fit into our assortment and call our producers by their (first) name!</p>
                    <button className="w-[260px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">Get to know our producers</button>
                </div>
                <div ref={FromSwitzerland} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Most of our assortment comes from Switzerland</p>
                    <p className="text-[16px] mb-5">We receive our regional products directly from the producer and only on the day of delivery. This unique logistics concept without intermediate storage means that your food is <strong>up to 5 days fresher than at the supermarket</strong>. This system also eliminates the costs associated with large warehouses and their operation, thus reducing emissions.</p>
                    <button className="w-[215px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">From Switzerland</button>
                </div>
                <div ref={OurOrganicProducts} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Our organic range</p>
                    <p className="text-[16px] mb-5">From CH-Bio and Bio Suisse Knospe to Demeter and KAGfreiland, Farmy has everything you need for your weekly shopping – <strong>also in organic quality</strong>. With many certified organic products, the choice is vast – and not only in the fresh assortment! Our butchers, bakers and other producers also offer a wide range of certified products.</p>
                    <button className="w-[215px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">From Switzerland</button>
                </div>
                <div ref={OurLoyaltyProgram} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Our loyalty program</p>
                    <p className="text-[16px] mb-5">With our Bonus Eggs program, you collect Bonus Eggs with every purchase at Farmy - one egg for every franc spent. Once you have collected 500 Bonus Eggs, you can convert them into CHF 5 credit for your Farmy account or donate them to one of our partner associations.</p>
                    <div className="flex gap-3">
                        <button className="px-5 h-[50px] bg-[#F26F00] text-white font-bold rounded-3xl">Register</button>
                        <button className="px-5 h-[50px] bg-[#F26F00] text-white font-bold rounded-3xl">View Bonus-Eggs</button>
                    </div>
                </div>
                <div ref={DailyEnvironmentalProtection} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Environmental protection in everyday practice</p>
                    <p className="text-[16px] mb-5">Every purchase at Farmy actively saves CO2, as we have been able to prove in a study verified by MyClimate and the ZHAW. In many areas, we already deliver your groceries with <strong>our own fleet of environmentally friendly e-mobiles</strong>. Our producers only deliver what has been ordered. This means we can spare large warehouses, avoid food waste and save resources.</p>
                    <img className="hidden md:block" src="https://www.farmy.ch/ct/wp-content/uploads/2020/12/Text_ENG-Climate-min-1024x124.png" alt="" />
                    <img className="md:hidden" src="https://www.farmy.ch/ct/wp-content/uploads/2020/12/Mobile-ENG-Climate-min-1024x966.png" alt="" />
                    <button className="w-[215px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm mt-[30px]">Environmental protection</button>
                </div>
                <div ref={AboutUs} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Why do we do what we do at Farmy?</p>
                    <p className="text-[16px] mb-5">In few word: <strong>save the world</strong>, of course! We believe that this can only be achieved through many small steps. For example, through the direct purchase of products, through fair trade, transparent food origin, high quality standards, regional products, avoidance of food waste, recycling resources and reducing emissions.</p>
                    <button className="w-[215px] h-[40px] bg-[#F4991A] text-white font-bold rounded-sm">About us</button>
                </div>
                <div ref={DeliveryZone} className="w-[100%] mb-[100px]">
                    <p className="text-[20px] font-bold mb-3">Do you know your delivery zone?</p>
                    <p className="text-[16px] mb-5">If you want to know your delivery zone, simply go to the top left of the website, enter your zip code and see your delivery zone on the top right of the screen.</p>
                    <p className="text-[20px] mb-3">Zone A</p>
                    <p className="text-[16px] mb-5">If you find yourself in Zone A, this means that delivery is free for you! You can order your groceries (with only CHF 79 minimum order value) and receive them without any delivery costs right to your door as early as the next day!</p>
                    <img src="https://www.farmy.ch/ct/wp-content/uploads/2021/06/Delivery-zone-EN-1-1024x419.png" alt="" />
                    <p className="text-[20px] mb-3">Zone B</p>
                    <p className="text-[16px] mb-5">If you are in Zone B, it means that you benefit from free delivery until 31.08.2021! After the promotion, you benefit from free delivery for every order above CHF 120 (with no minimum order value on your first order! Afterwards, it’s only CHF 79 minimum). Or check our Hofpass for more delivery options!</p>
                    <p className="text-[20px] mb-3">Zone C</p>
                    <p className="text-[16px] mb-5">If your delivery zone is our Zone C, you can benefit from free delivery for every order above CHF 300. Or check our Hofpass for more delivery options! The minimum order value stays the same as in Zone A & B: It’s only CHF 79!</p>
                </div>
            </div>
        </div>
    )
} 