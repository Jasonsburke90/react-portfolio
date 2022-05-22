import { Link } from "react-router-dom";

function Resume() {
  return (
    <div>
      <div>Here is the link to my resume</div>
      <Link to="../assets/docs/updatedresume.pdf" target="_blank" download>
        Download Here
      </Link>
      <div>I am proficient in:</div>
    </div>
  );
}

export default Resume;
