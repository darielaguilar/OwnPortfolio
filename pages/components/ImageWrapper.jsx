import React from "react";
import Image from "next/dist/client/image";

export function ImageWrapper(src){
    return (<div>
        <Image src={src} layout='responsive' alt="Here goes an image"></Image>
    </div>);
} 