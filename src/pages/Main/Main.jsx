import Product from '../../components/Product/Product'
import { Divider } from 'antd'

function Main() {
  return (
    <>
    <div className="relative w-[100vw] h-[360px] bg-[#107433] text-white">
        <div className='flex flex-col h-[100%] items-center text-center'>
        <div className='mb-[35px] '>
            <h1 className='text-[48px] font-bold outline-black'>The online market that really has everything</h1>
            <p className='text-[35px]'>Your fresh food directly from producers</p>
        </div>
        <a href="/fresh-food-delivered-to-your-door"><button className='text-[25px] py-[10px] px-[20px] bg-[#F4991A] rounded-md font-bold'>Convince yourself</button></a>
        </div>
        <div className="absolute max-w-[1240px] w-[100%] left-[50%] bottom-[-100px] transform -translate-x-1/2 px-10">
        <div className='w-[100%] flex justify-between'>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/01/EN_HPB_weekly-offers-new.webp" alt="" />
            </div>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/EN_BackToSchool.webp" alt="" />
            </div>
            <div className="w-[32%] border rounded-xl overflow-hidden">
            <img className='w-[100%]' src="https://www.farmy.ch/ct/wp-content/uploads/2024/08/Nescafe-new_EN-min-scaled.webp" alt="" />
            </div>
        </div>
        </div>
    </div>
    <div className="w-[100vw] mt-[200px]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>Current offers</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
        </div>
        <button className='w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button>
        <Divider />
        </div>
    </div>
    <div className="w-[100vw] px-5 text-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 max-w-[940px] w-[100%] mx-auto p-[20px] bg-[rgb(223,206,242)] rounded-lg">
        <div className="ml-0 text-center sm:text-start sm:ml-[15%] font-bold text-[20px]">
            <p>Discover a world of benefits with the Farmy Pass:</p>
            <p>Get your first 3 months for free.</p>
        </div>
        <button className='w-[230px] h-[46px] bg-inherit border-[2px] border-black rounded-xl'>Try it now!</button>
        </div>
        <p className='text-center mt-10 text-[24px] font-bold'>The finest products from over 1,200 authentic producers</p>
        <div className="container hidden lg:flex relative flex-col items-center">
        <input className='w-[100%] mt-10 border p-2 rounded-md' type="text" placeholder="'Smoothie', 'Vegan', 'Fruit' or 'Tomatoes'? .."/>
        <button className='absolute right-[23px] top-[23px] w-[20%] h-[37px] mt-5 text-[18px] font-bold bg-[#F4991A] rounded-md text-white'>Search</button>
        </div>
        <Divider style={{marginTop: '70px'}}/>
    </div>
    <div className="w-[100vw]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>New products</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
        </div>
        <button className='w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button>
        <Divider />
        </div>
    </div>
    <div className="w-[100vw]">
        <div className="container flex flex-col items-center">
        <h3 className='text-[20px] font-bold'>Most popular</h3>
        <div className="grid grid-cols-2 mb-[25px] gap-5 mt-[20px] sm:grid-cols-4">
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
            <Product img={'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/36527/product/Colli_del_Soligo-Prosecco_Extra_Dry_Nudo_DOC_75cl-farmy-ch-02.jpg?1697647421'} name={'Prosecco Extra Dry "Nudo" DOC, 75cl'} priceBefore={14.50} priceAfrer={11.90} description={'Cantina Colli del Soligo'}/>
        </div>
        <button className='w-[93px] h-[45px] text-[18px] font-bold bg-[#F4991A] rounded-sm text-white'>More</button>
        <Divider />
        </div>
    </div>
    <div className="w-[940px] mx-auto mb-[50px]">
        <div className="mb-[40px]">
        <h3 className='text-[20px] font-bold text-center mb-[15px]'>Shop from the comfort of your own home</h3>
        <p className='text-[16px] leading-[1.4rem]'>With our online grocery delivery service, you can shop from the comfort of your own home without ever having to leave. We provide you with an easy and fast way to do your shopping online and have the delivery brought right to your doorstep.</p>
        </div>
        <div className="">
        <h3 className='text-[20px] font-bold text-center mb-[15px]'>Fresh and high-quality groceries</h3>
        <p className='text-[16px] leading-[1.4rem]'>Our goal is to always provide you with fresh and high-quality groceries. We work closely with our suppliers to ensure that you receive the best quality possible. Our groceries are carefully selected and packaged to maintain their freshness and are delivered directly to your doorstep.</p>
        </div>
    </div>
    </>
  )
}

export default Main