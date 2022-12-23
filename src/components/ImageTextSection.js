import React from 'react'
import PropTypes from 'prop-types'

const ImageTextSection = ({sectionItem}) => {
  const { src } = sectionItem.image.childImageSharp.fluid

  return (
    <div className="columns">
      <div className="column is-6 " style={{ alignItems: "center",  justifyContent: "flex-end", display: "flex"}}>
        <div className="custom-width-70-100 imageTextSection-content">
          <h1>Helhetslösning för trafikavstängningar</h1>
          <h2 className="is-size-2 has-text-weight-bold py-2">{sectionItem.title}</h2>
          <p>
          {sectionItem ? sectionItem.text : "empty"}
          </p>
        </div>
      </div>
      <div className="column is-6" style={{padding: 0,  position: "relative"}}>
      <img
          src={src}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%)"
        }}/>
      </div>
    </div>
    )
}

ImageTextSection.propTypes = {
  // sectionItem: PropTypes.objectOf(
    sectionItem:
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    })
  // ),
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