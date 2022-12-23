import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import AllBlog from '../../components/AllBlog'
import InstagramFeed from '../../components/instagramFeed'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container"
          style={{
            // backgroundImage: `url('/img/jumbo.jpg')`,
            backgroundColor: "#333",
            marginTop: 70
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              // textTransform: 'uppercase',
              color: 'white',
              padding: '1rem',
            }}
          >
            Nyheter
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <InstagramFeed />
              {/* <AllBlog /> */}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
