import { Dropdown, DropdownButton } from "react-bootstrap";
import {
  CaretDownFill,
  GearFill,
  QuestionCircleFill,
  ShieldShaded,
} from "react-bootstrap-icons";

function FooterComponent() {
  return (
    <section id="footer" className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-2 mb-4 me-3">
          <p>About</p>
          <p>Community Guidelines</p>
          <p>
            Privacy & Terms <CaretDownFill />
          </p>
          <p>Sales Solutions</p>
          <p>Safety Center</p>
        </div>
        <div className="col-12 col-md-2 mb-4 me-3">
          <p>Acessibility</p>
          <p>Careers</p>
          <p>Ad Choices</p>
          <p>Mobile</p>
        </div>
        <div className="col-12 col-md-2 mb-4 me-3">
          <p>Talent Solutions</p>
          <p>Marketing Solutions</p>
          <p>Advertising</p>
          <p>Small Business</p>
        </div>
        <div className="col-12 col-md-2 me-3">
          <div className="d-flex mb-3">
            <div className="me-2">
              <QuestionCircleFill />
            </div>
            <div>
              <h5 className="fs-6 mb-0">Questions?</h5>
              <p>Visit our Help Center</p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="me-2">
              <GearFill />
            </div>
            <div>
              <h5 className="fs-6 mb-0">Manage your account and privacy</h5>
              <p>Go to your Settings</p>
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="me-2">
              <ShieldShaded />
            </div>
            <div>
              <h5 className="fs-6 mb-0">Recommendation transparency</h5>
              <p>Learn more about Recommended Content.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <p className="m-0">Select Language</p>
          <DropdownButton
            variant={"outline-secondary"}
            title={
              <span>
                English <CaretDownFill className="iconFooter" />
              </span>
            }
          >
            <Dropdown.Item eventKey="1">Italian</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </section>
  );
}

export default FooterComponent;
