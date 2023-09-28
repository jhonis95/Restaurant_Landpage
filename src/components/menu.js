import * as React from "react"
import * as styles from "./index.module.css"
import data from "../content/data.json"
import { useState } from "react";
import CardContainer from "../templates/cardContainer";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "gatsby";


function TypeContainer({activeMenu}){
    const menu=data.restaurant.menu;
    return(
        <section className={styles.container__menu}>
            {
                menu.map((dishType)=>{
                    return(
                        <button 
                            className={styles.text__dishes}
                            onClick={()=>{activeMenu(dishType.title)}}
                            key={uuidv4()}
                        >
                            {dishType.title}
                        </button>
                    )
                })
            }
            <Link to="">{data.restaurant.bubleeTea.title}</Link>
        </section>
    )
}
function Menu(device){
    const [activeMenu,setActiveMenu]=useState("appetizer");
    return(
        <>
            <h2 className={styles.subMenu}>Menu</h2>
            <TypeContainer activeMenu={setActiveMenu}/>
            <CardContainer activeMenuIs={activeMenu} device={device}/>
        </>
    )
}

export default Menu;
