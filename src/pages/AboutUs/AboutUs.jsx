import React, { useRef } from 'react';

export default function AboutUs() {

    return (
        <div className="w-[100vw]">
            <img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/04/EN_Header_Desktop-1536x440.png" alt="" />
            <div className='max-w-[940px] w-[100%] px-5 mx-auto'>
                <div className="w-[100%] mt-[50px] text-center">
                    <h3 className='text-[32px] font-bold'>Weekly grocery shopping made easy</h3>
                    <p className='text-[20px] text-start mt-[20px] mb-[50px]'>At Farmy you’ll find everything you need for your complete weekly shopping. Our range includes a wide variety of fruits and vegetables – mostly organic – a huge assortment of cheeses from Swiss cheese dairies, the largest selection of butcher-quality meats, crispy delicacies and sweet temptations from real bakers and confectioners, products for the pantry and drugstore items. In addition to fresh farm shop products and organic goods, Farmy also offers a selected range of brands to allow the entire weekly shopping in one place in an easy and transparent way.</p>
                    <iframe className='w-[100%] h-[500px]' src="https://www.youtube.com/embed/GbQ-G1nXGSU?si=kKVWP7Ponywb_dNS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="w-[100vw] my-[50px] h-[330px] bg-no-repeat bg-cover bg-center bg-[url('https://www.farmy.ch/ct/wp-content/uploads/2023/09/Producer-Image-Desktop-1536x293.jpg')]"></div>
            <div className="max-w-[900px] w-[100%] px-5 mx-auto mt-[100px] flex flex-col items-center">
                <h3 className='text-[32px] font-bold text-center mb-[50px]'>Farmy offers you</h3>
                <div className="grid grid-cols-3 gap-x-20 gap-y-10">
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Map.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Bio-Assortment-2.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Brand-Assortment-2.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Grocery.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Computer.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <img className='w-[100px]' src="https://www.farmy.ch/ct/wp-content/uploads/2023/08/Icon-Door.png" alt="" />
                        <p className='text-[20px]'>the <span className='text-[#107433]'>largest farm shop, regional and fresh assortment</span></p>
                    </div>
                </div>
                <button className='border-[3px] border-[#107433] text-[#107433] text-[24px] font-bold rounded-md px-[40px] py-[10px] my-[80px]'>Discover the range</button>
            </div>
            <div className='hidden md:flex w-[100vw] h-[330px] bg-no-repeat justify-center text-center mb-[100px] bg-[url("https://www.farmy.ch/ct/wp-content/uploads/2023/07/Wavy-Green-Background-1536x273.png")]'>
                <p className='text-[24px] max-w-[940px] w-[100%] text-white font-bold text-center relative top-[70px] px-[20px]'>With Farmy, you always have your online market with you, conveniently via the app. Decide for yourself which producers you want to support and when we deliver your products.</p>
            </div>
            <div className="max-w-[940px] w-[100%] px-5 mx-auto mt-[100px] flex flex-col items-center mb-[50px]">
                <h3 className='text-[32px] font-bold text-center mb-[50px]'>The farmylosophy</h3>
                <div className="max-w-[940px] w-[100%] mx-[auto] flex flex-col gap-[50px] text-[20px] text-[#333] font-semibold">
                    <p>We supply households throughout Switzerland with high-quality and sustainably sourced products for organic, regular and complete weekly shopping. This way, we maintain the variety of products and food producers throughout Switzerland that you can really trust.</p>
                    <p>In doing so, we act according to the motto “As close as possible, as far away as necessary.” At least 50 % of our products come from the region within 80 km of our HUB in Zurich. In addition, we obtain our regional products directly from the producers – and only on the day of delivery. This unique logistics concept without intermediate storage means that your food is 3 to 4 days fresher than in the supermarket. Only what has been ordered is delivered. This saves large refrigeration and storage facilities and avoids food waste.</p>
                    <p>Thanks to our excellent logistics planning tools, our delivery routes are particularly efficient and we deliver to as many customers as possible on one tour. You can return the packaging materials from your shopping to our courier for the next delivery – we will then recycle them for you.</p>
                </div>
                <button className='border-[3px] border-[#107433] text-[#107433] text-[24px] font-bold rounded-md px-[40px] py-[10px] my-[80px]'>Convince yourself</button>
            </div>
            <div className='w-[100vw] h-[330px] bg-no-repeat bg-[url("https://www.farmy.ch/ct/wp-content/uploads/2023/08/LP_Temporary-About-us_Section-2_Desktop-1536x293.jpg")]'></div>
            <div className="max-w-[940px] w-[100%] px-5 mx-auto mt-[50px] flex flex-col items-center mb-[50px]">
                <h3 className='text-[32px] font-bold text-center mb-[30px]'>We are B Corp certified!</h3>
                <img src="https://www.farmy.ch/ct/wp-content/uploads/2023/10/EN_B-Corp-Logo_black.png" alt="" />
                <div className="max-w-[940px] w-[100%] mx-[auto] flex flex-col gap-[20px] text-[20px] text-[#333] font-semibold">
                    <p>The name of the certification is composed of the “B” for “benefit” and “Corp” for “Corporation”. B Corp Certification is a designation that a business is meeting high standards of verified performance, accountability and transparency.</p>
                    <p>As a B Corp-certified company, we have been rigorously verified on our transparency, accountability and environmental practices. From the value chain to the materials we use to our donations to charities and bonuses for our employees.</p>
                </div>
                <button className='border-[3px] border-[#107433] text-[#107433] text-[24px] font-bold rounded-md px-[40px] py-[10px] my-[80px]'>To the Farmy BCorp profile</button>
            </div>
            <div className='hidden md:flex w-[100vw] h-[330px] bg-no-repeat justify-center text-center bg-[url("https://www.farmy.ch/ct/wp-content/uploads/2023/07/Wavy-Green-Background-1536x273.png")]'>
                <p className='text-[24px] max-w-[940px] w-[100%] text-white font-bold text-center relative top-[80px] px-[20px]'>With a score of 103.6, Farmy stands out above the average of B Corp-certified companies in Switzerland.</p>
            </div>
            <div className="max-w-[940px] w-[100%] px-5 mx-auto mt-[50px] flex flex-col items-center mb-[100px]">
                <h3 className='text-[32px] font-bold text-center mb-[50px]'>The history of Farmy</h3>
                <div className="max-w-[940px] w-[100%] mx-[auto] flex flex-col gap-[50px] text-[20px] text-[#333] font-semibold">
                    <p>Farmy was founded in 2014 by Roman Hartmann and Tobias Schubert in Zurich and now has over 160 employees at its locations in Zurich as well as in its offices in Berlin and Barcelona. The technology-driven company relies on a sophisticated logistics concept that delivers products freshly and conveniently to customers throughout Switzerland and prevents food waste.</p>
                    <p>As a second pillar, the young company has also founded the all-in-one software solution “Farmy solutions” to help small and medium-sized enterprises get started online. As its first major customer, Alnatura is already on the road in several cities in Germany with its own delivery concept based on the Farmy software.</p>
                </div>
            </div>
        </div>
    )
} 