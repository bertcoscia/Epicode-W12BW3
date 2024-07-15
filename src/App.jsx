import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainProfile from "./components/MainProfile";
import NavComponent from "./components/NavComponent";
import { Container, Row } from "react-bootstrap";
import AsideProfile from "./components/AsideProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <NavComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
