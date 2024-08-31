import React from 'react';

const Header = () => {
  return (
    <header className='hidden md:block w-[100vw] border-b border-[#27aa55] fixed z-[1000] top-0 left-0'>
        <div className='bg-white font-[signika]'>
            <div className='container flex justify-between items-center h-[100px] '>
                <div className="flex gap-[50px] items-center">
                    <a href="/"><img className='w-[80px] h-[80px]' src="https://d23qaq2ahooeph.cloudfront.net/assets/farmy_main_logo_2021-a4bb04c0a7b06ab668a55ef622c39f24d2823a490ffcc37a18ed1eced70df81c.svg" alt="" /></a>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 text-[12px]">
                            <p>de/fr/en</p>
                            <p>Zürich</p>
                            <p>Next delivery date</p>
                        </div>
                        <div className="flex gap-3 font-bold text-[16px]">
                            <a href='#' className='hover:text-[#F4991A]'>Market</a>
                            <a href='#' className='hover:text-[#F4991A]'>Barbecue</a>
                            <a href='#' className='hover:text-[#F4991A]'>Best Price</a>
                            <a href='#' className='hover:text-[#F4991A]'>Offers</a>
                            <a href='#' className='hover:text-[#F4991A]'>Save Me</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-end">
                    <div className="text-end">
                        <a href='/login' className='text-[16px] font-bold hover:text-[#F4991A]'>Log in</a>
                    </div>
                    <div className="flex gap-3">
                        <button className='w-[140px] border'>Search...</button>
                        <button className='w-[140px] border'>(0)CHF 0</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#107433] py-2">
            <div className="max-w-[1240px] mx-[auto] flex justify-between gap-3 text-[12px] text-[#FFFFFF] text-center items-center">
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Fruits & vegetables</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Butchery & fish market</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Milk, cheese & eggs</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Bakery & confectionery</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Ready meals</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Pantry</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Frozen</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Drinks</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Wine cellar</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Baby & child</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Pet supplies</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Household & cosmetics</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Household & cosmetics</a>
                <a href='#' className="text-[12px] text-white font-bold hover:text-[#F4991A]">Flowers & gardening</a>
            </div>
        </div>
    </header>
  );
};

export default Header;