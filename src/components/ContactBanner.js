import { Link } from 'gatsby'
import React from 'react'


const ContactBanner = ({backgroundColor}) => {

  console.log("backgroundColor", backgroundColor)


  return (
    <div className="is-flex is-justify-content-center" style={{ width: "100%", backgroundColor: `${backgroundColor || "green"}`, padding: "4rem"}}>
      <span style={{fontSize: "2rem", fontWeight:"bold", paddingRight: "10px"}}>Tveka inte att </span>
      <Link className="btn" to="/kontakt" style={{textAlign: "center"}}>
        Kontakta oss
      </Link>
    </div>
  )
}

export default ContactBanner