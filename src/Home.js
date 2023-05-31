import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/Url/submit">
                    <a class="nav-link">Url create</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Url/table">
                    <a class="nav-link">Url Table</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default Home
