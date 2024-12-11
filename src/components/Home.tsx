import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/users/userSlice";
import { collection, onSnapshot } from "firebase/firestore";

const Home = (props: any) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends: any[] = [];
  let newDisneys: any[] = [];
  let originals: any[] = [];
  let trending: any[] = [];

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        switch (data.type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...data }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...data }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...data }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...data }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

    return unsubscribe; // Cleanup on component unmount
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;