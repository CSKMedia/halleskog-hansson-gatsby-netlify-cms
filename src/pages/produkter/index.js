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
            backgroundImage: `url('/img/blog-index.jpg')`,
            marginTop: 70
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              // backgroundColor: '#f40',
              textTransform: 'uppercase',
              color: 'white',
              padding: '1rem',
            }}
          >
            Produkter
          </h1>
        </div>
        <ProductsRoll />
      </Layout>
    )
  }
}