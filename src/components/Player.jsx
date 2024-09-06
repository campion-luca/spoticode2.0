import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const nowPlay = useSelector((store) => {
    return store.cart.content;
  });

  // console.log("risultato redux", nowPlay[0].artist.name)

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={12}>
              {nowPlay ? (
                <p className="text-light ms-5">
                  {nowPlay[0].artist.name} -- now playing {nowPlay[0].title} --
                  from album {nowPlay[0].album.title}
                </p>
              ) : (
                ""
              )}
            </Col>

            <Col xs={12} md={12} className="playerControls w-100">
              <div className="d-flex">
                <a href="www.google.it">
                  <img src={shuffle} alt="shuffle" />
                </a>

                <a href="www.google.it">
                  <img src={prev} alt="prev" />
                </a>

                <a href="www.google.it">
                  <img src={play} alt="play" />
                </a>

                <a href="www.google.it">
                  <img src={next} alt="next" />
                </a>

                <a href="www.google.it">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>

              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
