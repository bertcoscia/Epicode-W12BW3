import { useSelector } from "react-redux";
import HomeNewPost from "./HomeNewPost";
import SinglePost from "../SinglePost";

const HomeMain = () => {
  const posts = useSelector(state => state.posts.content);

  return (
    <main>
      <HomeNewPost />
      <hr />
      {posts.length > 0 &&
        posts
          .slice(-30)
          .reverse()
          .map(post => <SinglePost key={post._id} post={post} />)}
    </main>
  );
};

export default HomeMain;
