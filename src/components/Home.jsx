import { Container } from "react-bootstrap";
import HomeMain from "./HomeMain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction } from "../redux/actions";

const Home = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const profile = useSelector(state => state.profile.content);
  return <Container style={{ marginTop: "110px" }}>{profile && <HomeMain />}</Container>;
};

export default Home;
