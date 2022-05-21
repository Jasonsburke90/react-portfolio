function NavigationBar() {
  return (
    <>
      {/* add flexbox */}
      <header>
        <nav className="ai-c d-f  p jc-sb@lrg">
          <div className="bgc-pine fs-bold fs-italic fz-+++ p25 w-c">JB</div>
          <ul className=" fz-+ p d-f@large">
            <a>
              <li className="ml@large">About Me </li>
            </a>
            <a>
              <li className="ml@large"> My Projects </li>
            </a>
            <a>
              <li className="ml@large">Contact Me </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavigationBar;
