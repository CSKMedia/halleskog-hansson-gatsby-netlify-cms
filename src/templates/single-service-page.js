import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { useLocation } from "@reach/router"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const SingleServicePageTemplate = ({
  content,
  contentComponent,
  image,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section" style={{marginTop: 0, minHeight: `calc(100vh - 250px)`}}>
      {helmet || ''}
      <div className="container is-fluid">
        <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          backgroundPosition: 'center center'
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
        <div className="columns p-6">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {/* <PreviewCompatibleImage imageInfo={image}/> */}
            <div style={{ marginTop: "2rem" }}>
              <PostContent content={content} />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Taggar</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

SingleServicePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const SingleServicePage = ({ data }) => {
  const { markdownRemark: post } = data
  const { pathname } = useLocation()

  return (
    <Layout>
      <SingleServicePageTemplate
        image={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        // description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Tjänster">
            <title>{`${post.frontmatter.title}`} | Stockholm</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            {/* <meta property="og:url" content={`${pathname}`} /> */}
            <meta property="og:title" content={`${post.frontmatter.title} | Stockholm`} />
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

SingleServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SingleServicePage

export const pageQuery = graphql`
  query SingleServicePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
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
  }
`
