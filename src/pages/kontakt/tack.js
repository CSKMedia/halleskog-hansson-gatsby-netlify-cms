import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

export default () => (
  <>
    <div
    className="full-width-image-container"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/trafikreglering.jpg')`,
      // backgroundColor: "#333",
      backgroundPosition: "center center",
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      marginTop: 70
    }}
    >
  <h1 style={{textAlign: "center", color:"white", display: "block"}}>Vägavstängningar | Stockholm</h1>
  <h2
    className="has-text-weight-bold is-size-1"
    style={{
      // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
      // backgroundColor: '#f40',
      // textTransform: 'uppercase',
      color: 'white',
      padding: '1rem',
    }}
  >
    Mail skickat!
  </h2>
</div>
  <Layout>
    <section className="section is-fluid">
      <div className="container">
        <div className="content">
          <h1>Tack för ditt mail</h1>
          <p>Vi återkommer så fort vi kan. <br />
          Tillbaka till <Link to="/">startsidan</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
  </>
)
