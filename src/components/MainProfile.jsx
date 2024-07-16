import { useState } from "react";
import { Button, Image, Col, Modal } from "react-bootstrap";
import { ArrowRight, Envelope, Pencil, PlusLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function MainProfile() {
  const profile = useSelector((state) => state.profile.content);

  const connectionsNumber = Math.floor(Math.random() * 500) + 1;

  const connections = [connectionsNumber, "500+"];

  const randomConnections =
    connections[Math.floor(Math.random() * connections.length)];

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const heroImages = [
    "https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg",
    "https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg",
    "https://rerouting.ca/wp-content/uploads/2020/12/1.png",
    "https://wallpapers.com/images/hd/technology-linkedin-background-dce01jsbpnn0z2ej.jpg",
    "https://media.licdn.com/dms/image/D4D16AQHGgsaoCKwe1Q/profile-displaybackgroundimage-shrink_350_1400/0/1694655079860?e=1726704000&v=beta&t=pM6PCGSE0aK28lWZWT1_jdA2txQwEVoSJS8aYYT_6R8",
  ];

  const randomHeroImage =
    heroImages[Math.floor(Math.random() * heroImages.length)];

  return (
    <>
      {profile && (
        <Col xs={12} lg={8} xl={9}>
          <div id="profile" className="card mb-2 rounded-3">
            <img
              style={{ height: "200px" }}
              src={randomHeroImage}
              alt="Background Image"
              className="object-fit-cover img-fluid rounded-top"
            />
            <div
              className="position-absolute"
              style={{ top: "100px", left: "25px" }}
            >
              <Image
                src={profile.image}
                roundedCircle
                style={{ width: "150px", border: "5px solid white" }}
              />
            </div>

            <div className="mt-5 ms-3">
              <h2>{`${profile.name} ${profile.surname}`}</h2>
              <p className="mb-2 text-dark-emphasis">{profile.title}</p>
              <p>
                {profile.area} ·
                <span
                  className="ms-1 text-primary text-decoration-none"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                >
                  Contact info
                </span>
              </p>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{`${profile.name} ${profile.surname}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Contact info</h4>
                  <div className="d-flex align-items-start my-3">
                    <Envelope width={24} height={24} />
                    <div className="d-flex flex-column ms-3">
                      <h5>Email</h5>
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <a href="#home">{randomConnections} connections</a>
              <div className="d-flex justify-content-start column-gap-2 my-3">
                <Button
                  variant="primary"
                  className="rounded-pill px-lg-3 py-1 align-self-center"
                >
                  Open to
                </Button>
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-lg-3 py-1 align-self-center"
                >
                  Add profile section
                </Button>
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-lg-3 py-1 align-self-center"
                >
                  Enhance profile
                </Button>
                <Button
                  variant="light"
                  className="px-3 py-1 rounded-pill border border-dark-subtle align-self-center"
                >
                  More
                </Button>
              </div>
            </div>
          </div>

          <div id="about" className="card bg-white py-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between">
              <h3>About</h3>
              <Pencil />
            </div>
            <p className="my-3">{profile.bio}</p>
          </div>

          <div id="activity" className="card bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between mb-3">
              <h3>Activity</h3>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-3 align-self-center me-3"
                >
                  Create a post
                </Button>
                <Pencil />
              </div>
            </div>
            <div className="d-flex column-gap-2 my-2">
              <Button
                variant="light"
                className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn"
              >
                Posts
              </Button>
              <Button
                variant="light"
                className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn"
              >
                Comments
              </Button>
              <Button
                variant="light"
                className="px-3 py-1 rounded-pill border border-dark-subtle activity-btn"
              >
                Images
              </Button>
            </div>
            <div className="d-flex py-4 border-bottom">
              <img
                className="me-3 rounded"
                style={{ width: "64px", height: "64px" }}
                src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                alt=""
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum
              modi aspernatur impedit perspiciatis nam rem laudantium a ut.
              Voluptas molestiae ea soluta ad exercitationem eligendi, culpa
              ducimus saepe pariatur.
            </div>
            <h2 className="fs-5 text-center py-2">
              Show all posts <ArrowRight />
            </h2>
          </div>

          <div id="experience" className="card bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between mb-3">
              <h3>Experience</h3>
              <div className="d-flex">
                <PlusLg className="me-3" />
                <Pencil />
              </div>
            </div>
            <div className="d-flex border-0 pb-2 my-2 border border-bottom">
              <div>
                <img
                  style={{ width: "48px", height: "48px" }}
                  src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                  alt="pic profile agency"
                />
              </div>
              <div className="ms-2">
                <h5 className="mb-0">Ruolo</h5>
                <p className="mb-0">Agenzia</p>
                <p className="mb-0">Apr 2023 - Sept 2023 &bull; 6 mos</p>
                <p>Luogo</p>
                <p className="line-clamp pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus tempore vel necessitatibus. A voluptate iure quo
                  placeat repellendus molestiae quas quod, enim voluptatum
                  velit, reiciendis cum aut voluptates. Aliquid, voluptatibus?
                </p>
              </div>
            </div>
            <div className="d-flex border-0 pb-2 my-2">
              <div>
                <img
                  style={{ width: "48px", height: "48px" }}
                  src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
                  alt="pic profile agency"
                />
              </div>
              <div className="ms-2">
                <h5 className="mb-0">Ruolo</h5>
                <p className="mb-0">Agenzia</p>
                <p className="mb-0">Apr 2023 - Sept 2023 &bull; 6 mos</p>
                <p>Luogo</p>
                <p className="line-clamp pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus tempore vel necessitatibus. A voluptate iure quo
                  placeat repellendus molestiae quas quod, enim voluptatum
                  velit, reiciendis cum aut voluptates. Aliquid, voluptatibus?
                </p>
              </div>
            </div>
          </div>

          <div id="education" className="card bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between mb-3">
              <h3>Education</h3>
              <div className="d-flex">
                <PlusLg className="me-3" />
                <Pencil />
              </div>
            </div>
            <div className="d-flex border-0 pb-2 my-2 border border-bottom">
              <div>
                <img
                  style={{ width: "48px", height: "48px" }}
                  src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                  alt="pic profile agency"
                />
              </div>
              <div className="ms-2">
                <h5 className="mb-0">Epicode</h5>
                <p className="mb-0">Bootcamp, Full Stack Web Developer</p>
                <p className="mb-0">Apr 2024 - Oct 2024</p>
                <p className="line-clamp pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus tempore vel necessitatibus. A voluptate iure quo
                  placeat repellendus molestiae quas quod, enim voluptatum
                  velit, reiciendis cum aut voluptates. Aliquid, voluptatibus?
                </p>
              </div>
            </div>
            <div className="mb-4">
              <h6 className="my-3">HTML5,CSS3 and +4 skills</h6>
              <div className="d-flex overflow-auto">
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
                <img
                  className="rounded-3 me-2"
                  style={{ width: "114px", height: "56px" }}
                  src="https://certificates.epicode.com/_next/image?url=https%3A%2F%2Fcertificates-epicode-com.s3.eu-central-1.amazonaws.com%2Frendered%2F8ea601ae-29b9-4031-a86e-d57472c1096f.png&w=1080&q=75"
                  alt="Epicode certificate"
                />
              </div>
            </div>
          </div>

          {/* NUOVE SEZIONI */}
          <div className="bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between mb-3">
              <h1 className="fs-3 ps-2">Skills</h1>
              <div className="d-flex pe-3">
                <PlusLg className="me-3" /> <Pencil />
              </div>
            </div>
            <div className="ps-2">
              <article className="border-bottom mb-3">
                <h1 className="fs-4">React</h1>
                <div className="d-flex">
                  <img
                    className="me-3"
                    height={"25px"}
                    width={"25px"}
                    src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                    alt="Logo Epicode"
                  />
                  <p>EPICODE</p>
                </div>
              </article>
              <article className="border-bottom mb-3">
                <h1 className="fs-4">SASS</h1>
                <div className="d-flex">
                  <img
                    className="me-3"
                    height={"25px"}
                    width={"25px"}
                    src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                    alt="Logo Epicode"
                  />
                  <p>EPICODE</p>
                </div>
              </article>
              <h2 className="fs-5 text-center pb-3">
                Show all 23 skills <ArrowRight />
              </h2>
            </div>
          </div>

          <div className="bg-white pt-4 px-3 rounded mb-2">
            <div className="d-flex justify-content-between mb-3">
              <h1 className="fs-3 ps-2">Languages</h1>
              <div className="d-flex pe-3">
                <PlusLg className="me-3" /> <Pencil />
              </div>
            </div>
            <div className="ps-2">
              <div className="border-bottom">
                <h3 className="fs-4">English</h3>
                <p>Full professional proficiency</p>
              </div>
              <div className="border-bottom pt-3">
                <h3 className="fs-4">French</h3>
                <p>Full professional proficiency</p>
              </div>
            </div>
            <h2 className="fs-5 text-center py-3">
              Show all 5 languages <ArrowRight />
            </h2>
          </div>
        </Col>
      )}
    </>
  );
}

export default MainProfile;
