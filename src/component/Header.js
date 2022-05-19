import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to={"/"} >Employee</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to={"/search"}>SEARCH</Link>
        </li>
        <li class="nav-item">
          <Link to={"/"} class="nav-link" >Addemployee</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to={"/"}>VIEW</Link>
          <a class="nav-link" href="#"></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header