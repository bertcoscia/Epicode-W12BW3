import { Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import { getSimilarProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FooterComponent from "./FooterComponent";

const ProfilePage = () => {
  const dispatch = useDispatch();

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
