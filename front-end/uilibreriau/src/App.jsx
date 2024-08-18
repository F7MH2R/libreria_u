import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Siempre agregar en los componentes
import withLoader from "./components/General/Loading/withLoader ";
import Nav from "./components/General/nav/Nav";
import Login from "./components/Usuario/Login/Login";
import Footer from "./components/General/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default withLoader(App);
