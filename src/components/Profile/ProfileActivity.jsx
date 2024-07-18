import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { getPostsAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "../SinglePost";

const ProfileActivity = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.content);
  const posts = useSelector(state => state.posts.content);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <div id="activity" className="card bg-white pt-4 px-3 rounded mb-2">
      <div className="d-flex justify-content-between mb-3">
        <h3>Activity</h3>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-primary" className="rounded-pill px-3 align-self-center me-3">
            Create a post
          </Button>
          <Pencil />
        </div>
      </div>
      <div className="d-flex column-gap-2 my-2">
        <Button variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn">
          Posts
        </Button>
        <Button variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn">
          Comments
        </Button>
        <Button variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn">
          Images
        </Button>
      </div>
      {posts.length > 0 &&
        posts
          .filter(post => post.user._id === profile._id)
          .slice(-1)
          .map(post => <SinglePost key={post._id} post={post} />)}
      <h2 className="fs-5 text-center py-2">
        Show all posts <ArrowRight />
      </h2>
    </div>
  );
};

export default ProfileActivity;
