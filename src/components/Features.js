import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-full is-multiline">
    {gridItems.map((item ,index) => (
      <div className="column is-12">
        {index % 2 === 0
        ? (
        <div class="columns has-background-info-light is-justify-content-center is-align-items-center">
          <div key={item.text} className="column is-6">
            <div className="has-text-centered">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          </div>
          <div class="colum is-6 p-6">
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
          </div>
        </div>
        )
      : (
        <div class="columns is-justify-content-center is-align-items-center">
          <div class="colum is-6 p-6">
          <h2>{item.heading}</h2>
          <p>{item.text}</p>
        </div>
        <div key={item.text} className="column is-6 ">
          <div className="has-text-centered">
            <div
            style={{
              width: "100%",
              objectFit: "cover",
              display: 'inline-block',
            }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
        </div>
      </div>
      )
      }
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      heading: PropTypes.tring,
    })
  ),
}

export default FeatureGrid
