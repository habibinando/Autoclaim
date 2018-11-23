var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Navbar() {
  return (
    <header className="header clearfix">
      <nav>
        <ul className="nav nav-pills float-right">
          <li className="nav-item">
            <NavLink exact activeClassName='active' to='/' className='nav-link'>Home<span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='active' to='/new-claim' className='nav-link'>New Claim</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='active' to='/auth' className='nav-link'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
      <h3 className="text-muted">Claim It</h3>
    </header>
  )
}

module.exports = Navbar;