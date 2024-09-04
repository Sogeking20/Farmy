export default function ProducerCard() {
    return(
        <div className="group relative cursor-pointer w-[100%] h-[450px] bg-no-repeat bg-cover md:h-[230px] lg:h-[220px] rounded-xl overflow-hidden bg-[url('https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/1828/thumb/1701_franciacorta-1.jpg')]">
            <div className="absolute left-0 top-0 w-[100%] transition-all h-[100%] bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0)]"></div>
            <div className="absolute left-0 top-[35%] flex flex-col justify-center w-[100%] transition-all h-[33%] bg-[rgba(0,0,0,0.5)] group-hover:top-[69%] text-white">
                <p className="text-[16px] mb-[5px]">1701 Franciacorta</p>
                <div className="flex gap-1 text-[13px] items-center justify-center">
                    <img className="w-[20px]" src="https://www.farmy.ch/flags/v2/50/arm-italy.png" alt="" />
                    <p>Cazzago San Martino, Italy</p>
                </div>
            </div>
        </div>
    )
}