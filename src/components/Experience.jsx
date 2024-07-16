import { Pencil, PlusLg } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExperienceAction } from "../redux/actions";
import { Form, Modal, Button } from "react-bootstrap";

const Experience = ({ id }) => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience.content);

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
          <PlusLg
            className="me-3"
            onClick={handleShow2}
            style={{ cursor: "pointer" }}
          />

          <Modal show={show2} onHide={handleClose2} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi esperienza</Modal.Title>
            </Modal.Header>
            <p className="ps-3 pt-2">* indica che è obbligatorio </p>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="Input1">
                  <Form.Label>Qualifica*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Esempio: Retail Sales Manager"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="input2">
                  <Form.Label>Nome azienda*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Esempio: Microsoft"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="input3">
                  <Form.Label>Località</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Esempio: Milano, Italia"
                  />
                </Form.Group>
                <Form.Check
                  label="Attualmente ricopro questo ruolo"
                  className="mb-3"
                />
                <Form.Group className="mb-3">
                  <Form.Label>Data di inizio*</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Select required>
                      <option>Mese</option>
                      <option value="1">Gennaio</option>
                      <option value="2">Febbraio</option>
                      <option value="3">Marzo</option>
                      <option value="4">Aprile</option>
                      <option value="5">Maggio</option>
                      <option value="6">Giugno</option>
                      <option value="7">Luglio</option>
                      <option value="8">Agosto</option>
                      <option value="9">Settembre</option>
                      <option value="10">Ottobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Dicembre</option>
                    </Form.Select>
                    <Form.Select required>
                      <option>Anno</option>
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
                  <Form.Label>Data di fine</Form.Label>
                  <div className="d-flex gap-3">
                    <Form.Select>
                      <option>Mese</option>
                      <option value="1">Gennaio</option>
                      <option value="2">Febbraio</option>
                      <option value="3">Marzo</option>
                      <option value="4">Aprile</option>
                      <option value="5">Maggio</option>
                      <option value="6">Giugno</option>
                      <option value="7">Luglio</option>
                      <option value="8">Agosto</option>
                      <option value="9">Settembre</option>
                      <option value="10">Ottobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Dicembre</option>
                    </Form.Select>
                    <Form.Select>
                      <option>Anno</option>
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
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Modal.Title className="fs-5">Media</Modal.Title>
                  <p>
                    Aggiungi contenuti multimediali come immagini, documenti,
                    siti o presentazioni.
                  </p>
                  <Button variant="outline-primary" className="rounded-pill">
                    + Aggiungi media
                  </Button>
                </Form.Group>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="rounded-pill px-3"
                    type="submit"
                  >
                    Salva
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
          <Pencil />
        </div>
      </div>
      {experience.length > 0 &&
        experience.map((item) => (
          <SingleExperience key={item._id} experience={item} />
        ))}
    </div>
  );
};

export default Experience;
