import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'
import logo from '../../img/logo-hh.png'
import Layout from '../../components/Layout'
import Staff from '../../components/Staff'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section" style={{ padding: 0, backgroundColor: "#f8f9fa"}}>
          <div className="container-fluid" >
              <div className="content" style={{ marginBottom: "0px"}}>
                <div className="columns is-desktop" style={{ paddingBottom: "0px"}}>
                  <div className="column is-half" style={{ padding: "0px"}}>
                    <img src="/img/map.jpg" is-square={true} />
                  </div>
                  <div className="column is-half is-flex is-justify-content-center is-align-items-center">
                    <div>
                      <img
                        src={logo}
                        alt="Halleskog & Hansson AB"
                        style={{ height: '5em', marginBottom: 20 }}
                      />
                    <br />
                    <p>
                      <b>Telefon</b>< br />
                      Kontoret: {this.props.data.dataYaml.phone} <br/>
                      {/* Depån: {info.phone2} <br/> */}
                      <br />
                      <a href={`mailto:${this.props.data.dataYaml.mail}`}>{this.props.data.dataYaml.mail}</a> <br />
                      <br />
                      <b>Besöksadress</b>
                      <br />
                      {this.props.data.dataYaml.visitAddress}
                      <br />
                      <br />
                      <b>Postadress</b>
                      <br /> {this.props.data.dataYaml.postAddress}
                      <br />
                      <br />

                      <b>Ta-planer</b>
                      <br />
                      <a style={{ marginBottom: "1rem"}} href={`mailto:taplaner@halleskog-hansson.se`}>taplaner@halleskog-hansson.se</a>
                      <br />
                      <b>Rental</b>
                      <br />
                      <a style={{ marginBottom: "1rem"}} href={`mailto:rental@halleskog-hansson.se`}>rental@halleskog-hansson.se</a>
                      <br />
                      <b>Ekonomi</b>
                      <br />
                      <a style={{ marginBottom: "1rem"}} href={`mailto:ekonomi@halleskog-hansson.se`}>ekonomi@halleskog-hansson.se</a>
                      <br />
                      </p>
                    </div>
                  </div>
              </div>
          </div>
            <Staff />
          </div>
          <div className="container-fluid" style={{backgroundColor: "#f8f9fa", padding: "3rem"}}>
            <div className="container">
              <div className="columns is-desktop">
                <div className="column is-half">
                  <div className="content">
                    <h1>Kontaktformulär</h1>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input is-small type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label is-small>
                          Don’t fill this out:{' '}
                          <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label is-small className="label" htmlFor={'name'}>
                          Namn/Företag
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                            is-small
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'} is-small>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                            is-small
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" is-small htmlFor={'message'}>
                          Meddelande
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button className="button is-link" type="submit">
                          Skicka
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="column is-half is-flex is-justify-content-center is-align-items-center">
                  {this.props.data.dataYaml.edges[0].node && (
                  <p style={{ backgroundColor: "white", padding: "2rem"}}>
                    <b>Telefon</b>< br />
                    Kontoret: {phone} <br/>
                    Depån: {phone2} <br/>
                  </p> )}
                </div> */}
              </div>
            </div>

          </div>
        </section>
      </Layout>
    )
  }
}

// export const query = graphql`
//   query ContactInfoQuery {
//     dataYaml(id: {eq: "bfa59675-a55a-51fa-8db2-0055939c4a93"}) {
//       id
//       mail
//       phone
//       postAddress
//       visitAddress
//     }
//   }
// `

export default () => (
  <StaticQuery
    query={graphql`
    {
      dataYaml(id: {eq: "bfa59675-a55a-51fa-8db2-0055939c4a93"}) {
        id
        mail
        mapImage
        phone
        postAddress
        visitAddress
      }
    }
  `}
    render={(data, count) => <Index data={data} count={count} />}
  />
)




