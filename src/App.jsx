import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./HomeComponent.css";

import MainProfile from "./components/MainProfile";
import NavComponent from "./components/NavComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <>
      <NavComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/home" element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
