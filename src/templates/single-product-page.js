import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const SingleProductPageTemplate = ({
  content,
  contentComponent,
  description,
  image,
  tags,
  title,
  helmet,
  files,
  products
}) => {
  const PostContent = contentComponent || Content

  console.log("files", files)

  return (
    <section className="section" style={{marginTop: 0, minHeight: `calc(100vh - 250px)`}}>
      {helmet || ''}
      <div className="container is-fluid">
        <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          backgroundPosition: 'center center',
          marginTop: 70
        }}
      >
        <h1 style={{color: "white"}}>{title} | Stockholm</h1>
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            // backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <div className="container">
        <div className="columns py-6">
          <div className="column is-8">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {/* <PreviewCompatibleImage imageInfo={image}/> */}
            <div style={{ marginTop: "2rem" }}>
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem`, borderTop: "7px solid rgb(248, 249, 250)" }}>
                <h4 style={{fontWeight: "bold", paddingTop: "1rem"}}>Taggar</h4>
                <ul className="taglist is-flex">
                  {tags.map((tag) => (
                    <li key={tag + `tag`} style={{ paddingRight: 10}}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>,
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="column is-3 is-offset-1">
            <h2 style={{fontWeight: "bold", paddingBottom: "1.2rem", fontSize: "1.2rem"}}>Produkter</h2>
            <ul style={{ borderTop: "7px solid rgb(248, 249, 250)", paddingTop: "1rem"}}>
            {products && products.map((product) =>
              product.node.frontmatter.title === title ?
              ( <li style={{paddingBottom: "1.2rem", fontWeight: "bold" }}><Link to={product.node.fields.slug}>{product.node.frontmatter.title}</Link></li>)
              :
              (<li style={{paddingBottom: "1.2rem" }}><Link to={product.node.fields.slug}>{product.node.frontmatter.title}</Link></li>)
            )}
            </ul>

            {files && (
            <div className="pt-4">
              <h2 style={{fontWeight: "bold", paddingBottom: "1.2rem", fontSize: "1.2rem"}}>Filer</h2>
              <ul style={{ borderTop: "7px solid rgb(248, 249, 250)", paddingTop: "1rem"}}>
                {files && files.map((file) => (
                  <li style={{paddingBottom: "1.2rem"}}>
                    <img src="/img/pdf-icon.png"
                      style={{ height: 35, verticalAlign: "middle", borderStyle: "none", marginRight: 5}}
                    />
                    <a href={file.file.publicURL} target="_blank">{file.filename}</a></li>
                ))}
            </ul>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

SingleProductPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  files: PropTypes.object,
  products: PropTypes.array,
}

const SingleProductPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { edges: products } = data.allMarkdownRemark

  return (
    <Layout>
      <SingleProductPageTemplate
        image={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        products={products}
        files={post.frontmatter.files}
        helmet={
          <Helmet titleTemplate="%s | Halleskog & Hansson">
            <title>{`${post.frontmatter.title}`} Stockholm</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:title" content={`${post.frontmatter.title} Stockholm`} />
            <meta property="og:description" content={`${post.frontmatter.description}`} />
            <meta property="og:image" content={`${post.frontmatter.featuredimage.childImageSharp.fluid.url}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

SingleProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default SingleProductPage

export const pageQuery = graphql`
  query SingleProductPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        files {
          filename
          file {
            publicURL
          }
        }
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "single-product-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
