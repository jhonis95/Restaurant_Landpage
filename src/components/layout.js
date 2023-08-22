/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"

import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"
import Gallery from "./gallery"

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <header id="header">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </header>
      <main id="menu">
        <section style={{paddingTop:'90px',padding:'0 30px'}}>
          <Menu/>
        </section>
        <section 
          id="gallery" 
          style={
            {
              paddingTop:'90px',
              backgroundColor:'var(--contrast-color-light-one)'
            }
          }>
          <Gallery/>
        </section>
      </main>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

export default Layout
