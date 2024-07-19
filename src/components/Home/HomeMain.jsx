import { useDispatch, useSelector } from "react-redux";
import HomeNewPost from "./HomeNewPost";
import SinglePost from "../SinglePost";
import { useEffect } from "react";
import { getCommentsAction } from "../../redux/actions";

const HomeMain = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsAction());
  }, []);

  return (
    <main>
      <HomeNewPost />
      <hr />
      {posts.length > 0 &&
        posts
          .slice(-150)
          .reverse()
          .map(post => <SinglePost key={post._id} post={post} />)}
    </main>
  );
};

export default HomeMain;
