import { StaticQuery } from 'gatsby'
import React from 'react'

export default function NavbarBottom () {
  return (
    <StaticQuery
      query={graphql`
        query NavbarBottom {
          dataYaml(page: {eq: "contact"}) {
            phone
            phone2
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
                    <div style={{textAlign: "left"}}>Kontor: {data.dataYaml.phone || ""} </div>
                    <div style={{textAlign: "left"}}>Depå: {data.dataYaml.phone2 || ""}</div>
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
