import { Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import { getSimilarProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
    </Container>
  );
};

export default ProfilePage;
