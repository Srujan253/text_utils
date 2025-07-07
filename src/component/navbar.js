import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '1.7rem',
            letterSpacing: '2px',
            color: props.mode === 'dark' ? '#43c6ac' : '#43c6ac',
            textShadow: props.mode === 'dark' ? '0 2px 12px #222, 0 1px 0 #43c6ac88' : '2px 2px 8px #fff7, 0 2px 8px #43c6ac44'
          }}
        >
          <span role="img" aria-label="sparkle">✨</span> Text Utils
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" style={{cursor:'pointer'}} onClick={() => props.onNav('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{cursor:'pointer'}} onClick={() => props.onNav('about')}>
                About
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label " htmlfor="flexSwitchCheckDefault">enable dark Mode</label>
</div>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: 'Text Utils',
  mode: 'dark',
  toggleMode: () => {},
};

