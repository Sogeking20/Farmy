export default function FarmyPass() {

    return (
        <>
            <div className="w-[100vw] h-[200px] bg-[url('https://www.farmy.ch/frontend_assets/images/shared/pages/farmy-pass/Desktop-Header-Banner.png')] bg-cover bg-center">
                <p className="text-[30px] sm:text-[40px] max-w-[450px] w-[100%] mx-[auto] text-center pt-[40px] font-bold text-white">Enjoy exclusive benefits with our Farmy Pass!</p>
            </div>
            <div className="container">
                <h1 className="text-[24px] text-center font-semibold my-[50px]">Unlock a world of benefits with the Farmy Pass, valid for every order above CHF 159!</h1>
                <div className="w-[100%] flex gap-10 flex-wrap items-center mx-5 justify-center">
                    <div className="w-[280px] flex flex-col text-center items-center">
                        <img className="mb-[5px] w-[35px] h-[35px]" src="https://www.farmy.ch/resources/farmy/images//components/farmy-pass/FarmyPassBenefits/Desktop-Bag.png" alt="" />
                        <p className="text-[24px] mb-[20px] text-[#107433]">Double Bonus Eggs</p>
                        <p className="text-[17px] font-semibold">Earn double Bonus Eggs on every order and convert them directly into credit on Farmy.</p>
                    </div>
                    <div className="w-[280px] flex flex-col text-center items-center">
                        <img className="mb-[5px] w-[50px] h-[35px]" src="https://www.farmy.ch/resources/farmy/images//components/farmy-pass/FarmyPassBenefits/Desktop-Truck.png" alt="" />
                        <p className="text-[24px] mb-[20px] text-[#107433]">Free delivery for narrow windows</p>
                        <p className="text-[17px] font-semibold">Say goodbye to the CHF 2.90 extra charge for narrow delivery windows and receive your fresh groceries precisely when you need them.</p>
                    </div>
                    <div className="w-[280px] flex flex-col text-center items-center">
                        <img className="mb-[5px] w-[35px] h-[35px]" src="https://www.farmy.ch/resources/farmy/images//components/farmy-pass/FarmyPassBenefits/Desktop-Gift.png" alt="" />
                        <p className="text-[24px] mb-[20px] text-[#107433]">Exclusive gift for annual subscriptions</p>
                        <p className="text-[17px] font-semibold">If you subscribe to an annual Farmy Pass, you will receive an exclusive surprise gift from us to say thank you for choosing us all year round.</p>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] h-[150px] mt-[50px] mb-[100px] bg-[#E4EBE6]">
                <p className="text-[32px] text-center font-bold pt-[30px]">Find the perfect solution for you</p>
            </div>
            <div className="w-[100%] flex flex-col items-center">
                <button disabled className="w-[290px] h-[56px] mb-[50px]  text-white text-center py-3 font-bold bg-[#107433] rounded-sm">Get your Farmy Pass</button>
                <p className="text-[14px] text-[#999999] text-center mb-[50px] max-w-[460px] w-[100%]">By continuing with the payment process, you agree to our <a className="underline" href="terms-and-conditions">terms and conditions</a> and confirm that you have taken note of our <a className="underline" href="terms-and-conditions">revocation policy</a> and <a className="underline" href="terms-and-conditions">privacy policy</a>.</p>
            </div>
        </>
    );
}