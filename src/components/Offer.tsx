import Image from "next/image";
import React from "react";

function Offer() {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row">
            {/* text container  */}
            <div className=" flex-1 flex flex-col text-center items-center justify-center gap-8 p-6">
                <h1 className=" text-white font-bold text-5xl md:text-6xl ">
                    Delicious Burger & French Fry
                </h1>
                <p className=" text-white">
                    Progressively simplify effective e-toilers and
                    process-centric methods of empowerment. Quickly pontificate
                    parallel.
                </p>
                <button>Order Now</button>
            </div>
            {/* image container */}
            <div className=" relative flex-1 w-full">
                <Image
                    src="/offerProduct.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default Offer;
