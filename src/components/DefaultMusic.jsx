import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DefaultMusic = ({artist}) => {
  const [song, setSong] = useState([]);

  const favList = useSelector((store) => {
    return store.cart.favourite
  })

  // USE EFFECT ALL'AVVIO
  useEffect(() => {
    fillMusicSection();
    console.log(artist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillMusicSection = () => {
    console.log("FETCH PARTITA CORRETTAMENTE");
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("RISULTATI DELLA FETCH, se corretta:", data.data);
        setSong(data.data.slice(0, 4));
      })
      .catch((err) => {
        console.log("ERRORE CHIAMATA FETCH", err);
      });
  };

  // USE EFFECT DI CONTROLLO
  useEffect(() => {
    console.log("risultato effettivo post fetch", song);
  }, [song]);

  const dispatch = useDispatch()
  return (
        <Col className="d-flex">
          {song.map((cardina) => {
            return (
                <div key={cardina.id} className="me-4" onClick={() => {
                  dispatch({
                    type: "SAVE_THE_SONG",
                    payload: cardina,
                  })
                }}>
                <img src={cardina.album.cover_xl} alt="cover-image"></img>
                <p>track: {cardina.title}</p>
                <p>Artist: {cardina.artist.name} - <Button onClick={() => {
                  dispatch({
                    type: "SAVE_TO_FAVOURITE",
                    payload: cardina.id,
                  })
                }}
                variant={favList && favList.includes(cardina.id) ? "outline-success" : "outline-light"}></Button> </p>
                </div>
                // PURTROPPO HO DOVUTO RIPIEGARE NEL BUTTON BRUTTO PER MOTIVI DI TEMPO..
            );
          })}

        </Col>
  );
};

export default DefaultMusic;
