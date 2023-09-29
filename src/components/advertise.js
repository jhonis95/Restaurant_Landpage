import { graphql,useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

function Advertise(){
    const data=useStaticQuery(graphql`
    query MyQuery {
        data {
          restaurant {
            specialCard {
              descripiton
              subtitle
              title
              days
              menu {
                dish
                dishPrice
                plate
                platePrice
              }
              image {
                childrenImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `)
    const img=data.data.restaurant.specialCard.image.childrenImageSharp[0].gatsbyImageData;
    console.log(data.data.restaurant.specialCard.title)
    return(
        <>
            <section >
                <div>
                    <h4>{data.data.restaurant.specialCard.title}</h4>
                    <h2>{data.data.restaurant.specialCard.subtitle}</h2>
                </div>
                <div>
                    <p>{data.data.restaurant.specialCard.description}</p>
                    <p>{data.data.restaurant.specialCard.days}</p>
                </div>
            </section>
            <section>
                <div>
                    <p>{data.data.restaurant.specialCard.menu.dish}</p>
                    <p>{data.data.restaurant.specialCard.menu.dishPrice}</p>
                    <p>{data.data.restaurant.specialCard.menu.plate}</p>
                    <p>{data.data.restaurant.specialCard.menu.platePrice}</p>
                </div>
                <div>
                    <GatsbyImage
                        image={img}
                        alt={'Onigiri-image'}
                        placeholder={"blurred"}
                    />
                </div>
            </section>
        </>
    )
}
export default Advertise