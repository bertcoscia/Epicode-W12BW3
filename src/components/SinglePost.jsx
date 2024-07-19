import { Form, Row, Col } from "react-bootstrap";
import { Pencil, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const SinglePost = ({ post }) => {
  const profile = useSelector((state) => state.profile.content);

  const whenPosted = (createdAt) => {
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

  return (
    <>
      {post.user.name !== undefined && (
        <div className="card p-3 mb-2">
          <div className="d-flex">
            <img
              src={post.user.image}
              alt="profile pic"
              className="rounded-circle me-3 object-fit-cover"
              style={{ height: "40px", width: "40px" }}
            />
            <div className="d-flex-flex-column">
              <h6 className="mb-0">{`${post.user.name} ${post.user.surname}`}</h6>
              <small className="text-muted">{post.user.title}</small>
              <div className="d-flex align-items-center">
                <small className="text-muted me-1">
                  {whenPosted(post.createdAt)}
                </small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
              </div>
            </div>
            {post.user._id === profile._id && (
              <Pencil
                className="ms-auto"
                width={16}
                height={16}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <p className="my-3">{post.text}</p>
          {post.image && (
            <img src={post.image} alt="img post" className="img-post" />
          )}

          <Form>
            <Form.Group className="mt-3 d-flex">
              <img
                src={profile.image}
                alt=""
                style={{ height: "48px", width: "48px" }}
                className="rounded-circle me-3"
              />
              <Form.Control
                type="text"
                placeholder="inserisci un commento..."
                className="px-4 py-2 rounded-pill border border-dark-subtle align-self-center w-100 text-start btn-light"
              />
            </Form.Group>
          </Form>

          <Row className="mt-3">
            <Col sm={1}>
              <img
                src={profile.image}
                alt=""
                style={{ height: "48px", width: "48px" }}
                className="rounded-circle me-3"
              />
            </Col>
            <Col sm={10} className="ms-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="m-0">{profile.name}</h6>
                  <p className="text-muted mb-2">{profile.title}</p>
                </div>
                <div className="d-flex align-items-center">
                  {whenPosted(post.createdAt)}

                  <ThreeDots className="ms-1" />
                </div>
              </div>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                quia.
              </p>

              <div className="d-flex">
                <p className="text-muted">Like • </p>
                <p className="text-muted ms-1"> Reply</p>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default SinglePost;
