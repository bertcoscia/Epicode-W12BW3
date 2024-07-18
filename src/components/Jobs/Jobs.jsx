import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HomeLeftAside from "../Home/HomeLeftAside";
import HomeRightAside from "../Home/HomeRightAside";
import JobsMain from "./JobsMain";

const Jobs = () => {
  const profile = useSelector(state => state.profile.content);

  return (
    <Container style={{ marginTop: "110px" }} className="d-flex home-flex-container">
      {profile && (
        <>
          <HomeLeftAside />
          <JobsMain />
          <HomeRightAside />
        </>
      )}
    </Container>
  );
};

export default Jobs;
