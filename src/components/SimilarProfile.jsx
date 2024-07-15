import { Button, Col, Row } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";

const SimilarProfile = ({ profile }) => {
  return (
    <Row className="my-3 mx-2">
      <Col xs={3}>
        <img src={profile.image} alt="profile pic" style={{ width: "48px", height: "48px" }} className="rounded-circle" />
      </Col>
      <Col xs={9}>
        <h6>{`${profile.name} ${profile.surname}`}</h6>
        <small className="line-clamp my-2">{profile.title}</small>
        <Button height={16} width={16} variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle">
          <SendFill className="me-2" />
          Message
        </Button>
      </Col>
    </Row>
  );
};

export default SimilarProfile;
