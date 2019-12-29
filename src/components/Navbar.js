import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: " "
            });
      }
    );
  };
  render() {
    const { navBarActiveClass } = this.state;
    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            {/* <img
            src="https://bulma.io/images/bulma-logo.png"
            width={112}
            height={28}
          /> */}
            Dog Whistle
          </a>
          <a
            role='button'
            className={`navbar-burger burger ${navBarActiveClass}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            onClick={() => this.toggleHamburger()}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div
          id='navbarBasicExample'
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/news' className='navbar-item'>
              News
            </Link>
            <Link to='/recording' className='navbar-item'>
              Recording
            </Link>
            <Link to='/videos' className='navbar-item'>
              Video Sessions
            </Link>
            <Link to='/tapes' className='navbar-item'>
              Tapes
            </Link>
            <Link to='/about' className='navbar-item'>
              About
            </Link>
            <Link to='/contact' className='navbar-item'>
              Contact
            </Link>
          </div>
          {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
