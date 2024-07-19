import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavComponent from "./components/NavComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Jobs from "./components/Jobs/Jobs";
import Company from "./components/Jobs/Company";
import Prova from "./components/Prova";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs/:search_query?" element={<Jobs />} />
          <Route path="/company/:company_name" element={<Company />} />
          {<Route path="/prova" element={<Prova />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
