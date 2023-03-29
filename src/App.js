import logo from "./logo.svg";
import "./App.css";
import { useState, useContext, createContext } from "react";
import { Route, Routes, BrowserRouter, json } from "react-router-dom";
import { Mainpage } from "./Mainpage";
import { Signin } from "./Signin";
import SignupPage from "./Signup";
import "./App.css";
import { TicketCounter } from "./TicketCounter";
import "./i18next";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./brainTreePayment";
import { Ticket } from "./Ticket";
import { ListSubheader } from "@mui/material";
export const locateContext = createContext();
function App() {
  const [UsernameData, setUsernameData] = useState("No User");
  const [locate, setLocate] = useState("");
  const [userDataFromDB, setUserDataFromDB] = useState({});

  const movieList = [
    {
      id: 1,
      MOVIE: "VIKRAM",
      tittle:
        "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/11/7/original/vikram_28.png?w=400&dpr=2.6",
      IMG: "https://m.media-amazon.com/images/M/MV5BNGQ2YTNjOTMtMGUzNS00NTVjLWE2YzItZGNiMWUxYWQ5ZjExXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
      SHOWTIME: "9 AM",
      IMDB: "9.6",
    },
    {
      id: 2,
      MOVIE: "BEAST",
      tittle:
        "https://i.pinimg.com/736x/71/53/d9/7153d987dfc7c62ad09bd3b548ac4813.jpg",
      IMG: "https://www.newsintv.com/wp-content/uploads/2022/01/arabic-kuthu-wallpaper.jpg",
      SHOWTIME: "9:30 AM",
      IMDB: "8.4",
    },
    {
      id: 3,
      MOVIE: "DON",
      tittle:
        "https://www.newsintv.com/wp-content/uploads/2021/11/don-hd-poster.jpg",
      IMG: "https://www.newsintv.com/wp-content/uploads/2021/11/don-first-look-poster.jpg",
      SHOWTIME: "9:30 AM",
      IMDB: "8.7",
    },
    {
      id: 4,
      MOVIE: "KGF 2",
      tittle: "https://i.ytimg.com/vi/ah4cUipr0NA/maxresdefault.jpg",
      IMG: "https://i.pinimg.com/originals/e9/b5/5e/e9b55e95839fd3932dfd4a0a017d9fdf.png",
      SHOWTIME: "9:30 AM",
      IMDB: "8.6",
    },
    {
      id: 5,
      MOVIE: "RRR",
      tittle: "https://static.toiimg.com/photo/msid-74806726/74806726.jpg",
      IMG: "https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg",
      SHOWTIME: "9:30 AM",
      IMDB: "8.1",
    },
  ];
  const [arr, setArr] = useState([]);
  return (
    <BrowserRouter>
      <locateContext.Provider
        value={{
          UsernameData: UsernameData,
          locate: locate,
          setLocate: setLocate,
          setUserDataFromDB,
          userDataFromDB,

          setUsernameData: setUsernameData,
        }}
      >
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route
            exact
            path="/movies"
            element={<BookingPageList movieList={movieList} />}
          ></Route>
          <Route
            exact
            path="/movies/:id"
            element={
              <TicketCounter movieList={movieList} arr={arr} setArr={setArr} />
            }
          ></Route>
          <Route
            exact
            path="/urticket/:id/ticket"
            element={<Ticket movieList={movieList} arr={arr} />}
          ></Route>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/urticket/:id/payment" element={<PaymentForm />} />
        </Routes>
      </locateContext.Provider>
    </BrowserRouter>
  );
}
export default App;
function BookingPageList({ movieList }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "fit-content",
        width: "90vw",
        padding: "15px",
        gap: "30px",
      }}
      className="startpage"
    >
      {movieList.map((datalist, i) => (
        <BookingPage datalist={datalist} i={i} />
      ))}
    </div>
  );
}
function BookingPage({ datalist, i }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movies/${i}`)}>
      <img
        className="updated"
        style={{
          display: "flex",
          width: "20vw",
          height: "65vh",
          opacity: "1",
        }}
        src={datalist.IMG}
        alt={datalist.MOVIE}
      />
      <ListSubheader
        className="updated"
        style={{ width: "20vw", height: "15vh", lineHeight: "15px" }}
      >
        <h4>MOVIE:{datalist.MOVIE} </h4>
        <h4>SHOWTIME:{datalist.SHOWTIME} </h4>
        <h4>IMDB:{datalist.IMDB} </h4>
      </ListSubheader>
    </div>
  );
}
