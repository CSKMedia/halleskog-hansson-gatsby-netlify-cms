import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faDirections, faRoad } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faMap, faDirections, faRoad)


const ProductsGrid = ({ gridItems }) => (
  gridItems && gridItems.map(({node: item}, index) => (
  // <div className="columns is-multiline is-flex pb-6">
  <div className="container is-fluid" style={{ paddingLeft:0, paddingRight: 0, backgroundColor: `${index % 2 === 0 ? "#f7f7f7" : "white"}`}}>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-12">
            <div id={item.frontmatter.title} className={`columns p-6 ${index % 2 === 0 ? "" : "is-flex-direction-row-reverse"}`}>
              <div className= "column is-5-desktop">
                  <PreviewCompatibleImage imageInfo={item.frontmatter.featuredimage}/>
              </div>
              <div className="column pl-6-desktop is-7-desktop" style={{display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
                <div>
                  <h2 style={{padding: "0rem 0rem 2rem 0rem"}}><span style={{ fontSize: 24, fontWeight: "bold"}}>{item.frontmatter.title}</span></h2>
                  {/* <div style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: item.excerpt}}/> */}
                  <p style={{ textAlign: "left"}}>{ item.frontmatter.description }</p>
                  <a className="btn mt-5" style={{ fontWeight: "bold"}} href={item.fields.slug}>Läs mer om {item.frontmatter.title}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ))

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
      description: PropTypes.string,
      heading: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
}

export default ProductsGrid
