import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline" style={{padding: "3rem 0rem"}}>
        <div className="column is-4">
          <h3 className="has-text-weight-semibold is-size-2 pb-3 pt-6">
            Vad är Nytt?
          </h3>
          <Link className="btn" to="/nyheter">
            Alla nyheter
          </Link>
        </div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4 is-desktop" key={post.id}>
              {/* <article
                className={`blog-list-item tile is-child notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              > */}
                {/* <header> */}
                <div style={{ backgroundColor: "#fff", padding: "1rem"}}>
                  {post.frontmatter.featuredimage ? (
                    // <div className="featured-thumbnail">
                    <div style={{minWidth: 180}}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  {/* <p className="post-meta"> */}
                  <p style={{ padding: "1rem 0rem"}}>
                    <Link
                      className="title has-text-primary is-size-5"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-6 is-block" style={{ marginTop: "0.5rem"}}>
                      {post.frontmatter.date}
                    </span>
                  </p>
                  </div>
                {/* </header> */}
                {/* <div className="content">
                  <ul className="taglist">
                    {post.frontmatter.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`} style={{fontSize: "0.9rem"}}>{tag}</Link>,
                    </li>
                    ))}
                  </ul>
                </div> */}
                {/* <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="btn" to={post.fields.slug}>
                    Fortsätt läsa →
                  </Link>
                </p> */}
              {/* </article> */}
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date(formatString: "MM/DD/YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
