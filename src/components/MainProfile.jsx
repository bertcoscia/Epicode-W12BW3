import React from "react";
import { Card, Button, Image } from "react-bootstrap";

function MainProfile() {
  return (
    <>
      <Card className=" mb-2 ps-2">
        <Card.Header className="p-0">
          <Card.Img
            style={{ height: "200px" }}
            src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
            alt="Background Image"
            className="rounded-0 object-fit-cover"
          />
          <div
            className="position-absolute"
            style={{ top: "100px", left: "25px" }}
          >
            <Image
              src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
              roundedCircle
              style={{ width: "150px", border: "5px solid white" }}
            />
          </div>
        </Card.Header>
        <Card.Body className="pt-5">
          <Card.Title>
            Nome Utente
            <span style={{ fontSize: "0.8rem" }}>(He/Him)</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Full Stack Web Developer
          </Card.Subtitle>
          <Card.Text>
            Luogo ·<a href="#contact-info">Contact info</a>
          </Card.Text>
          <Card.Text>??connections</Card.Text>
          <Button variant="primary" className="m-1">
            Open to
          </Button>
          <Button variant="outline-primary" className="m-1">
            Add profile section
          </Button>
          <Button variant="outline-primary" className="m-1">
            Enhance profile
          </Button>
          <Button variant="outline-secondary" className="m-1">
            More
          </Button>
        </Card.Body>
      </Card>

      <Card className="bg-white py-4 px-3 rounded mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>About</Card.Title>
            <div>icon</div>
          </div>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum
            modi aspernatur impedit perspiciatis nam rem laudantium a ut.
            Voluptas molestiae ea soluta ad exercitationem eligendi, culpa
            ducimus saepe pariatur.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="bg-white pt-4 px-3 rounded mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Activity</Card.Title>
            <div className="d-flex">
              <Button variant="outline-primary" className="rounded-pill">
                Primary
              </Button>
              <div>icon</div>
            </div>
          </div>
          <div>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Posts
            </Button>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Comments
            </Button>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Images
            </Button>
          </div>
          <div className="d-flex py-4 border-bottom">
            <img
              className="me-3"
              style={{ width: "70px" }}
              src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
              alt=""
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum
            modi aspernatur impedit perspiciatis nam rem laudantium a ut.
            Voluptas molestiae ea soluta ad exercitationem eligendi, culpa
            ducimus saepe pariatur.
          </div>
          <div className="fs-5 fw-bold text-center py-2">Show All Posts</div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainProfile;

/* import { Col, Row } from "react-bootstrap";

function HomepageCard() {
  return (
    <Row>
      <Col>
        <div className="bg-white py-4 px-3 rounded">
          <div className="d-flex justify-content-between">
            <h1>About</h1> <div>icons</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum
            modi aspernatur impedit perspiciatis nam rem laudantium a ut.
            Voluptas molestiae ea soluta ad exercitationem eligendi, culpa
            ducimus saepe pariatur.
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default HomepageCard; */
