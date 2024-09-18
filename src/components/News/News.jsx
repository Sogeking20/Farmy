export default function News({ name, description, img, country, id, flag }) {

    return (
        <a href={`/our-producers/${id}`}>
            <div className="group max-w-[540px] w-[100%] h-[250px] flex">
                <img className="w-[45%]" src={img} alt="" />
                <div className="w-[55%] h-[100%] relative group-hover:bg-[rgb(145,136,121)] group-hover:text-white p-3 text-[13px]">
                    <p>{name}</p>
                    <p className="mt-[5px] text-[#999999] group-hover:text-white">{description}</p>
                    <div className="absolute bottom-3 left-3 flex gap-3 items-center">
                        <img className="w-[30px] h-[30px]" src={flag} alt="" />
                        <p className="text-[14px]">{country}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}