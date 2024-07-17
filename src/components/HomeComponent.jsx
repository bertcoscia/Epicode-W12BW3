import { Button, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill, InfoSquareFill, Plus } from "react-bootstrap-icons";

const HomeComponent = () => {
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
    <div id="cardProfileHome">
      <div className="text-center">
        <img id="aaa" src={randomHeroImage} alt="background image" />
        <div>
          <img
            className="rounded-circle profilePic"
            src={randomHeroImage}
            alt="profile picture"
          />
        </div>
        <div className="pt-4">
          <h3>Nome Profilo</h3>
          <p>Aspirant Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
/*  <Container>
      <Row>
        <Col sm={3} style={{ marginTop: "110px" }}>
          <div className="bg-white rounded-5">
            <div className="text-center">
              <img
                src={randomHeroImage}
                alt="background"
                className="object-fit-cover img-fluid  rounded-5"
                style={{ height: "90px", width: "100%" }}
              />
            </div>
            <div className="text-center mt-2 ">
              <img
                src="https://www.ecommerceacademy.it/wp-content/uploads/2023/05/Epicode-coding-bootcamp_ecommerce-academy_b2commerce_900x900.jpg"
                alt="propic"
                className="rounded-circle border"
                style={{ height: "64px", width: "64px" }}
              />
            </div>
            <h4 className="text-center">Nome e cognome</h4>
            <p className="text-center border-bottom">Sommario</p>

            <div className="d-flex justify-content-between px-3 border-bottom">
              <div>
                <p className="m-0">Collegamenti</p>
                <p>Espandi la tua rete</p>
              </div>
              <div>
                <p>28</p>
              </div>
            </div>
            <div className="border-bottom">
              <p className="ps-2">
                Fai decollare la tua carriera con strumeti esclusivi
              </p>
              <div className="d-flex">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuc65pxs9sVwWpeqGHMggoyexEdNj34y7Ug&s"
                  alt="chip orange"
                  style={{ width: "24px", height: "24px" }}
                  className="mx-2"
                />
                <p>Prova premium con 0 EUR</p>
              </div>
            </div>
            <div className="d-flex mt-1">
              <BookmarkFill className="mx-3 mt-1" />
              <p>Elementi salvati</p>
            </div>
          </div>
          <div className="bg-white rounded-5 mt-3 p-3 ">
            <p>Gruppi</p>
            <div className="d-flex justify-content-between">
              <p>Eventi</p>
              <Plus style={{ width: "25px", height: "25px" }} />
            </div>
            <p className="border-bottom pb-2">Hashtag seguiti</p>
            <div className="text-center">
              <Button
                variant="outline-secondary"
                className="border-0 w-100 p-0"
              >
                Scopri di più
              </Button>
            </div>
          </div>
        </Col>

        <Col sm={3} style={{ marginTop: "110px" }}>
          <div className="bg-white rounded-5">
            <div className="d-flex justify-content-between p-2">
              <h3>LinkedIn notizie</h3>
              <InfoSquareFill className="align-self-center" />
            </div>
            <p className="p-2">Storie principali</p>

            <div className="p-2">
              <h5>Notiza</h5>
              <p>Data</p>
            </div>
            <div className="p-2">
              <h5>Notiza</h5>
              <p>Data</p>
            </div>
            <div className="p-2">
              <h5>Notiza</h5>
              <p>Data</p>
            </div>
            <div className="p-2">
              <h5>Notiza</h5>
              <p>Data</p>
            </div>
            <div className="p-2">
              <h5>Notiza</h5>
              <p>Data</p>
            </div>
            <div>
              <Button
                variant="outline-secondary"
                className="border-0 ms-2 mb-3"
              >
                Vedi altro ▼
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container> */
