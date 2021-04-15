import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import video from '../../static/img/halleskog-hansson.mp4'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ContactBanner from '../components/ContactBanner'
import ProductsAndServices from '../components/ProductsAndServices'
import ImageTextSection from '../components/ImageTextSection'
import NavbarBottom from '../components/NavbarBottom'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro,
}) => {
  return (
  <div>
    <div style={{height: "100%"}}>
    <div className="full-width-video-container">
      <video className="is-hidden-touch" id="introVideo" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src={video} type="video/mp4" />
      </video>

      <div
      className="full-width-image"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        // backgroundPosition: `top left`,
        // backgroundAttachment: `fixed`,
      }}
    >


      <div
        style={{
          display: 'flex',
          position: "relative",
          // height: '450px',
          lineHeight: '1',
          justifyContent: "flex-start",
          // alignItems: 'center',
          flexDirection: 'column',
          width: '75vw',
        }}
      >
        <div>
          <h1 style={{color: "#fff", padding: '0.25em' }}>Vägavstängningar | Stockholm</h1>
          <h1
            className="has-text-weight-bold is-size-4-mobile is-size-4-tablet is-size-2-widescreen front-page-title"
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'white',
              lineHeight: '1.5',
              width: '30vw',
            }}
          >
          {title}
          </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-5-widescreen mb-4 front-page-subheading"
          style={{
            color: 'white',
            lineHeight: '1.3',
            width: '30vw',
            marginTop: '1rem',
          }}
        >
          {subheading}
        </h3>
        <div style={{padding: "1rem 0rem"}}>
          <Link className="btn mr-4 mb-4" to="/tjanster">
            Tjänster
          </Link>
          <Link className="btn-white" to="/produkter">
            Produkter
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
    <section className="section" style={{backgroundColor: "#f7f7f7", paddingLeft:0, paddingRight: 0, paddingBottom: 0}}>
      <div className="container is-fluid" style ={{paddingLeft:0, paddingRight: 0}}>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-24">
                <div className="content">
                <Features gridItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container is-fluid" style={{ paddingLeft:0, paddingRight: 0, marginTop: "3rem", backgroundColor: "white"}}>
            <ImageTextSection sectionItem={mainpitch}/>
        </div>

          <div className="section">
            <h2 style={{fontSize: "2rem", fontWeight:"bold", paddingRight: "10px", textAlign: "center", padding: "3rem"}}>Vi hjälper er med</h2>
            {/* <FeaturedProducts />
            <FeaturedServices /> */}
            <ProductsAndServices />
          </div>



        <ContactBanner backgroundColor="white"/>
        <div className="container is-fluid" style={{ paddingLeft:0, paddingRight: 0, marginTop: "3rem", backgroundColor: "white"}}>
          <div className="container">
            <div class="columns">
              <div className="column is-12">
                <BlogRoll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NavbarBottom />
    {/* <nav className="navbar is-fixed-bottom">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="btn">
            <strong>Ta kontakt</strong>
          </a>
        </div>
      </div>
    </div>
    </nav> */}
  </div>

)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log("frontmatter.mainpitch", frontmatter)
  return (
    <Layout id="indexPage">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          text
          title
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
            icon
            buttonLink
          }
          heading
          description
        }
      }
    }
  }
`
