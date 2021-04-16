import { Link } from 'gatsby'
import React from 'react'


const ContactBanner = ({backgroundColor}) => {

  console.log("backgroundColor", backgroundColor)

  return (
    <div className="contact-banner-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", width: "100%", backgroundColor: `${backgroundColor || "white"}`, padding: "4rem"}}>
      <span className="is-size-2 has-text-weight-bold mr-4">Tveka inte att </span>
      <Link className="btn" to="/kontakt" style={{textAlign: "center"}}>
        Kontakta oss
      </Link>
    </div>
  )
}

export default ContactBanner