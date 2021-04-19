import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ContactBanner from '../components/ContactBanner'
import ProductsAndServices from '../components/ProductsAndServices'

export const SinglePageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient" style={{marginTop: 70, padding: 0}}>
      <div className="container is-fluid" style={{padding: 0}}>
      <div
          className="full-width-image-container"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/jumbo.jpg')`,
            // backgroundColor: "#333",
            backgroundPosition: "right center",
            marginTop: 70,
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <h1 style={{textAlign: "center", color:"white", display: "block"}}>Vägavstängningar | Stockholm</h1>
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              // textTransform: 'uppercase',
              color: 'white',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
        </div>
        <div className="container">
          <div className="columns" style={{borderBottom: "7px solid rgb(248, 249, 250)"}}>
            <div className="column is-6">
              <div className="section">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    alt: `featured image for page ${title}`,
                  }}
                />
              </div>
            </div>
            <div className="column is-6">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
            <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">Vi hjälper er med</h2>
            <ProductsAndServices />
          </div>
        <ContactBanner backgroundColor="#f7f7f7"/>
      </div>
    </section>
  )
}

SinglePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SinglePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SinglePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image.publicURL}
        content={post.html}
      />
    </Layout>
  )
}

SinglePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SinglePage

export const singlePageQuery = graphql`
  query SinglePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`
