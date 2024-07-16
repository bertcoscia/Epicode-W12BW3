import { Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import { getExperienceAction, getSimilarProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "./FooterComponent";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.profile.content);

  useEffect(() => {
    dispatch(getSimilarProfilesAction());
  }, []);

  return (
    <Container style={{ marginTop: "110px" }}>
      <Row>
        <MainProfile />
        <AsideProfile />
      </Row>
      <FooterComponent />
    </Container>
  );
};

export default ProfilePage;
