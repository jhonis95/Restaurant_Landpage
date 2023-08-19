import * as React from "react"
import * as styles from "./index.module.css"
import data from "../data.json"
import { useState } from "react";
import Appetizers from "./Appetizers";
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
    const [activeMenu,setActiveMenu]=useState("Appetizer");
    return(
        <>
            <h2 className={styles.subMenu}>Menu</h2>
            <TypeContainer activeMenu={setActiveMenu}/>
            {activeMenu==='Appetizer'&&<Appetizers/>}
            {activeMenu==='Curry'&&<p>curry</p>}
            {activeMenu==='Bowls'&&<p>bowls</p>}
            {activeMenu==='Drinks'&&<p>drink</p>}
            {activeMenu==='Dessert'&&<p>dessert</p>}
        </>
    )
}

export default Menu;
