import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import JobsMain from "./JobsMain";
import JobsLeftAside from "./JobsLeftAside";
import JobsRightAside from "./JobsRightAside";

const Jobs = () => {
  const profile = useSelector(state => state.profile.content);

  return (
    <Container style={{ marginTop: "110px" }} className="d-flex home-flex-container">
      {profile && (
        <>
          <JobsLeftAside />
          <JobsMain />
          <JobsRightAside />
        </>
      )}
    </Container>
  );
};

export default Jobs;
