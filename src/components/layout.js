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
import About from "./about"
import Footnote from "./footnote"

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
        <section 
          style={
            {
              paddingTop:'50px',
              padding:'0 30px'
            }
          }>
          <Menu/>
        </section>
        <section 
          id="gallery" 
          style={
            {
              paddingTop:'50px',
              backgroundColor:'var(--contrast-color-light-one)'
            }
          }>
          <Gallery/>
        </section>
        <section 
          style={
            {
              width:'100%',
              paddingTop:'50px'
            }
          }>
          <About/>
        </section>
      </main>
      <footer style={{padding:'20px 0px'}}>
          <Footnote/>
      </footer>
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
