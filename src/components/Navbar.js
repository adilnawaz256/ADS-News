import { Title , TechNews , DailyNews, SearchBar,  } from "./Alllink"
import { Link } from "react-router-dom"
const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
   <Title/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technews">Tech News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dailynews">Daily News</Link>
        </li>
        </ul>
        <SearchBar/>
    </div>
  </div>
</nav>

    )
}

export default NavBar