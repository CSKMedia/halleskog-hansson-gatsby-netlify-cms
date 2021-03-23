import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      allDataYaml {
        edges {
          node {
            teamVallentuna {
              name
              photo
              position
              email
              phone
            }
            teamSolna {
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
            <h1 style={{ padding: "10px 0px"}}>Team Vallentuna</h1>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.teamVallentuna && node.teamVallentuna.map(member => (
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
            <h1 style={{ padding: "10px 0px" }}>Team Solna</h1>
            {data && data.allDataYaml.edges.map(({node}) => (
              <div className="columns is-multiline">
                {node.teamSolna && node.teamSolna.map(member => (
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
