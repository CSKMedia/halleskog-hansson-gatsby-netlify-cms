import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      allDataYaml {
        edges {
          node {
            administration {
              name
              photo
              position
              email
              phone
            }
            tillstand {
              name
              photo
              position
              email
              phone
            }
            utstallningTransport {
              name
              photo
              position
              email
              phone
            }
            trafikvakt {
              name
              photo
              position
              email
              phone
            }
          }
        }
      }
    }
    `}
    render={data => (
      <section className="section" style={{ padding: 0}}>
        <div className="container-fluid" style={{ padding: "3rem", backgroundColor: "white" }}>
        <div className="container">
          <div className="content has-text-centered" style={{ borderBottom: "7px solid #f8f9fa"}}>
          <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">Administration</h2>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.administration && node.administration.map(member => (
                  <div className="column is-3">
                    <div className="card">
                      <div className="card-image">
                        <figure class="image">
                          <img className="is-rounded" style={{ border: "7px solid #f8f9fa", maxWidth: 250}} src={member.photo}/>
                        </figure>
                      </div>
                      <div class="card-content is-family-secondary">
                      <div className="is-size-5 has-text-weight-bold is-family-primary">{member.name}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.position}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.phone}</div>
                      <div className="is-size-6 has-text-weight-medium">
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="content has-text-centered" style={{ marginTop: "3rem"}}>
          <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">Tillstånd</h2>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.tillstand && node.tillstand.map(member => (
                  <div className="column is-3">
                    <div className="card">
                      <div className="card-image">
                        <figure class="image">
                          <img className="is-rounded" style={{ border: "7px solid #f8f9fa", maxWidth: 250}} src={member.photo}/>
                        </figure>
                      </div>
                      <div class="card-content is-family-secondary">
                      <div className="is-size-5 has-text-weight-bold is-family-primary">{member.name}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.position}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.phone}</div>
                      <div className="is-size-6 has-text-weight-medium">
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="content has-text-centered" style={{ marginTop: "3rem"}}>
          <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">Utställning/Transport</h2>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.utstallningTransport && node.utstallningTransport.map(member => (
                  <div className="column is-3">
                    <div className="card">
                      <div className="card-image">
                        <figure class="image">
                          <img className="is-rounded" style={{ border: "7px solid #f8f9fa", maxWidth: 250}} src={member.photo}/>
                        </figure>
                      </div>
                      <div class="card-content is-family-secondary">
                      <div className="is-size-5 has-text-weight-bold is-family-primary">{member.name}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.position}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.phone}</div>
                      <div className="is-size-6 has-text-weight-medium">
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="content has-text-centered" style={{ marginTop: "3rem"}}>
          <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">Trafikvakt</h2>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.trafikvakt && node.trafikvakt.map(member => (
                  <div className="column is-3">
                    <div className="card">
                      <div className="card-image">
                        <figure class="image">
                          <img className="is-rounded" style={{ border: "7px solid #f8f9fa", maxWidth: 250}} src={member.photo}/>
                        </figure>
                      </div>
                      <div class="card-content is-family-secondary">
                      <div className="is-size-5 has-text-weight-bold is-family-primary">{member.name}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.position}</div>
                      <div className="is-size-6 has-text-grey has-text-weight-medium">{member.phone}</div>
                      <div className="is-size-6 has-text-weight-medium">
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    )}
  />
)
