import { Col, Container, Row } from "react-bootstrap";
import DefaultMusic from "./DefaultMusic";

// FUNZIONE PER CREARE LE CARD DEFAULT ALL'AVVIO
const MusicList = () => {
  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col xs={9} ls={11} className="mainLinks d-none d-md-flex">
          <a href="www.google.it">TRENDING</a>
          <a href="www.google.it">PODCAST</a>
          <a href="www.google.it">MOODS AND GENRES</a>
          <a href="www.google.it">NEW RELEASES</a>
          <a href="www.google.it">DISCOVER</a>
        </Col>
      </Row>
      <Row>
          <div id="rock">
            <h2>Rock Classics</h2>
            < DefaultMusic artist={"queen"}/>
          </div>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            < DefaultMusic artist={"lady gaga"}/>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            < DefaultMusic artist={"drake"}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicList;
