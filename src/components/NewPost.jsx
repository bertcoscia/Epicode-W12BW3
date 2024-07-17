import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { Calendar3, CardText, Image } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const NewPost = () => {
  const profile = useSelector(state => state.profile.content);

  const [post, setPost] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = event => {
    setPost(event.target.value);
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
            <Form>
              <InputGroup>
                <FormControl as="textarea" placeholder="What do you want to talk about?" onChange={handleChange} className="border-0 mb-3" />
              </InputGroup>
              <Button type="submit">Upload</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <button type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <Image width={24} height={24} fill="#378FE9" className="me-2" />
          <span>Media</span>
        </button>
        <button type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <Calendar3 width={24} height={24} fill="#C37D16" className="me-2" />
          <span>Event</span>
        </button>
        <button type="button" className="bg-transparent border-0 d-flex newpost-btn py-2 rounded px-1">
          <CardText width={24} height={24} fill="#E06846" className="me-2" />
          <span>Write article</span>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
