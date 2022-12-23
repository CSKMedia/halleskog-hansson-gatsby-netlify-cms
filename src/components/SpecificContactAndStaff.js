import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { node } from "prop-types";

const SpecificContactAndStaff = ({ data }) => {
  
  const contact = data && data.allDataYaml.edges.find(({node}) => node.mailTrafikvakt !== null)
  
  return (
    <>
      <div
        className="container"
        style={{
          padding: "2rem",
          borderTop: "7px solid rgb(248, 249, 250)",
        }}
      ></div>

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div className="column is-8">
          <div className="content has-text-centered">
            {/* <h2 className="is-size-2 has-text-weight-bold has-text-centered p-6">
            Trafikvakter
          </h2> */}
            {data &&
              data.allDataYaml.edges.map(({ node }) => (
                <div className="columns is-multiline">
                  {node.trafikvakt &&
                    node.trafikvakt.map((member) => (
                      <div className="column is-4">
                        <div className="card">
                          <div className="card-image">
                            <figure class="image">
                              <img
                                className="is-rounded"
                                alt={member.name}
                                style={{
                                  border: "7px solid #f8f9fa",
                                  maxWidth: 250,
                                }}
                                src={member.photo}
                              />
                            </figure>
                          </div>
                          <div class="card-content is-family-secondary">
                            <div className="is-size-5 has-text-weight-bold is-family-primary">
                              {member.name}
                            </div>
                            <div className="is-size-6 has-text-grey has-text-weight-medium">
                              {member.position}
                            </div>
                            <div className="is-size-6 has-text-grey has-text-weight-medium">
                              {member.phone}
                            </div>
                            <div className="is-size-6 has-text-weight-medium">
                              <a href={`mailto:${member.email}`}>
                                {member.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>

        <div
          className="column is-4"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
          }}
        >
          {contact && (
            <div
              style={{
                alignSelf: "center",
                padding: "1rem",
                textAlign: "left",
              }}
            >
              <b>Kontakt</b>
              <br />
              Kontoret: {contact.node.phoneTrafikvakt}
              <br />
              Epost:{" "}
              <a
                href={`mailto:${contact.node.mailTrafikvakt}`}
              >
                {contact.node.mailTrafikvakt}
              </a>
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SpecificContactAndStaff {
        allDataYaml {
          edges {
            node {
              phoneTrafikvakt
              mailTrafikvakt
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
    render={(data) => <SpecificContactAndStaff data={data} />}
  />
);
