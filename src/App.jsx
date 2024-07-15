import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainProfile from "./components/MainProfile";
import NavComponent from "./components/NavComponent";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <NavComponent />
      <Container style={{ marginTop: "110px" }}>
        <Row>
          <MainProfile />
        </Row>
      </Container>
    </>
  );
}

export default App;
