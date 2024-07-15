import { Button, Card, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const AsideProfile = () => (
  <Col sm={3}>
    <Card>
      <Card.Body>
        <Card.Title>
          Lingua del profilo <Pencil />
        </Card.Title>
        <Card.Text>Italiano</Card.Text>
      </Card.Body>
      <hr />
      <Card.Body>
        <Card.Title>
          Profilo pubblico e URL <Pencil />
        </Card.Title>
        <Card.Text>www.linkedin.com/in/profile</Card.Text>
      </Card.Body>
    </Card>

    <Card className="mt-2">
      <h6 className="p-3">Altri profili simili</h6>
      <Card.Body>
        <Card.Img
          variant="top"
          src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
          className="rounded-circle "
          style={{ width: "50px", height: "50px" }}
        />
        <Card.Title>
          Nome e cognome · <span className="text-secondary"> 2°</span>
        </Card.Title>
        <Card.Text>Lavora per...</Card.Text>
        <Button size="sm" variant="outline-secondary" className="rounded-pill">
          Collegati
        </Button>
      </Card.Body>
      <hr />
      <Card.Body>
        <Card.Img
          variant="top"
          src="https://c8.alamy.com/compit/2f8dh42/nessuna-foto-o-icona-immagine-vuota-caricamento-di-immagini-o-contrassegno-immagine-mancante-immagine-non-disponibile-o-immagine-in-arrivo-segno-silhouette-naturale-semplice-nella-cornice-2f8dh42.jpg"
          className="rounded-circle "
          style={{ width: "50px", height: "50px" }}
        />
        <Card.Title>
          Nome e cognome · <span className="text-secondary"> 2°</span>
        </Card.Title>
        <Card.Text>Lavora per...</Card.Text>
        <Button size="sm" variant="outline-secondary" className="rounded-pill">
          Collegati
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

export default AsideProfile;
