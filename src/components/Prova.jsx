import { useState } from "react";
import { useSelector } from "react-redux";

const Prova = () => {
  const profile = useSelector(state => state.profile.content);
  const [img, setImg] = useState(null);

  const handleChange = event => {
    setImg(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (img && profile) {
      const formData = new formData();
      formData.append("profile", img);
    }
    //TODO: METTI FETCH PER INVIARE FORMDATA (METHOD: POST/NEGLI HEADERS VA SOLO AUTHENTICATION/ BODY: FORMDATA)
  };
};
