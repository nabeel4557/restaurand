import Image from "next/image";
import React from "react";
import { featuredProducts } from "@/data";

function Featured() {
    return (
        <div className="w-screen overflow-x-scroll text-red-500 bg-white">
            {/* wrapper */}
            <div className="w-max flex">
                {/* single item */}
                {featuredProducts.map((item) => (
                    <div
                        key={item.id}
                        className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300">
                        {/* image cointainer */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image
                                    src={item.img}
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                        {/* text container */}
                        <div className="flex-1 flex flex-col items-center text-center gap-4">
                            <h1 className="text-xl font-bold uppercase">
                                {item.title}
                            </h1>
                            <p className="p-4">{item.desc}</p>
                            <span className="text-xl font-bold">
                                {item.price}
                            </span>
                            <button className="bg-red-500 text-white p-2 rounded-md">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Featured;
