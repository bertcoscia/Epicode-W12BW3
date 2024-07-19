import { useEffect, useState } from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const SingleComment = ({ comment }) => {
  const dispatch = useDispatch();
  const similarProfiles = useSelector(state => state.similarProfiles.content);
  const whenPosted = createdAt => {
    const specificDate = new Date(createdAt);
    const currentDate = new Date();
    const diffInMillis = currentDate - specificDate;
    const diffInSeconds = Math.floor(diffInMillis / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays > 0) {
      return `${diffInDays}d`;
    } else if (diffInHours > 0) {
      return `${diffInHours}h`;
    } else {
      return `${diffInMinutes}m`;
    }
  };

  const findUser = commentAuthor => {
    const filteredUser = similarProfiles.find(user => user.email === commentAuthor || user.username === commentAuthor);
    setFoundUser(filteredUser);
  };

  useEffect(() => {
    findUser(comment.author);
  }, []);

  const [foundUser, setFoundUser] = useState(null);

  return (
    <div className="mt-3 d-flex">
      <div>
        <img src={foundUser && foundUser.image} alt="" style={{ height: "32px", width: "32px" }} className="rounded-circle me-3" />
      </div>
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-start">
            {foundUser && <h6>{`${foundUser.name} ${foundUser.surname}`}</h6>}
            {foundUser && <p className="text-muted mb-2 small">{foundUser.title}</p>}
          </div>
          <small className="text-muted d-flex align-items-center">
            {whenPosted(comment.createdAt)} <ThreeDots className="ms-2" />{" "}
          </small>
        </div>

        <div className="d-flex">
          <p className="text-muted">Like • </p>
          <p className="text-muted ms-1"> Reply</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
