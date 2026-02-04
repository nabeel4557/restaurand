import React from "react";
import { menu } from "../../data";
import Link from "next/link";

function MenuPage() {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[600] md:h-[700px] flex flex-col md:flex-row items-center">
            {menu.map((category) => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className="w-full h-1/3 bg-right  p-8 md:h-1/2 "
                    style={{ backgroundImage: `url(${category.img})` }}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className=" font-bold text-2xl">
                            {category.title}
                        </h1>
                        <p className="text-sm my-8">{category.desc}</p>
                        <button
                            className={` hidden md:block bg-${category.color}  text-${category.color === "black" ? "white" : "red-500"} text-red-500 py-2 px-4 rounded-md`}>
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MenuPage;
