import NavigationBar from "./NavigationBar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <NavigationBar></NavigationBar>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Footer></Footer>
    </>
  );
}

export default Layout;
