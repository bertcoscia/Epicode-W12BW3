import { Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import { getSimilarProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const similarProfiles = useSelector(state => state.similarProfiles.content);

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
