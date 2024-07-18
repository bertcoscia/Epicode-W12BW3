import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import HomeNewPost from "./HomeNewPost";

const HomeMain = () => {
  const posts = useSelector(state => state.posts.content);

  return (
    <div className="home-main">
      <HomeNewPost />
      <hr />
      {posts.length > 0 &&
        posts
          .slice(-30)
          .reverse()
          .map(post => <SinglePost key={post._id} post={post} />)}
    </div>
  );
};

export default HomeMain;
