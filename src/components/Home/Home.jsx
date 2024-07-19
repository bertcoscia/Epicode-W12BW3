import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction, getSimilarProfilesAction } from "../../redux/actions";
import HomeLeftAside from "./HomeLeftAside";
import HomeMain from "./HomeMain";
import HomeRightAside from "./HomeRightAside";

const Home = () => {
  const posts = useSelector(state => state.posts.content);
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getSimilarProfilesAction());
  }, []);

  return (
    <Container style={{ marginTop: "110px" }} className="d-flex home-flex-container">
      {profile && (
        <>
          <HomeLeftAside />
          <HomeMain />
          <HomeRightAside />
        </>
      )}
    </Container>
  );
};

export default Home;
