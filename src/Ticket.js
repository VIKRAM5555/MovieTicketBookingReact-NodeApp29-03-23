import { useParams } from "react-router-dom";

export function Ticket({ movieList, arr }) {
  let { id } = useParams();
  let toatlfare = 100 * arr.length;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient( 89.4deg, #032c03 0.8%, #04331f 99.4% )",
        borderRadius: "20px",
        height: "100vh",
        width: "30vw",
        marginLeft: "35%",
      }}
    >
      <img
        style={{
          height: "30vh",
        }}
        className="updated"
        src={movieList[id].IMG}
        alt={movieList.MOVIE}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Booked Successfully</h1>
        <h3>MOVIE : {movieList[id].MOVIE}</h3>
        <h3>TOTAL SEATS BOOKED : {arr.length}</h3>
        <h3>SEAT NUMBER : {arr.toString()}</h3>
        <h3>Ticket Fare : 100</h3>
        <h2>Total Fare : {toatlfare}</h2>
        <h3 style={{ letterSpacing: "3px" }}>Thank you</h3>
      </div>
    </div>
  );
}
