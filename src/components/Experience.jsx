import { Pencil, PlusLg } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExperienceAction } from "../redux/actions";
import { Form, Modal, Button } from "react-bootstrap";

const Experience = ({ id }) => {
  const dispatch = useDispatch();
  const experience = useSelector(state => state.experience.content);

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  useEffect(() => {
    dispatch(getExperienceAction(id));
  }, []);

  return (
    <div id="experience" className="card bg-white pt-4 px-3 rounded">
      <div className="d-flex justify-content-between mb-2">
        <h3>Experience</h3>
        <div className="d-flex">
          <PlusLg className="me-3" onClick={handleShow2} style={{ cursor: "pointer" }} />

          <Modal show={show2} onHide={handleClose2} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add experience</Modal.Title>
            </Modal.Header>
            <p className="ps-3 pt-2">* Required </p>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="Input1">
                  <Form.Label>Title*</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Retail Sales Manager" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="input2">
                  <Form.Label>Company name*</Form.Label>
                  <Form.Control type="text" placeholder="Ex: Microsoft" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="input3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Ex: London, United Kingdom" />
                </Form.Group>
                <Form.Check label="I am currently working in this role" className="mb-3" />
                <Form.Group className="mb-3">
                  <Form.Label>Start Date*</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Select required>
                      <option>Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Form.Select>
                    <Form.Select required>
                      <option>Year</option>
                      <option value="1">2024</option>
                      <option value="2">2023</option>
                      <option value="3">2022</option>
                      <option value="4">2021</option>
                      <option value="5">2020</option>
                      <option value="6">2019</option>
                      <option value="7">2018</option>
                      <option value="8">2017</option>
                      <option value="9">2016</option>
                      <option value="10">2015</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>End date</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Select>
                      <option>Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Form.Select>
                    <Form.Select>
                      <option>Year</option>
                      <option value="1">2024</option>
                      <option value="2">2023</option>
                      <option value="3">2022</option>
                      <option value="4">2021</option>
                      <option value="5">2020</option>
                      <option value="6">2019</option>
                      <option value="7">2018</option>
                      <option value="8">2017</option>
                      <option value="9">2016</option>
                      <option value="10">2015</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Modal.Title className="fs-5">Media</Modal.Title>
                  <p>Add media like images, documents, sites or presentations.</p>
                  <Button variant="outline-primary" className="rounded-pill">
                    + Add media
                  </Button>
                </Form.Group>
                <Modal.Footer>
                  <Button variant="primary" className="rounded-pill px-3" type="submit">
                    Save
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
          <Pencil />
        </div>
      </div>
      {experience.length > 0 && experience.map(item => <SingleExperience key={item._id} experience={item} />)}
    </div>
  );
};

export default Experience;
