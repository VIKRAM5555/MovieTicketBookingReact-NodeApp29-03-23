import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Profile } from "./profile";
export function TicketCounter({ movieList, arr, setArr }) {
  const createArrayOFnum = (a, b) => {
    var rr = [];
    for (var i = a; i <= b; i++) {
      rr.push(i);
    }
    return rr;
  };
  var d = createArrayOFnum(1, 50);
  var e = createArrayOFnum(51, 100);

  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Profile />
      <img
        className="updated"
        src={movieList[id].tittle}
        alt={movieList.MOVIE}
        style={{ marginLeft: "25%", width: "50vw", height: "30vh" }}
      />

      {/* <h5>NO OF TICKET</h5>
      <input type="text" />
      <h5>SHOWTIME</h5>
      <button variant="contained">9:30</button> */}
      <div
        className="startpage"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="startpageContent">
          {d.map((a) => (
            <ButtonList num={a} arr={arr} setArr={setArr} />
          ))}
        </div>
        <div className="startpageContent">
          {e.map((a) => (
            <ButtonList num={a} arr={arr} setArr={setArr} />
          ))}
        </div>

        <Button
          onClick={() => navigate(`/urticket/${id}/payment`)}
          variant="outlined"
          color="primary"
          style={{
            width: "50vw",
            height: "20vh",
            marginLeft: "18%",
            backgroundImage:
              "linear-gradient( 89.4deg, #032c03 0.8%, #04331f 99.4% )",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "black",
              letterSpacing: "10px",
            }}
          >
            SUBMIT
          </Typography>
        </Button>
      </div>
    </div>
  );
}
function ButtonList({ num, setArr, arr }) {
  const book = arr.includes(num) ? true : false;
  console.log(arr, num);
  return (
    <div>
      <Button
        onClick={() => {
          var arrdel = [...arr];
          arrdel.splice(arrdel.indexOf(num), 1);

          book ? setArr([...arrdel]) : setArr([...arr, num]);
          return;
        }}
        variant="outlined"
        color={book ? "error" : "primary"}
      >
        {num}
      </Button>
    </div>
  );
}
