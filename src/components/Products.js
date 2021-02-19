import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faDirections, faRoad } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faMap, faDirections, faRoad)


const ProductsGrid = ({ gridItems }) => (

  // <div className="columns is-multiline is-flex pb-6">
    <div>
      {gridItems && gridItems.map((item, index) => (
        <div id={item.heading} className={`columns p-6 ${index % 2 === 0 ? "" : "is-flex-direction-row-reverse border-top-bottom"}`}>
          <div className= "column is-5-desktop">
              <PreviewCompatibleImage imageInfo={item}/>
          </div>
          <div className="column pl-6-desktop is-7-desktop">
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <a className="btn mt-5" style={{ fontWeight: "bold"}}>Läs mer om {item.heading}</a>
          </div>
        </div>
      ))}
    </div>

  // <div className="columns is-full is-multiline">
  //   {gridItems.map((item ,index) => (
  //     <div className="column is-12">
  //       {index % 2 === 0
  //       ? (
  //       <div className="columns has-background-info-light is-justify-content-center is-align-items-center">
  //         <div key={item.text} className="column is-6">
  //           <div className="has-text-centered">
  //             <div
  //               style={{
  //                 width: "100%",
  //                 height: "100%",
  //                 objectFit: "cover",
  //                 display: 'inline-block',
  //               }}
  //             >
  //               <PreviewCompatibleImage imageInfo={item} />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="colum is-6 p-6">
  //           <h2>{item.heading}</h2>
  //           <p> {item.text}</p>
  //           <div dangerouslySetInnerHTML={{__html: item.text}}/>
  //         </div>
  //       </div>
  //       )
  //     : (
  //       <div className="columns is-justify-content-center is-align-items-center">
  //         <div className="colum is-6 p-6">
  //         <h2>{item.heading}</h2>
  //         <p> {item.text} </p>
  //       </div>
  //       <div key={item.text} className="column is-6 ">
  //         <div className="has-text-centered">
  //           <div
  //           style={{
  //             width: "100%",
  //             objectFit: "cover",
  //             display: 'inline-block',
  //           }}
  //           >
  //             <PreviewCompatibleImage imageInfo={item} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     )
  //     }
  //     </div>
  //   ))}
  // </div>
)

ProductsGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.node,
      heading: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
}

export default ProductsGrid
