import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { Calendar3, CardText, EmojiSmile, Exclamation, Image, Plus, Stars } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { auth, getPostsAction } from "../redux/actions";

const HomeNewPost = () => {
  const profile = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({ text: "" });
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(null);
  const [postId, setPostId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = event => {
    setNewPost({ text: event.target.value });
  };

  const handleChangePic = event => {
    setImg(event.target.files[0]);
  };

  const postNewPost = async post => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      });

      if (response.ok) {
        const responseData = await response.json();
        /* setPostId(responseData._id); */
        const postPicResp = await fetchPostPic(responseData._id, img);

        dispatch(getPostsAction());

        return responseData._id;
      } else {
        throw new Error("Couldn't send data - @postNewPost");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPostPic = async (postId, file) => {
    const formData = new FormData();
    formData.append("post", file);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        headers: {
          Authorization: auth
        },
        body: formData
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Couldn't send data - @fetchPostPic @NewPost.jsx");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    /* const id = await  */ postNewPost(newPost);
    /* if (img) {
      await fetchPostPic(id, img);
    } */
    setNewPost({ text: "" });
    setImg(null);
    setShow(false);
    /* dispatch(getPostsAction()); */
  };

  return (
    <div className="rounded bg-white py-1 px-3 card mb-3">
      <div className="d-flex my-3">
        <img src={profile.image} alt="" style={{ height: "48px", width: "48px" }} className="rounded-circle me-3" />
        <Button variant="light" className="px-4 py-2 rounded-pill border border-dark-subtle align-self-center w-100 text-start" onClick={handleShow}>
          Start a post, try writing with AI
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <div className="d-flex">
              <img src={profile.image} alt="" style={{ height: "48px", width: "48px" }} className="rounded-circle me-3" />
              <div className="d-flex flex-column">
                <h4>{`${profile.name} ${profile.surname}`}</h4>
                <small>Post to Anyone</small>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <FormControl required as="textarea" placeholder="What do you want to talk about?" onChange={handleChange} className="border-0 w-100" style={{ height: "150px" }} />
                <FormControl type="file" accept="img/*" onChange={handleChangePic} className="my-3" />
              </InputGroup>
              <EmojiSmile width={24} height={24} style={{ cursor: "pointer" }} className="mb-3" />
              <div className="d-flex me-auto">
                <Button variant="light" className="px-3 py-1 rounded-pill border border-dark-subtle me-3">
                  <Stars width={16} height={16} fill="#c37d16" className="me-2" />
                  <small>Rewrite with AI</small>
                </Button>
                <Button variant="light" type="button" className="bg-transparent border-0 py-2 rounded px-1">
                  <Image width={24} height={24} fill="currentColor" className="me-2" />
                </Button>
                <Button variant="light" type="button" className="bg-transparent border-0 py-2 rounded px-1">
                  <Calendar3 width={24} height={24} fill="currentColor" className="me-2" />
                </Button>
                <Button variant="light" type="button" className="bg-transparent border-0 py-2 rounded px-1">
                  <Exclamation width={24} height={24} fill="currentColor" className="me-2" />
                </Button>
                <Button variant="light" type="button" className="bg-transparent border-0 py-2 rounded px-1">
                  <Plus width={24} height={24} fill="currentColor" className="me-2" />
                </Button>
              </div>
              <Button type="submit" variant="light" className="px-4 py-1 rounded-pill border border-dark-subtle mt-3 mb-2">
                Post
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Button variant="light" type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <Image width={24} height={24} fill="#378FE9" className="me-2" />
          <span>Media</span>
        </Button>
        <Button variant="light" type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <Calendar3 width={24} height={24} fill="#C37D16" className="me-2" />
          <span>Event</span>
        </Button>
        <Button variant="light" type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <CardText width={24} height={24} fill="#E06846" className="me-2" />
          <span>Write article</span>
        </Button>
      </div>
    </div>
  );
};

export default HomeNewPost;
