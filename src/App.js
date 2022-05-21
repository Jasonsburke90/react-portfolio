import Layout from "./components/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="bgc-darkblue d-f fxd-c">
        <Layout></Layout>
      </div>
    </Router>
  );
}

export default App;
