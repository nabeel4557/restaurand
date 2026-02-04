import React from "react";

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
};
function Price({ price, id, options }: Props) {
    return (
        <div>
            <h2>${price.toFixed(2)}</h2>
            {/* options cointainer */}
            <div className="">
                {options?.map((option) => (
                    <button key={option.title}>{option.title}</button>
                ))}
            </div>
            {/* quantity and add button cointainer */}
            <div className="">
                {/* quantity */}
                <div className="">
                    <span>Quantity</span>
                    <button>{"<"}</button>
                    <span>1</span>
                    <button>{">"}</button>
                </div>
                {/* cart button  */}
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Price;
