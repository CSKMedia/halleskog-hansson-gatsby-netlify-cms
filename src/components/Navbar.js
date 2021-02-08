import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >

          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/om-foretaget">
              Om företaget
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item" to="/tjanster">
              Tjänster
              </Link>
              <div className="navbar-dropdown" >
                <div style={{
                  padding: 30, //display: "flex"
                }}>
                  <div>
                    <p className="has-text-left has-text-weight-bold">
                      Tjänster
                    </p>
                    <Link className="navbar-item" to="/">
                      Transporter
                    </Link>
                    <Link className="navbar-item" to="/">
                      Tillsyn av arbetsplats
                    </Link>
                  </div>

                  <div>
                    <p className="has-text-left has-text-weight-bold">
                      Produkter
                    </p>
                    <Link className="navbar-item" to="/">
                      en bra produkt
                    </Link>
                    <Link className="navbar-item" to="/">
                      en bättre produkt
                    </Link>
                  </div>


                  <div>
                    <p className="has-text-left has-text-weight-bold">
                      Info
                    </p>
                    <Link className="navbar-item" to="/">
                      hjälp
                    </Link>
                    <Link className="navbar-item" to="/">
                      kontakta oss
                    </Link>
                  </div>

                </div>
              </div>
            </div>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
