import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      {/* add flexbox */}
      <header>
        <nav className="ai-c d-f  p jc-sb@lrg">
          <div className="bgc-pine fs-bold fs-italic fz-+++ p25 w-c">JB</div>
          <ul className=" fz-+ p d-f@large">
            <li className="ml@large">
              {" "}
              <NavLink exact activeClassName="active" to="/">
                About Me
              </NavLink>
            </li>
            <li className="ml@large">
              <NavLink exact to="/portfolio" activeClassName="active">
                My Projects
              </NavLink>{" "}
            </li>
            <li className="ml@large">
              <NavLink exact to="/contact" aactiveClassName="active">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
