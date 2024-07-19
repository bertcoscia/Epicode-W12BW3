import { ThreeDots } from "react-bootstrap-icons";

const SingleComment = ({ comment }) => {
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

  return (
    <div className="mt-3 d-flex">
      <div>
        <img src="https://thispersondoesnotexist.com" alt="" style={{ height: "32px", width: "32px" }} className="rounded-circle me-3" />
      </div>
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="m-0">{comment.author}</h6>
            <p className="text-muted mb-2 small">TITOLO QUALUNQUE</p>
          </div>
          <small className="d-flex align-items-center text-muted">
            {whenPosted(comment.createdAt)}

            <ThreeDots className="ms-1" />
          </small>
        </div>
        <p className="mb-3">{comment.comment}</p>

        <div className="d-flex">
          <p className="text-muted">Like • </p>
          <p className="text-muted ms-1"> Reply</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
