import React from 'react'
import PropTypes from 'prop-types'

const ImageTextSection = ({sectionItem}) => {

  const { src } = sectionItem.image.childImageSharp.fluid

  return (
    <div class="columns">
      <div className="column is-6 " style={{ alignItems: "center",  justifyContent: "center", display: "flex"}}>
        <div style={{ padding: "0rem 2rem", width: "70%" }}>
          <h1>Helhetslösning för Vägavstängningar</h1>
          <h2 style={{fontSize: "2rem", fontWeight:"bold", padding: "0rem 0rem 1rem 0rem"}}>{sectionItem.title}</h2>
          <p>
          {sectionItem ? sectionItem.text : "empty"}
          </p>
        </div>
      </div>
      <div className="column is-6" style={{padding: 0,  position: "relative"}}>
      <img
          src={src}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)"
        }}/>
        <a
          href="https://www.bisnode.se/om-bisnode/vad-vi-gor/vart-satt-att-se-pa-risk-och-kredit/kreditvarderingsmodell-foretag/"
          target="_blank">
          <img src="https://ratinglogo.bisnode.com/2564614528200472571494671.svg" style={{ backgroundColor: "white", padding: "2rem 1rem", height: "200px", position: "absolute", top: "40%", left: "50%"}}/>
        </a>
      </div>
    </div>
    )
}

ImageTextSection.propTypes = {
  sectionItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.node,
    })
  ),
  // gridItems: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //     text: PropTypes.node,
  //     heading: PropTypes.string,
  //     icon: PropTypes.string,
  //     buttonLink: PropTypes.string,
  //   })
  // ),
}


export default ImageTextSection