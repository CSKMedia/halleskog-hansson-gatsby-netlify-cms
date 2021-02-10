import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faDirections, faRoad } from '@fortawesome/free-solid-svg-icons'

const FeatureGrid = ({ gridItems }) => (

  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section " style={{backgroundColor: "#fff"}}>
          <div className="has-text-centered">
            {/* <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div> */}
            <FontAwesomeIcon icon={item.icon} size="6x" color="#b60f1d" />
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <button className="button is-danger">Läs mer</button>
          </div>
        </section>
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

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.node,
      heading: PropTypes.string,
    })
  ),
}

export default FeatureGrid
