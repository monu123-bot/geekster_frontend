import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
  <div className="container" style={{height:'50px',overflow:'visible'}}>
  <img variant="top" style={{height:"100px",position:'absolute',top:'5px'}} src="/logo1.png" />
    {/* <a className="navbar-brand" href="#!"><b>Food Done Right</b> </a> */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <a className="nav-link" href="#!">Panel To Assign Delivery To Nearby Outlet</a>
        </li>
        
        
        <button type="button" className="btn btn-dark ms-3">Logout</button>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nav
