import React from "react";
import HeaderNavItem from "./HeaderNavItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <>
      <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
      <HeaderNavItem text="Home" linkPath="/"  toggleClass=" selective" />
      <HeaderNavItem text="About" linkPath="/about" />
      <HeaderNavItem text="Feeds" linkPath="/feed" />
      {/* <HeaderNavItem text="News" linkPath="/news" /> */}
      <HeaderNavItem text="Contacts" linkPath="/contact" />
        {/* <li><a href="/" className="nav-link selective">Home</a></li>
        <li>
          <a href="/about" className="nav-link selective">
            About
          </a>
        </li>
        <li>
          <a href="/feed" className="nav-link selective">
            Feeds
          </a>
        </li>
        <li>
          <a href="/news" className="nav-link selective">
            News
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link selective">
            Contacts
          </a>
        </li> */}
      </ul>

      {/* <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0"> */}
      {/*  me-lg-auto */}
      {/* <HeaderNavItem text="Home" linkPath="/"/> */}
      {/* <HeaderNavItem text="About" linkPath="/"/>
      <HeaderNavItem text="Feeds" linkPath="/"/>
      <HeaderNavItem text="News" linkPath="/"/>
      <HeaderNavItem text="Contacts" linkPath="/" /> */}

      {/* <li>
        <Link to="#" className="nav-link selective">
          Home
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link">
          Feeds
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link">
          News
        </Link>
      </li>
      <li>
        <Link to="#" className="nav-link">
          Contacts
        </Link>
      </li> */}

      {/* <Link to="#" className="nav-link selective">
          Home
        </Link> */}

      {/* <li><a href="/" className="nav-link selective">Home</a></li>
      <li><a href="/about" className="nav-link selective">About</a></li>
      <li><a href="/feed" className="nav-link selective">Feeds</a></li>
      <li><a href="/news" className="nav-link selective">News</a></li>
      <li><a href="/contact" className="nav-link selective">Contacts</a></li>

    </ul> */}

      {/* <Router> */}
      {/* <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/feed">Feeds</Link>
          </li>
        </ul> */}
      {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/feed">
            <Feeds />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </>
  );
};
export default HeaderNavigation;