import * as React from "react"
import * as styles from "./index.module.css"
import data from "../data.json"
import { useState } from "react";


function TypeContainer({ativation}){
    const menu=data.restaurant.menu;
    const testClick=(event)=>{
        ativation(event.target.textContent)
    }
    return(
        <section className={styles.container__menu}>
            {
                menu.map((dishType)=>{
                    let result=Object.keys(dishType)[0]
                    return(
                        <p 
                            className={styles.text__dishes}
                            onClick={testClick}
                        >
                            {result}
                        </p>
                    )
                })
            }
        </section>
    )
}
function Menu(){
    const [activeMenu,setActiveMenu]=useState("Appetizer");
    return(
        <>
            <h2 className={styles.subMenu}>Menu</h2>
            <TypeContainer ativation={setActiveMenu}/>
            <div>
                    <p>{activeMenu}</p>
            </div>
        </>
    )
}

export default Menu;
