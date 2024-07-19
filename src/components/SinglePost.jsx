import { Button, Form } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./Profile/SingleComment";
import { useState } from "react";
import { authComments, getCommentsAction } from "../redux/actions";

const SinglePost = ({ post }) => {
  const profile = useSelector(state => state.profile.content);
  const comments = useSelector(state => state.comments.content);
  const profiles = useSelector(state => state.similarProfiles.contents);
  const dispatch = useDispatch();

  const whenPosted = createdAt => {
    const specificDate = new Date(createdAt);
    const currentDate = new Date();
    const diffInMillis = currentDate - specificDate;
    const diffInSeconds = Math.floor(diffInMillis / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays > 0) {
      return `${diffInDays}d •`;
    } else if (diffInHours > 0) {
      return `${diffInHours}h •`;
    } else {
      return `${diffInMinutes}m •`;
    }
  };

  const [comment, setComment] = useState({
    comment: "",
    rate: "5",
    elementId: post._id
  });

  const handleTextChange = event => {
    setComment({ ...comment, comment: event.target.value });
  };

  const postComment = comment => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization: authComments,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(response => {
        if (response.ok) {
          dispatch(getCommentsAction());
          return response.json();
        } else {
          throw new Error("Couldn't post the comment - @postComment");
        }
      })
      .catch(error => console.log(error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    postComment(comment);
    setComment({ ...comment, comment: "" });
  };

  return (
    <>
      {post.user.name !== undefined && (
        <div className="card p-3 mb-2">
          <div className="d-flex">
            <img src={post.user.image} alt="profile pic" className="rounded-circle me-3 object-fit-cover" style={{ height: "40px", width: "40px" }} />
            <div className="d-flex-flex-column">
              <h6 className="mb-0">{`${post.user.name} ${post.user.surname}`}</h6>
              <small className="text-muted">{post.user.title}</small>
              <div className="d-flex align-items-center">
                <small className="text-muted me-1">{whenPosted(post.createdAt)}</small>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
              </div>
            </div>
            {post.user._id === profile._id && <Pencil className="ms-auto" width={16} height={16} style={{ cursor: "pointer" }} />}
          </div>
          <p className="my-3">{post.text}</p>
          {post.image && <img src={post.image} alt="img post" className="img-post" />}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3 d-flex align-items-center">
              <img src={profile.image} alt="" style={{ height: "32px", width: "32px" }} className="rounded-circle me-3" />
              <Form.Control value={comment.comment} type="text" placeholder="Add a comment..." className="px-4 py-2 rounded-pill border border-dark-subtle align-self-center w-100 text-start btn-light" onChange={handleTextChange} />
              <Button variant="ligth" type="submit">
                <SendFill />
              </Button>
            </Form.Group>
          </Form>
          {comments.length > 0 && comments.filter(comment => comment.elementId === post._id).map(comment => <SingleComment key={comment._id} comment={comment} />)}
        </div>
      )}
    </>
  );
};

export default SinglePost;
