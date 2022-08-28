import React from "react";
import Image from "next/dist/client/image";
import styles from '../styles/Home.module.css'

export  function ImageProject(src){
    return (< >
        <Image className={styles.imageFrame} src={src}  alt="Here goes an image"></Image>
        
    </>);
} 
 