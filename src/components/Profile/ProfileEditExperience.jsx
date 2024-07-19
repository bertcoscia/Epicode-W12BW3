import { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { auth, getExperienceAction } from "../../redux/actions";

const ProfileEditExperience = ({ experience }) => {
  const dispatch = useDispatch();

  const [img, setImg] = useState(null);
  const handleChangePic = event => {
    setImg(event.target.files[0]);
  };

  const [newExperience, setNewExperience] = useState({
    role: experience.role,
    company: experience.role,
    startDate: experience.startDate,
    endDate: experience.endDate,
    description: experience.description,
    area: experience.area,
    user: experience.user,
    _id: experience._id
  });

  const handleChange = (field, value) => {
    setNewExperience(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const putExperience = async experience => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience._id}`, {
        method: "PUT",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(experience)
      });
      if (response.ok) {
        const responseData = await response.json();
        if (img) {
          await fetchExperiencePic(experience.user, responseData._id, img);
        }
        return responseData._id;
      } else {
        throw new Error("Coulnd't send data - @postExperienceAction");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExperiencePic = async (profileId, experienceId, file) => {
    const formData = new FormData();
    formData.append("experience", file);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/${experienceId}/picture`, {
        method: "POST",
        headers: {
          Authorization: auth
        },
        body: formData
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Couldn't send data - @fetchExperiencePic @ProfileExperience.jsx");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await putExperience(newExperience);
    setNewExperience({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      user: experience.user,
      _id: ""
    });
    setShow2(false);
    dispatch(getExperienceAction(experience.user));
  };

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  return (
    <>
      <Pencil style={{ cursor: "pointer" }} onClick={handleShow2} />
      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <p className="ps-3 pt-2">* Required </p>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Input1">
              <Form.Label>Title*</Form.Label>
              <Form.Control type="text" placeholder="Ex: Retail Sales Manager" required value={newExperience.role} onChange={e => handleChange("role", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="input2">
              <Form.Label>Company name*</Form.Label>
              <Form.Control type="text" placeholder="Ex: Microsoft" required value={newExperience.company} onChange={e => handleChange("company", e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="input3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Ex: London, United Kingdom" value={newExperience.area} onChange={e => handleChange("area", e.target.value)} />
            </Form.Group>
            <Form.Check label="I am currently working in this role" className="mb-3" />
            <Form.Group className="mb-3">
              <Form.Label>Start Date*</Form.Label>
              <div className="d-flex gap-3">
                <Form.Select required value={newExperience.startDate.split("-")[1] || ""} onChange={e => handleChange("startDate", `${newExperience.startDate.split("-")[0] || ""}-${e.target.value}`)}>
                  <option value="">Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
                <Form.Select required value={newExperience.startDate.split("-")[0] || ""} onChange={e => handleChange("startDate", `${e.target.value}-${newExperience.startDate.split("-")[1] || ""}`)}>
                  <option value="">Year</option>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End date</Form.Label>
              <div className="d-flex gap-3">
                <Form.Select value={newExperience.endDate ? newExperience.endDate.split("-")[1] : ""} onChange={e => handleChange("endDate", `${newExperience.endDate.split("-")[0] || ""}-${e.target.value}`)}>
                  <option value="">Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
                <Form.Select value={newExperience.endDate ? newExperience.endDate.split("-")[1] : ""} onChange={e => handleChange("endDate", `${e.target.value}-${newExperience.endDate.split("-")[1] || ""}`)}>
                  <option value="">Year</option>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={newExperience.description} onChange={e => handleChange("description", e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Modal.Title className="fs-5">Media</Modal.Title>
              <p>Add media like images, documents, sites or presentations.</p>
              <FormControl type="file" accept="img/*" onChange={handleChangePic} className="my-3" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" className="rounded-pill px-3" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileEditExperience;