import React, {useState} from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo-white.png'

const Navbar = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     location,
  //     active: false,
  //     navBarActiveClass: '',
  //     navBarSubpageClass: location.pathname === "/" ? '' : 'navbar-subpage'
  //   }
  // }

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState("")

  const url = typeof window !== 'undefined' ? window.location.pathname : '';

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("")
    // this.setState(
    //   {
    //     active: !this.state.active,
    //   },
      // after state has been updated,
    //   () => {
    //     // set the class in state for the navbar accordingly
    //     this.state.active
    //       ? this.setState({
    //           navBarActiveClass: 'is-active',
    //         })
    //       : this.setState({
    //           navBarActiveClass: '',
    //         })
    //   }
    // )
  }

    return (
      <nav
        id="navbar"
        // className={`navbar is-fixed-top ${this.state.navBarSubpageClass}`}
        className={`navbar is-fixed-top ${url === "/" ? '' : 'navbar-subpage'}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Halleskog-Hansson" style={{ height: '70px', marginRight: 30 }} className="logo"/>
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

          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/om-foretaget">
              Om företaget
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/tjanster">
              Tjänster
              </Link>
              <div className="navbar-dropdown">
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
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/produkter">
              Produkter
              </Link>
              <div className="navbar-dropdown" >
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
              </div>
            </div>

            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
                kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  }

export default Navbar
