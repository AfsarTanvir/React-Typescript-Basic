import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  home: string;
  about: string;
  buttons: string;
  normalFunction: string;
}

function Navbar(props: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" id="navbarId">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/union">
                      Union
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/button">
                      {props.buttons}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/normalFunction">
                      {props.normalFunction}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/inputField">
                      Input Field
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkbox">
                      Check Box
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/radio">
                      Radio Button and Dropdown
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mapFunction">
                      Map Function (Loop)
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarHooks"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/useRef">
                      User Ref
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useMemo">
                      User Memo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useContext">
                      Use Context
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/forwardRef">
                      Forward Ref
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;