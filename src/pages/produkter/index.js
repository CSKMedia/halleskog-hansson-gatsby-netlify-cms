import React from 'react'
import Layout from '../../components/Layout'
import ProductsRoll from '../../components/ProductsRoll'

export default class ProductsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/byggstaket.jpg')`,
            // backgroundColor: "#333",
            backgroundPosition: "right center",
            marginTop: 70,
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <h1 style={{textAlign: "center", color:"white", display: "block"}}>Trafikavstängningar | Stockholm</h1>
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
            Produkter
          </h2>
        </div>
        <ProductsRoll />
      </Layout>
    )
  }
}