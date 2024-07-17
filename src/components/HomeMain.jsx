import { useSelector } from "react-redux";
import NewPost from "./NewPost";
import SinglePost from "./SinglePost";

const HomeMain = () => {
  const posts = useSelector(state => state.posts.content);

  return (
    <div className="home-main">
      <NewPost />
      <hr />
      {posts.length > 0 && posts.slice(-5).map(post => <SinglePost key={post._id} post={post} />)}
    </div>
  );
};

export default HomeMain;
