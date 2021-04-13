import React from 'react'
import PropTypes from 'prop-types'

const ImageTextSection = ({sectionItem}) => {

  const { src } = sectionItem.image.childImageSharp.fluid

  return (
    <div class="columns">
      <div className="column is-6" style={{ alignItems: "center",  justifyContent: "center", display: "flex"}}>
        <div>
          <h2 style={{fontSize: "2rem", fontWeight:"bold", paddingRight: "10px", textAlign: "center", padding: "3rem 0rem"}}>{sectionItem.title}</h2>
          <p style={{ padding: "0rem 6rem"}}>
          {sectionItem ? sectionItem.text : "empty"}
          </p>
        </div>
      </div>
      <div className="column is-6" style={{padding: 0}}>
      <img
          src={src}
          style={{
            objectFit: "cover",
            minHeight: "400px",
            width: "100%",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)"
        }}/>
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