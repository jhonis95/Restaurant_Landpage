import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "../components/index.module.css"

function BubbleTea(){
    // const query3=useStaticQuery(graphql`
    //     query MyQuery {
    //         data {
    //           restaurant {
    //             bubleeTea {
    //               addOns {
    //                 content
    //                 title
    //               }
    //               juices {
    //                 content
    //                 title
    //               }
    //               milkSubstitutes {
    //                 content
    //                 title
    //               }
    //               teas {
    //                 content
    //                 title
    //               }
    //               title
    //             }
    //           }
    //         }
    //     }
    // `)
    // console.log(query3.data.restaurant.bubleeTea.title)
    return(
        <>
            <h2 className={styles.subMenu}>test</h2>
        </>
    )
}
export default BubbleTea