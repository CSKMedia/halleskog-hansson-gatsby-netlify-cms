import React, {useState} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../img/hhlogo-w.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'


export default function Navbar () {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState("")

  const url = typeof window !== 'undefined' ? window.location.pathname : '';

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("")
  }

  return (
    <StaticQuery
      query={graphql`
        query ContactPhoneQuery {
          dataYaml(id: {eq: "bfa59675-a55a-51fa-8db2-0055939c4a93"}) {
            phone
            phone2
          }
        }
      `}
      render={data => (
  // const [active, setActive] = useState(false)
  // const [navBarActiveClass, setNavBarActiveClass] = useState("")

  // const url = typeof window !== 'undefined' ? window.location.pathname : '';

  // const toggleHamburger = () => {
  //   // toggle the active boolean in the state
  //   setActive(!active)
  //   active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("")
  // }

    // return (
      <nav
        id="navbar"
        className={`navbar is-fixed-top ${url === "/" ? '' : 'navbar-subpage'}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
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
              <Link className="navbar-item" to="/tjanster">
              Tjänster
              </Link>
              {/* <div className="navbar-dropdown">
                <Link className="navbar-item" to="/">
                  Transporter
                </Link>
                <Link className="navbar-item" to="/">
                  Utställning efter TA-plan
                </Link>
                <Link className="navbar-item" to="/">
                  Tillsyn av arbetsplats
                </Link>
                <Link className="navbar-item" to="/">
                  TMA
                </Link>
                <Link className="navbar-item" to="/">
                  Måling av väglinjer
                </Link>
                <Link className="navbar-item" to="/">
                  Flaggvakt
                </Link>
              </div> */}
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/produkter">
              Produkter
              </Link>
              {/* <div className="navbar-dropdown" >
                <Link className="navbar-item" to="/">
                  Hyra skyltar
                </Link>
                <Link className="navbar-item" to="/">
                  Skyddsbarriärer
                </Link>
                <Link className="navbar-item" to="/">
                  TrafikBuffert
                </Link>
                <Link className="navbar-item" to="/">
                  Ta-balk
                </Link>
                <Link className="navbar-item" to="/">
                  Trafikreglering
                </Link>
                <Link className="navbar-item" to="/">
                  Områdesskydd
                </Link>
                <Link className="navbar-item" to="/">
                  Markeringsskärmar
                </Link>
              </div> */}
            </div>

            <Link className="navbar-item" to="/nyheter">
              Nyheter
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Om oss</a>
              <div class="navbar-dropdown">
                <Link className="navbar-item" to="/om-foretaget">
                  Om företaget
                </Link>
                <Link className="navbar-item" to="/kontakt">
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            { data.dataYaml ? (
            <div className="is-hidden-mobile navbar-item" style={{ display: "flex", fontSize: "0.7rem", color: "white", alignItems: "center"}}>
              <div style={{marginRight: "2rem"}}>kontor: {data.dataYaml.phone || ""} </div>
              <div style={{}}>Depå: {data.dataYaml.phone2 || ""}</div>
            {/* <FontAwesomeIcon icon={faMobileAlt} size="2x" color="#b60f1d" style={{marginRight: 5, color: "white"}}/> {data.dataYaml.phone} */}
            </div>
            ) : (<></>)
            }
          </div>
        </div>
      </div>
    </nav>
    )}
  />
  )
}



// export default Navbar
