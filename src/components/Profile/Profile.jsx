import { Container } from "react-bootstrap";
import { getSimilarProfilesAction } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FooterComponent from "../FooterComponent";
import ProfileRightAside from "./ProfileRightAside";
import ProfileMain from "./ProfileMain";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilarProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container style={{ marginTop: "110px" }} className="d-flex home-flex-container">
        <ProfileMain />
        <ProfileRightAside />
      </Container>
      <Container>
        <FooterComponent />
      </Container>
    </>
  );
};

export default Profile;
