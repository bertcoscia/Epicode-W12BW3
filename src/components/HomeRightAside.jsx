import { Button, Col } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";

const HomeRightAside = () => {
  return (
    <div style={{ flexShrink: "0", flexBasis: "300px" }}>
      <div className="bg-white rounded-5">
        <div className="d-flex justify-content-between p-2">
          <h3>LinkedIn notizie</h3>
          <InfoSquareFill className="align-self-center" />
        </div>
        <p className="p-2">Storie principali</p>

        <div className="p-2">
          <h5>Notiza</h5>
          <p>Data</p>
        </div>
        <div className="p-2">
          <h5>Notiza</h5>
          <p>Data</p>
        </div>
        <div className="p-2">
          <h5>Notiza</h5>
          <p>Data</p>
        </div>
        <div className="p-2">
          <h5>Notiza</h5>
          <p>Data</p>
        </div>
        <div className="p-2">
          <h5>Notiza</h5>
          <p>Data</p>
        </div>
        <div>
          <Button variant="outline-secondary" className="border-0 ms-2 mb-3">
            Vedi altro ▼
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeRightAside;
