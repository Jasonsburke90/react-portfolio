import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      {/* add flexbox */}
      <header>
        <nav className="ai-c d-f  p jc-sb@lrg">
          <div className="bgc-pine fs-bold fs-italic fz-+++ p25 w-c">JB</div>
          <ul className=" fz-+ p d-f@large">
            <Link to="/">
              <li className="ml@large">About Me </li>
            </Link>
            <Link to="/portfolio">
              <li className="ml@large"> My Projects </li>
            </Link>
            <Link to="/contact">
              <li className="ml@large">Contact Me </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
