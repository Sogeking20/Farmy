import { Link } from 'react-router-dom';

export default function ProducerCard({name, img, sub_url}) {
    return(
        <Link to={"/our-producers/1"}>
            <div className="group relative cursor-pointer w-[100%] h-[450px] bg-no-repeat bg-cover md:h-[230px] lg:h-[220px] rounded-xl overflow-hidden bg-[url('https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/farmy/suppliers/2671/thumb/New_Producers_500x500.jpg?1710520603')]">
                <div className="absolute left-0 top-0 w-[100%] transition-all h-[100%] bg-[rgba(0,0,0,0.5)] group-hover:bg-[rgba(0,0,0,0)]"></div>
                <div className="absolute left-0 top-[35%] flex flex-col justify-center w-[100%] transition-all h-[33%] bg-[rgba(0,0,0,0.5)] group-hover:top-[69%] text-white">
                    <p className="text-[16px] mb-[5px]">{name}</p>
                    <div className="flex gap-1 text-[13px] items-center justify-center">
                        <img className="w-[20px]" src="https://www.farmy.ch/flags/v2/50/arm-italy.png" alt="" />
                        <p>Cazzago San Martino, Italy</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}