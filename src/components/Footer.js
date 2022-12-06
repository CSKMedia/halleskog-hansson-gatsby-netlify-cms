import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/hhlogo-w.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Halleskog & Hansson AB"
            style={{ height: '5em' }}
          />
        </div> */}
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/taplaner-och-tillstand">
                        Ta-planer & tillstånd
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tjanster">
                        Tjänster
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/produkter">
                        Produkter
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/nyheter">
                        Nyheter
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <span className="navbar-item" style={{ opacity: 0.5, padding: "0.5em 0.75em"}}>Om oss</span>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/om-foretaget">
                        Om företaget
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakta oss
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/allmanna-villkor">
                        Allmänna villkor
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/faktureringsinformation">
                      faktureringsinformation
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/vardegrund">
                      Värdegrund
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
              <img
                src={logo}
                alt="Halleskog & Hansson AB"
                style={{ height: '5em' }}
              />
              {/* <a href="https://www.bisnode.se/om-bisnode/vad-vi-gor/vart-satt-att-se-pa-risk-och-kredit/kreditvarderingsmodell-foretag/" target="_blank">
                <img src="https://ratinglogo.bisnode.com/2564614528200472571494671.svg"/>
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
