import { Card, Button, Image, CardBody, Col } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function MainProfile() {
  const profile = useSelector(state => state.profile.content);

  const connectionsNumber = Math.floor(Math.random() * 500) + 1;

  const connections = [connectionsNumber, "500+"];

  const randomConnections = connections[Math.floor(Math.random() * connections.length)];

  const heroImages = [
    "https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg",
    "https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Ftemplates%2Flinkedin-personal-banners%2F&psig=AOvVaw1Qo5vs1ORvoNZ7rnXIM2TQ&ust=1721157628845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCL3fzhqYcDFQAAAAAdAAAAABAJ",
    "https://rerouting.ca/wp-content/uploads/2020/12/1.png",
    "https://wallpapers.com/images/hd/technology-linkedin-background-dce01jsbpnn0z2ej.jpg"
  ];

  const randomHeroImage = heroImages[Math.floor(Math.random() * heroImages.length)];

  return (
    <>
      {profile && (
        <Col xs={12} md={9}>
          <div id="profile" className="card mb-2 ps-2">
            <img style={{ height: "200px" }} src={randomHeroImage} alt="Background Image" className="rounded-0 object-fit-cover img-fluid" />
            <div className="position-absolute" style={{ top: "100px", left: "25px" }}>
              <Image src={profile.image} roundedCircle style={{ width: "150px", border: "5px solid white" }} />
            </div>

            <Card.Body className="pt-5">
              <Card.Title>{`${profile.name} ${profile.surname}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-dark-emphasis">{profile.title}</Card.Subtitle>
              <Card.Text>
                {profile.area} ·{" "}
                <a href="#home" className="text-decoration-none">
                  Contact info
                </a>
              </Card.Text>
              <Card.Text>{randomConnections} connections</Card.Text>
              <Button variant="primary" className="m-1 rounded-pill px-3 py-1">
                Open to
              </Button>
              <Button variant="outline-primary" className="m-1 rounded-pill px-3 py-1">
                Add profile section
              </Button>
              <Button variant="outline-primary" className="m-1 rounded-pill px-3 py-1">
                Enhance profile
              </Button>
              <Button variant="light" className="m-1 px-3 py-1 rounded-pill border border-dark-subtle">
                More
              </Button>
            </Card.Body>
          </div>

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
                  <Button variant="outline-primary" className="rounded-pill px-3 align-self-center">
                    Create a post
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
