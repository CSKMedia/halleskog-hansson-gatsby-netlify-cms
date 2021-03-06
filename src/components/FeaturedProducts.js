import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'

class FeaturedProducts extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const featuredProducts = posts && posts.map((post) => post)
    console.log("posts", posts)
    return (
    <>
      <div className="container is-fluid"
        style={{
          paddingLeft:0,
          paddingRight: 0,
          // backgroundColor: `${index % 2 === 0 ? "#f7f7f7" : "white"}`
        }}>
        <div className="container">
          <div className="section" style={{padding: 0}}>
            <div className="columns">
            {
              featuredProducts ? featuredProducts.map((post) => (
              <>
                <div className="column">
                  <div style={{ backgroundColor: '#b60f1d', padding: "1rem", minHeight: 80, alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <a href={post.node.fields.slug}>
                      <h2 style={{color: "#fff", textAlign: "center", fontWeight: "bold"}}> {post.node.frontmatter.title}</h2>
                    </a>
                  </div>
                </div>
              </>
              )): <></>
            }
            </div>
          </div>
        </div>
      </div>
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
                displayOnStartPage
                templateKey
                path
                featuredimage {
                  childImageSharp {
                    fluid {
                      src
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
