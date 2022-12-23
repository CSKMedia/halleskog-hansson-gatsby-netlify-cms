import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import TrafikvaktForm from "../components/TrafikvaktForm";
import SpecificContactAndStaff from "../components/SpecificContactAndStaff";
import Markdown from "markdown-to-jsx";

export const SingleTrafikvakterPageTemplate = ({
  content,
  contentComponent,
  contentTwo,
  description,
  image,
  tags,
  title,
  titleTwo,
  helmet,
  files,
  products,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section
      className="section"
      style={{ marginTop: 0, minHeight: `calc(100vh - 250px)` }}
    >
      {helmet || ""}
      <div className="container is-fluid">
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            backgroundPosition: "center center",
            marginTop: 70,
          }}
        >
          <h1 style={{ color: "white" }}>{title} | Stockholm</h1>
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              color: "white",
              padding: "1rem",
            }}
          >
            {title}
          </h2>
        </div>
        <div className="container content">
          <div className="columns py-6">
            <div className="column is-7">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              {/* <PreviewCompatibleImage imageInfo={image}/> */}
              <div style={{ marginTop: "2rem" }}>
                <PostContent content={content} />
              </div>

              <div style={{ marginTop: "2rem" }}></div>
            </div>
            <div className="column is-4 is-offset-1">
              <div className="pt-4">
                <TrafikvaktForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpecificContactAndStaff />
    </section>
  );
};

SingleTrafikvakterPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  // contentTwo:PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  title: PropTypes.string,
  // titleTwo: PropTypes.string,
  helmet: PropTypes.object,
  files: PropTypes.object,
  products: PropTypes.array,
};

const SingleTrafikvakterPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { edges: products } = data.allMarkdownRemark;
  console.log("data", data);
  return (
    <Layout>
      <SingleTrafikvakterPageTemplate
        image={post.frontmatter.featuredimage}
        content={post.html}
        contentTwo={post.frontmatter.body_two || ""}
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
            <meta
              property="og:title"
              content={`${post.frontmatter.title} Stockholm`}
            />
            <meta
              property="og:description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={`${post.frontmatter.featuredimage.childImageSharp.fluid.url}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        titleTwo={post.frontmatter.title_two || ""}
      />
    </Layout>
  );
};

SingleTrafikvakterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default SingleTrafikvakterPage;

export const pageQuery = graphql`
  query SingleTrafikvakterPageTemplate($id: String!) {
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
      filter: {
        frontmatter: { templateKey: { eq: "single-trafikvakter-page" } }
      }
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
`;
