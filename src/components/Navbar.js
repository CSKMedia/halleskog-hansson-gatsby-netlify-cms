import React, {useState} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/hhlogo-w.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'


export default function Navbar ({isIndex}) {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState("")

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("")
  }

  return (
    <nav
      id="navbar"
      className={`navbar is-fixed-top ${ isIndex ? '' : 'navbar-subpage'}`}
      role="navigation"
      aria-label="main-navigation"
      style={{minHeight: 70}}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo" style={{padding: 0, margin: 0}}>
            <img src={logo} alt="Halleskog-Hansson" className="logo"/>
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >

        <div className="navbar-end has-text-centered">

        <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-item" to="/taplaner-och-tillstand">
            Ta-planer & Tillstånd
            </Link>
          </div>


          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-item" to="/tjanster">
            Tjänster
            </Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-item" to="/produkter">
            Produkter
            </Link>
          </div>
          <Link className="navbar-item" to="/nyheter">
            Nyheter
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-hidden-touch">Om oss</a>
            <div class="navbar-dropdown">
              <Link className="navbar-item" to="/om-foretaget">
                Om företaget
              </Link>
              <Link className="navbar-item" to="/kontakt">
                Kontakta oss
              </Link>
              <Link className="navbar-item" to="/allmanna-villkor">
                Allmänna villkor
              </Link>
              <Link className="navbar-item" to="/faktureringsinformation">
                Faktureringsinformation
              </Link>
              <Link className="navbar-item" to="/vardegrund">
                Värdegrund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

