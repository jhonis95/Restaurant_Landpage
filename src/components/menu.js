import * as React from "react"
import * as styles from "./index.module.css"
import data from "../content/data.json"
import { useState } from "react";
import CardContainer from "../templates/cardContainer";
import { v4 as uuidv4 } from 'uuid';


function TypeContainer({activeMenu}){
    const menu=data.restaurant.menu;
    return(
        <section className={styles.container__menu}>
            {
                menu.map((dishType)=>{
                    return(
                        <button 
                            className={styles.text__dishes}
                            onClick={()=>{activeMenu(Object.keys(dishType)[0])}}
                            key={uuidv4()}
                        >
                            {Object.keys(dishType)[0]}
                        </button>
                    )
                })
            }
        </section>
    )
}
function Menu(){
    const [activeMenu,setActiveMenu]=useState("appetizer");
    return(
        <>
            <h2 className={styles.subMenu}>Menu</h2>
            <TypeContainer activeMenu={setActiveMenu}/>
            <CardContainer activeMenu={activeMenu}/>
        </>
    )
}

export default Menu;
