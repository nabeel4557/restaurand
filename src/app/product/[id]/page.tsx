import Image from "next/image";
import React from "react";
import { singleProduct } from "../../../data";
import Price from "@/src/components/Price";

function SingleProductPage() {
    return (
        <div className="p-4 lg:p-20 xl:p-40 h-screen flex flex-col justify-around md:flex-row">
            {/* image container */}
            {singleProduct.img && (
                <div className=" relative w-full h-1/2">
                    <Image
                        src={singleProduct.img}
                        alt=""
                        fill
                        className=" object-contain"
                    />
                </div>
            )}
            {/* text cointainer */}
            <div className=" h-1/2">
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price
                    price={singleProduct.price}
                    id={singleProduct.id}
                    options={singleProduct.options}
                />
            </div>
        </div>
    );
}

export default SingleProductPage;
