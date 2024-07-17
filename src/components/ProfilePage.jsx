import { Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import AsideProfile from "./AsideProfile";
import { getSimilarProfilesAction } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FooterComponent from "./FooterComponent";
import Prova from "./Prova";

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilarProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ marginTop: "110px" }}>
      <Prova />
    </Container>
  );
};

export default ProfilePage;

{
  /* <Row>
        <MainProfile />
        <AsideProfile />
      </Row>
      <FooterComponent /> */
}
