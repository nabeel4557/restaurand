import Image from "next/image";
import React from "react";

function CartPage() {
    return (
        <div className="">
            {/* product container */}
            <div className="">
                {/* single item  */}
                <div className="">
                    <Image
                        src="/temporary/p1.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <div className="">
                        <h1>sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2>$79.90</h2>
                    <span>X</span>
                </div>
            </div>
            {/* payment container */}
            <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
                <div className="">
                    <span>Subtotal (3 items)</span>
                    <span>$81.70</span>
                </div>
                <div className="">
                    <span>Service Cost</span>
                    <span>$0.00</span>
                </div>
                <div className="">
                    <span className="">Delivery Cost</span>
                    <span className="">FREE!</span>
                </div>
                <hr className="my-2" />
                <div className="">
                    <span className="">TOTAL(INCL. VAT)</span>
                    <span className="">$81.70</span>
                </div>
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 ">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
}

export default CartPage;
