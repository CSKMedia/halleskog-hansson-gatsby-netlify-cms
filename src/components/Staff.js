import React from 'react'
import { graphql, StaticQuery } from 'gatsby'


export default () => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      allDataYaml {
        edges {
          node {
            staff {
              name
              photo
              position
            }
          }
        }
      }
    }
    `}
    render={data => (
      <div className="container">
      {data.allDataYaml.edges.map(({node}) => (
        <div className="columns is-multiline">
          {node.staff.map(member => (
            <div className="column">
              <img src={member.photo} />
              <br />
              {member.name}
              <br />
              {member.position}
            </div>
          ))}
        </div>
      ))}
      </div>
    )}
  />
)
