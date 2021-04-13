import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class ProductsAndServices extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const allPosts = posts && posts.map((post) => post)
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
            <div className="columns is-multiline">
            {
              allPosts ? allPosts.map((post) => (
              <>
                <div className="column is-3">
                  <a href={post.node.fields.slug}>
                    <div style={{ backgroundColor: '#b60f1d', padding: "1rem", minHeight: 80, alignItems: "center", justifyContent: "center", display: "flex"}}>
                      <h2 style={{color: "#fff", textAlign: "center", fontWeight: "bold"}}> {post.node.frontmatter.title}</h2>
                    </div>
                  </a>
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

ProductsAndServices.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductsAndServices {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: {regex: "/single-/"} } }
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
    render={(data, count) => <ProductsAndServices data={data} count={count} />}
  />
)
