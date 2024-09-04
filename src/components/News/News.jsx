export default function News() {

    return (
        <div className="group max-w-[540px] w-[100%] h-[250px] flex">
            <img className="w-[40%]" src="https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/1356/large/tutus-tanja-und-sabrina-farmy-ch-a.jpg?1559663254" alt="" />
            <div className="w-[60%] h-[100%] relative group-hover:bg-[rgb(145,136,121)] group-hover:text-white p-3 text-[13px]">
                <p>Tutu’s Food</p>
                <p className="mt-[5px] text-[#999999] group-hover:text-white">Tutu’s ice pops were created by the two friends Tatiana Weber and Sabrina Zakowski in 2017 out of passion for good and healthy food. Tutu’s ice pops were created by the two friends Tatiana Weber and Sabrina Zakowski in 2017 out of passion for good and healthy food. The de...</p>
                <div className="absolute bottom-3 left-3 flex gap-3 items-center">
                    <img className="w-[30px] h-[30px]" src="https://www.farmy.ch/flags/v2/50/arm-zurich.png" alt="" />
                    <p className="text-[14px]">Zurich</p>
                </div>
            </div>
        </div>
    )
}