import { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { auth } from "../redux/actions";

const Prova = () => {
  const profile = useSelector(state => state.profile.content);
  const [img, setImg] = useState(null);

  const handleChange = event => {
    setImg(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (img && profile) {
      const formData = new FormData();
      formData.append("profile", img);
      if (formData) {
        fetchPostPic(formData);
      }
    }
  };
  //TODO: METTI FETCH PER INVIARE FORMDATA (METHOD: POST/NEGLI HEADERS VA SOLO AUTHENTICATION/ BODY: FORMDATA)

  const fetchPostPic = formData => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`, {
      method: "POST",
      headers: {
        Authorization: auth
      },
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Coulnd't send data - @postPic");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Form style={{ marginTop: "150px", width: "50%", marginInline: "auto" }} onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl type="file" accept="img/*" placeholder="Upload a picture" onChange={handleChange} />
        <Button type="submit">Upload</Button>
      </InputGroup>
    </Form>
  );
};

export default Prova;
