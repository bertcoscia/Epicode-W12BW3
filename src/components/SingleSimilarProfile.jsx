import { Button, Col, Row } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";

const SingleSimilarProfile = ({ profile }) => {
  return (
    <Row className="my-3 mx-2">
      <Col xs={2} lg={3}>
        <img src={profile.image} alt="profile pic" style={{ width: "48px", height: "48px" }} className="rounded-circle me-auto object-fit-cover" />
      </Col>
      <Col xs={10} lg={9} className="d-flex d-lg-block border-bottom similar-profile">
        <div className="me-auto d-lg-none">
          <h6>{`${profile.name} ${profile.surname}`}</h6>
          <small className="line-clamp my-2">{profile.title}</small>
        </div>
        <h6 className="d-none d-lg-block">{`${profile.name} ${profile.surname}`}</h6>
        <small className="d-none d-lg-block line-clamp my-2">{profile.title}</small>
        <Button height={16} width={16} variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle align-self-center">
          <SendFill className="me-2" />
          Message
        </Button>
      </Col>
    </Row>
  );
};

export default SingleSimilarProfile;
