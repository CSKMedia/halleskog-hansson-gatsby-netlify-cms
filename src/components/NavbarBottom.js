import { StaticQuery } from 'gatsby'
import React from 'react'

export default function NavbarBottom () {
  return (
    <StaticQuery
      query={graphql`
        query NavbarBottom {
          dataYaml(page: {eq: "contact"}) {
            phoneTillstand
            phoneMaterial
          }
        }
      `}
      render={data => (
        <nav className="is-hidden-mobile bottom-nav">
          <div className="navbar-end">
            { data.dataYaml && (
            <>
              <div className="navbar-item" style={{ display: "flex", fontSize: "0.8rem", color: "white"}}>
                <div style={{textTransform: "initial"}}>
                  <div style={{backgroundColor: "#333", padding: "1rem", marginBottom: "0.5rem",  lineHeight: 1.8}}>
                    <div style={{textAlign: "left"}}>Tillstånd: {data.dataYaml.phoneTillstand || ""} </div>
                    <div style={{textAlign: "left"}}>Material: {data.dataYaml.phoneMaterial || ""}</div>
                  </div>
                    <a className="btn" href="/kontakt">Ta kontakt</a>
                </div>
              </div>
            </>
            )}
          </div>
      </nav>
    )}
  />
  )
}
