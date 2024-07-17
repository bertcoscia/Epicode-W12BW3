const SinglePost = ({ post }) => {
  return (
    <>
      {post.user.name !== undefined && (
        <div className="card p-3 mb-2">
          <div className="d-flex">
            <img src={post.user.image} alt="profile pic" className="rounded-circle me-3" style={{ height: "40px", width: "40px" }} />
            <div className="d-flex-flex-column">
              <h6 className="mb-0">{`${post.user.name} ${post.user.surname}`}</h6>
              <small className="text-muted">{post.user.title}</small>
            </div>
          </div>
          <p className="my-3">{post.text}</p>
          {post.image && <img src={post.image} alt="img post" className="img-post" />}
        </div>
      )}
    </>
  );
};

export default SinglePost;
