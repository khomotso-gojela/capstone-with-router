import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Homepage() {
  return (
    <div className='blue lighten-5'>
      <div className="navbar-fixed">

        <nav className='nav-wrapper blue z-depth-2 navbar-fixed '>
          <div className="container">

            <div className='brand-logo left hide-on-small-only'>Podcast app</div>
            <ul className='right '>
              <li><NavLink to='/'>Home</NavLink> </li>
              <li><NavLink to='previews'>Previews</NavLink> </li>
              <li><NavLink to='favorites'>Favorites</NavLink></li>               
            </ul>
          </div>

        </nav>
      </div>
      <main >
          <Outlet />
      </main>
  </div>
    
  )
}

export default Homepage