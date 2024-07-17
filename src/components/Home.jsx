import { Container } from "react-bootstrap";
import HomeMain from "./HomeMain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction } from "../redux/actions";
import HomeLeftAside from "./HomeLeftAside";
import HomeRightAside from "./HomeRightAside";

const Home = () => {
  const posts = useSelector(state => state.posts.content);
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <Container style={{ marginTop: "110px" }} className="d-flex column-gap-4">
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
