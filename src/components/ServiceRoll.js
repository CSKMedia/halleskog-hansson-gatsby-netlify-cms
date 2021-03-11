
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import ProductsGrid from './Products'

class ServiceRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <>
      <div className="container is-hidden-mobile">
        <nav className="navbar ">
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start subNav" style={{flexGrow: 1, justifyContent: "center"}}>
            {posts && posts.map(({node: post }) => (
              <a className="navbar-item" href={`#${post.frontmatter.title}`}>
                {post.frontmatter.title}
              </a>
            ))}
            </div>
          </div>
        </nav>
      </div>
      <section className="section" style={{padding: 0}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
              <ProductsGrid gridItems={posts} />
              {/* {posts &&
                posts.map(({ node: post }) => (
                  <div className="is-parent column is-6" key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                      }`}
                    >
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                              }}
                            />
                          </div>
                        ) : null}
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
                          </Link>
                          <span> &bull; </span>
                          <span className="subtitle is-size-5 is-block">
                            {post.frontmatter.date}
                          </span>
                        </p>
                      </header>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="button" to={post.fields.slug}>
                          Fortsätt läsa →
                        </Link>
                      </p>
                    </article>
                  </div>
                ))} */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
  }
}

ServiceRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServiceRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "single-service-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
    render={(data, count) => <ServiceRoll data={data} count={count} />}
  />
)
