
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import ProductsGrid from './Products'
import ContactBanner from './ContactBanner'

class ProductsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log("post", posts)
    const sortedData = posts.sort((a, b) => a.node.frontmatter.priority - b.node.frontmatter.priority)

    return (
    <>
      <div className="container is-hidden-mobile">
        <nav className="navbar" style={{ paddingTop: 0}}>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start subNav" style={{flexGrow: 1, justifyContent: "center", paddingBottom: "1rem"}}>
            {posts && sortedData.map(({node: post }) => (
              <a className="navbar-item" href={`${post.fields.slug}`}>
                {post.frontmatter.title}
              </a>
            ))}
            </div>
          </div>
        </nav>
      </div>
      <section className="section" style={{padding: 0}}>
        <ProductsGrid gridItems={posts} />
        <ContactBanner backgroundColor="white"/>
      </section>
    </>
    )
  }
}

ProductsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "single-product-page" } } }
        ) {
          edges {
            node {
              excerpt(format: HTML, pruneLength: 500)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                priority
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <ProductsRoll data={data} count={count} />}
  />
)
