import { Divider } from "antd";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import Product from "../../components/Product/Product";

export default function Favorites() {
    const { favorites } = useContext(CartContext);
    return (
        <>
            <div className="w-[100%] mx-[auto] my-[40px] px-5 md:max-w-[720px] lg:max-w-[1140px]">
                <div className="w-[100%] mb-[40px]">
                    <img className="w-[100%] block md:hidden" src="https://d23qaq2ahooeph.cloudfront.net/assets/profiles/banners/Save-Favourites-Banner-mobile_en-d69752cedcf5bcd6844f03d980fab498e24fcd034b28ba698b44078c8c0db700.png" alt="" />
                    <img className="w-[100%] hidden md:block" src="https://d23qaq2ahooeph.cloudfront.net/assets/profiles/banners/Save-Favourites-Banner-desktop_en-e0f6c0f29fcadc1af7667485eeae1f6340a530dc9fe0b24ff2412212f2263ed8.png" alt="" />
                </div>
                <Divider className="border-black" />
                <p className="text-[18px] text-[#107431]">Alex's favorites</p>
                <div className="w-[100%] grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {favorites?.length > 0 ? (
                        favorites.map((product) => {
                            console.log(product)
                            return (
                                <div key={product.id} className="h-[335px]">
                                  <Product
                                    img={product.img}
                                    name={product.name}
                                    priceAfrer={product.price}
                                    description={product.description}
                                    // supplier={packaging?.value}
                                    id={product?.id}
                                  />
                                </div>
                              );
                        })
                    ) : <p>qwe</p> }
                </div>
            </div>  
        </>
    )
}