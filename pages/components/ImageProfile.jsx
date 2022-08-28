import React from "react";
import Image from "next/dist/client/image";
import styles from '../styles/Home.module.css'
export function ImageProfile(src){
    return (<div className={styles.ProfileFrame}>
        <Image src={src} layout='responsive' alt="Here goes an image"></Image>
    </div>);
} 