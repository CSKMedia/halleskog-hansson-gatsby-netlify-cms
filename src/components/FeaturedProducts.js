import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import ProductsGrid from './Products'
import ContactBanner from './ContactBanner'

class FeaturedProducts extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log("posts is: ", posts)
    const featuredProducts = posts && posts.find((post) => post.node.frontmatter.displayOnStartPage)
    return (
    <>
      {
        featuredProducts ? featuredProducts.map((post) => <h2>{post.node.frontmatter.title}</h2>)
        : <></>
      }
    </>
    )
  }
}

FeaturedProducts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedProducts {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "single-product-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FeaturedProducts data={data} count={count} />}
  />
)
