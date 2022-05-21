import NavigationBar from "./NavigationBar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";
import Headshot from "./Headshot";

function Layout(props) {
  return (
    <>
      <NavigationBar></NavigationBar>
      <section className="ai-c d-f fx-wr jc-c p">
        <AboutMe></AboutMe>
        <Headshot></Headshot>
      </section>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>
    </>
  );
}

export default Layout;
