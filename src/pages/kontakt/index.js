import React from 'react'
import { navigate } from 'gatsby-link'
import logo from '../../img/logo-hh.png'
import Layout from '../../components/Layout'
import Staff from '../../components/Staff'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
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
        <section className="section" style={{marginTop: 70}}>
          <div className="container">
            <div className="content">
              <div className="columns is-desktop">
              {this.props.data.allDataYaml.nodes.map(obj => (
              <>
                <div className="column is-half"><img src={obj.mapImage} is-square/></div>
                  <div className="column is-half is-flex is-justify-content-center is-align-items-center">
                    <div>
                      <img
                        src={logo}
                        alt="Halleskog & Hansson AB"
                        style={{ height: '5em', marginBottom: 20 }}
                      />
                      <br />
                      <p>
                        Mail: <a href={`mailto:${obj.mail}`}>{obj.mail}</a> <br />
                        Kontoret: {obj.phone}
                        <br />
                        <br />
                        <b>Besöksadress:</b>
                        <br />
                        {obj.visitAddress}
                        <br />
                        <br />
                        <b>Postadress:</b>
                        <br /> {obj.postaddress}
                        <br />
                      </p>
                    </div>
                  </div>
              </>
              ))}
            </div>
            </div>
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
              <div className="column is-half is-flex is-justify-content-center is-align-items-center">
                <div style={{ backgroundColor: "#f8f9fa", padding: "30px"}}>
                  <h2 style={{ fontWeight: "bold", marginBottom: "0.5em"}}>Specifik E-post</h2>
                  Ta-planer
                  <br />
                  <a style={{ marginBottom: "o.5em"}} href={`mailto:taplaner@halleskog-hansson.se`}>taplaner@halleskog-hansson.se</a>
                  <br />
                  Rental
                  <br />
                  <a style={{ marginBottom: "0.5em"}} href={`mailto:rental@halleskog-hansson.se`}>rental@halleskog-hansson.se</a>
                  <br />
                  Ekonomi
                  <br />
                  <a style={{ marginBottom: "0.5em"}} href={`mailto:ekonomi@halleskog-hansson.se`}>ekonomi@halleskog-hansson.se</a>
                  <br />
                </div>
              </div>
            </div>
            <Staff />
          </div>
        </section>
      </Layout>
    )
  }
}
export const query = graphql`
  query ContactInfoQuery {
    allDataYaml(filter: {id: {eq: "bfa59675-a55a-51fa-8db2-0055939c4a93"}}) {
      nodes {
        mapImage
        id
        phone
        mail
        postaddress
        visitAddress
      }
    }
  }
`




