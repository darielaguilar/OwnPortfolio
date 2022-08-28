import React from "react";
import Link from "next/dist/client/link";
export function NavBar(){
    return (<nav className="nav-bar">
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
    </nav>);
}