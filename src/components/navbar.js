import React, { useState,useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "../components/index.module.css"
import logo from "../images/logo.png"
import { createPortal } from 'react-dom';

function MenuDesktop(){
    return(
        <div className={styles.navbar__link}>
            <Link className={styles.link} to="#header">Home</Link>
            <Link className={styles.link} to="#menu">Menu</Link>
            <Link className={styles.link} to="#gallery">Gallery</Link>
            <Link className={styles.link} to="#about">About</Link>
        </div>
    )
}
function MenuMobile(){
    const[isOpen,setModal]=useState(false)
    function handletoggle(){
        setModal(!isOpen)
    }
    return(
        <div style={{marginRight:'20px'}} onClick={handletoggle}>
            {
                isOpen===false?
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none">
                    <path d="M1.25 5.625H33.75C34.4404 5.625 35 5.06539 35 4.375V1.25C35 0.559609 34.4404 0 33.75 0H1.25C0.559609 0 0 0.559609 0 1.25V4.375C0 5.06539 0.559609 5.625 1.25 5.625ZM1.25 18.125H33.75C34.4404 18.125 35 17.5654 35 16.875V13.75C35 13.0596 34.4404 12.5 33.75 12.5H1.25C0.559609 12.5 0 13.0596 0 13.75V16.875C0 17.5654 0.559609 18.125 1.25 18.125ZM1.25 30.625H33.75C34.4404 30.625 35 30.0654 35 29.375V26.25C35 25.5596 34.4404 25 33.75 25H1.25C0.559609 25 0 25.5596 0 26.25V29.375C0 30.0654 0.559609 30.625 1.25 30.625Z" fill="#AC8000"/>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M24.1341 17.5L34.0842 7.54986C35.3053 6.32883 35.3053 4.34915 34.0842 3.12713L31.8729 0.915767C30.6518 -0.305256 28.6722 -0.305256 27.4501 0.915767L17.5 10.8659L7.54986 0.915767C6.32884 -0.305256 4.34915 -0.305256 3.12713 0.915767L0.915767 3.12713C-0.305256 4.34815 -0.305256 6.32784 0.915767 7.54986L10.8659 17.5L0.915767 27.4501C-0.305256 28.6712 -0.305256 30.6509 0.915767 31.8729L3.12713 34.0842C4.34815 35.3053 6.32884 35.3053 7.54986 34.0842L17.5 24.1341L27.4501 34.0842C28.6712 35.3053 30.6518 35.3053 31.8729 34.0842L34.0842 31.8729C35.3053 30.6518 35.3053 28.6722 34.0842 27.4501L24.1341 17.5Z" fill="#AC8000"/>
                </svg>
            }
            {
                isOpen===true&&createPortal(
                    <ModalMenu/>,
                    document.getElementById("navbar")
                )
            }
        </div>
    )
}
function ModalMenu(){
    return(
        <div className={styles.navbar__modal}>
            <Link className={styles.link} to="#header">Home</Link>
            <Link className={styles.link} to="#menu">Menu</Link>
            <Link className={styles.link} to="#gallery">Gallery</Link>
            <Link className={styles.link} to="#about">About</Link>
        </div>
    )
}
function Navbar(){
    const [device,setDevice]=useState('');

    useEffect(()=>{
        updateMedia()
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    })
    function updateMedia(){
        if(window.innerWidth<828){
            setDevice('mobile')
        }else{
            setDevice('desktop')
        }
    }
    return(
        <>  
            <img className={styles.navbar__logo} src={logo} alt="Curiosity by Intrinsic logo" />
            {
                device==='desktop'?<MenuDesktop/>:<MenuMobile/>
            }
        </>
    )
}
export default Navbar;
