import covidometer from "../assets/images/COVID_Project.png";
import recipeMe from "../assets/images/recipeme.png";
import noteTaking from "../assets/images/jsb-note-taking-app.png";
import weatherDashboard from "../assets/images/weatherdashboard.png";
import horiseon from "../assets/images/horiseon_img.png";
import password from "../assets/images/passwordgen.png";
import codequiz from "../assets/images/codingquiz.png";
import { computeHeadingLevel } from "@testing-library/react";
function Portfolio() {
  return (
    <section className="d-f fx-w jc-c p">
      <h1 id="my_projects" className="fx-1 fz-+++ min-w-100 ta-c">
        My Projects:
      </h1>
      <section className="fx-1-100 p maxw45@lrg">
        <div className="fz-++ p ta-c">Covidometer</div>
        <a href="https://team-3-vcjt.github.io/Project/">
          <img
            className="w-75"
            src={covidometer}
            alt="covid graph project"
          ></img>
        </a>
        <div className="ta-c">
          Github Repository Link:{" "}
          <a href="https://github.com/Team-3-VCJT/Project" className="fc-link">
            https://github.com/Team-3-VCJT/Project
          </a>
        </div>
      </section>
      <section className="fx-1-100 p ta-c  maxw45@lrg">
        <div className="fz-++ p">Recipe Me!</div>
        <a href="https://project-2-jhmm.herokuapp.com/">
          <img className="" src={recipeMe} alt="recipe me!"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a href="https://github.com/handibar/project2" className="fc-link">
            https://github.com/handibar/project2
          </a>
        </div>
      </section>
      <section class="fx-1-100 p ta-c  maxw45@lrg">
        <div class="fz-++ p">Note Taking App</div>
        <a href="https://jsb-note-taking-app.herokuapp.com/">
          <img class="" src={noteTaking} alt="note taking"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a
            href="https://github.com/Jasonsburke90/Note-Taking-App"
            class="fc-link"
          >
            https://github.com/Jasonsburke90/Note-Taking-App
          </a>
        </div>
      </section>
      <section class="fx-1-100 p ta-c  maxw45@lrg">
        <div class="fz-++ p">Weather Dashboard</div>
        <a href="https://jasonsburke90.github.io/hw6/">
          <img class="" src={weatherDashboard} alt="weather dashboard"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a href="https://github.com/Jasonsburke90/hw6" class="fc-link">
            https://github.com/Jasonsburke90/hw6
          </a>
        </div>
      </section>

      <section class="fx-1-100 p ta-c maxw45@lrg">
        <div class="fz-++ p">Horiseon Website</div>
        <a href="https://jasonsburke90.github.io/hw1b/">
          <img class="" src={horiseon} alt="Company Website"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a href="https://github.com/Jasonsburke90/hw1b" class="fc-link">
            https://github.com/Jasonsburke90/hw1b
          </a>
        </div>
      </section>

      <section class="fx-1-100 p ta-c  maxw45@lrg">
        <div class="fz-++ p">Random Password Generator</div>
        <a href="https://jasonsburke90.github.io/hw3/">
          <img class="" src={password} alt="password generator"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a href="https://github.com/Jasonsburke90/hw3" class="fc-link">
            https://github.com/Jasonsburke90/hw3
          </a>
        </div>
      </section>

      <section class="fx-1-100 p ta-c maxw45@lrg">
        <div class="fz-++ p">Coding Quiz!</div>
        <a href="https://jasonsburke90.github.io/hw4/">
          <img class="" src={codequiz} alt="coding quiz"></img>
        </a>
        <div>
          Github Repository Link:{" "}
          <a href="https://github.com/Jasonsburke90/hw4" class="fc-link">
            https://github.com/Jasonsburke90/hw4
          </a>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
