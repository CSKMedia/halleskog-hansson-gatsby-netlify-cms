import { StaticQuery } from 'gatsby'
import React from 'react'

export default function NavbarBottom () {
  return (
    <StaticQuery
      query={graphql`
        query NavbarBottom {
          dataYaml(mail: {eq: "info@halleskog-hansson.se"}) {
            phone
            phone2
          }
        }
      `}
      render={data => (
        <nav className="navbar is-fixed-bottom">
          <div className="navbar-end">
            { data.dataYaml && (
            <>
              <div className="is-hidden-mobile navbar-item" style={{ display: "flex", fontSize: "0.8rem", color: "white"}}>
                <div>
                  <div style={{backgroundColor: "#333", padding: "1rem", marginBottom: "0.5rem",  lineHeight: 1.8}}>
                    <div style={{textAlign: "left"}}>kontor: {data.dataYaml.phone || ""} </div>
                    <div style={{textAlign: "left"}}>Depå: {data.dataYaml.phone2 || ""}</div>
                  </div>
                    <a className="btn" style={{textTransform: "initial"}}>Ta kontakt</a>
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
