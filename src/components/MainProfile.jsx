import { Card, Button, Image, CardBody, Col } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function MainProfile() {
  const profile = useSelector(state => state.profile.content);

  return (
    <>
      {profile && (
        <Col xs={12} md={10}>
          <Card id="profile" className=" mb-2 ps-2">
            <Card.Header className="p-0">
              <Card.Img
                style={{ height: "200px" }}
                src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                alt="Background Image"
                className="rounded-0 object-fit-cover"
              />
              <div className="position-absolute" style={{ top: "100px", left: "25px" }}>
                <Image src={profile.image} roundedCircle style={{ width: "150px", border: "5px solid white" }} />
              </div>
            </Card.Header>
            <Card.Body className="pt-5">
              <Card.Title>
                {`${profile.name} ${profile.surname}`}
                <span style={{ fontSize: "0.8rem" }}>(He/Him)</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{profile.title}</Card.Subtitle>
              <Card.Text>
                {profile.area} ·<a href="#contact-info">Contact info</a>
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

          <Card id="about" className="bg-white py-4 px-3 rounded mb-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>
                  <h1 className="fs-3">About</h1>
                </Card.Title>
                <div className="d-flex align-items-center"></div>
                <Pencil />
              </div>
              <Card.Text>{profile.bio}</Card.Text>
            </Card.Body>
          </Card>

          <Card id="activity" className="bg-white pt-4 px-3 rounded mb-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>
                  <h1 className="fs-3">Activity</h1>
                </Card.Title>
                <div className="d-flex">
                  <Button variant="outline-primary" className="rounded-pill">
                    Primary
                  </Button>
                  <div className="d-flex align-items-center ps-2">
                    <Pencil />
                  </div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum modi aspernatur impedit perspiciatis nam rem laudantium a ut. Voluptas molestiae ea soluta ad exercitationem eligendi, culpa ducimus saepe pariatur.
              </div>
              <div className="fs-5 fw-bold text-center py-2">Show All Posts</div>
            </Card.Body>
          </Card>
          <Card id="experience" className="bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between">
              <h1 className="fs-3 ps-2">Experience</h1>
              <div className="d-flex pe-3">
                <PlusLg className="me-3" /> <Pencil />
              </div>
            </div>
            <CardBody className="d-flex bg-white border-0 ps-2 pb-2 border border-bottom">
              <div>
                <img
                  width={"50px"}
                  src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                  alt="pic profile agency"
                />
              </div>
              <div className="ms-2">
                <h1 className="fs-4 mb-0">Ruolo</h1>
                <p className="mb-0">Agenzia</p>
                <p className="mb-0">Apr 2023 - Sept 2023 &bull; 6 mos</p>
                <p>Luogo</p>
                <div className="pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore vel necessitatibus. A voluptate iure quo placeat repellendus molestiae quas quod, enim voluptatum velit, reiciendis cum aut voluptates. Aliquid, voluptatibus?
                </div>
              </div>
            </CardBody>
            <CardBody className="d-flex bg-white border-0 ps-2 pb-0">
              <div>
                <img
                  width={"50px"}
                  src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                  alt="pic profile agency"
                />
              </div>
              <div className="ms-2">
                <h1 className="fs-4 mb-0">Ruolo</h1>
                <p className="mb-0">Agenzia</p>
                <p className="mb-0">Apr 2023 - Sept 2023 &bull; 6 mos</p>
                <p>Luogo</p>
                <div className="pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore vel necessitatibus. A voluptate iure quo placeat repellendus molestiae quas quod, enim voluptatum velit, reiciendis cum aut voluptates. Aliquid, voluptatibus?
                </div>
              </div>
            </CardBody>
          </Card>
          <Card id="education" className="pt-4 px-3 rounded mb-2 ">
            <div className="d-flex justify-content-between">
              <h1 className="fs-3 ps-2">Education</h1>
              <div className="d-flex pe-3">
                <PlusLg className="me-3" /> <Pencil />
              </div>
            </div>
            <CardBody className="d-flex">
              <div>
                <img width={"50px"} src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg" alt=" Pic Profile Epicode" />
              </div>
              <div>
                <h1 className="fs-4 mb-0">EPICODE</h1>
                <p className="mb-0">Bootcamp, Full Stack Web Developer</p>
                <p className="mb-0">Apr 2024 - Oct 2024</p>
                <h1 className="fs-6 my-3">HTML5,CSS3 and +4 skills</h1>
                <div className="d-flex">
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                  <img
                    className="me-1"
                    width={"100px"}
                    height={"60px"}
                    src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                    alt=" Pic Profile Epicode"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      )}
    </>
  );
}

export default MainProfile;