import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="flex items-center justify-between text-red-500 lg:p-20 xl:p-40">
            <Link href="/" className="font-bold text-xl">
                MASSIMO
            </Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
}

export default Footer;
