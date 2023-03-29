import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Field, Formik, useFormik } from "formik";
import Alert from "@mui/material/Alert";
import * as yup from "yup";
import { useState, useContext, createContext } from "react";
import { locateContext } from "./App";

export function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  let url = "https://spotify-serverfinal.onrender.com/";
  const { UsernameData, setUsernameData, setUserDataFromDB } =
    useContext(locateContext);
  const navigate = useNavigate();
  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),
    Password: yup.string().required(),
  });

  const { handleSubmit, handleChange, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        UserName: "",
        Password: "",
      },
      validationSchema,
      onSubmit: (value) => {
        setUsernameData(value.UserName);
        let req = {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: JSON.stringify({
            name: value.UserName,
            password: value.Password,
          }),
        };

        fetch(`${url}signin`, req)
          .then((response) => response.json())
          .then((data) => {
            data.msg === "Successful Login"
              ? navigate("/movies")
              : alert(data.msg);
            setUserDataFromDB(data.userdata);
          });
        console.log(UsernameData);
      },
    }
  );

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="App-header">
        <Typography
          variant="h5"
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          Sign In
        </Typography>

        <TextField
          id="input-with-icon-textfield"
          label="USERNAME"
          name="UserName"
          InputProps={{
            startAdornment: (
              <IconButton position="start">
                <AccountCircle />
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.UserName && touched.UserName ? (
          <Alert severity="error">{errors.UserName}</Alert>
        ) : (
          ""
        )}

        <TextField
          id="input-with-icon-textfield"
          name="Password"
          label="PASSWORD"
          InputProps={{
            endAdornment: (
              <IconButton
                className="Stack"
                color="primary"
                onClick={() => setIsVisible(!isVisible)}
                position="end"
              >
                {!isVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          type={isVisible ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Password && touched.Password ? (
          <Alert severity="error">{errors.Password}</Alert>
        ) : (
          ""
        )}

        <Button
          type="submit"
          variant="contained"
          style={{ width: "fit-content" }}
          className="Stack"
        >
          <div>Signin</div>
        </Button>
        <Typography
          variant="h6"
          onClick={() => navigate("/signup")}
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          Create New Account?
        </Typography>
      </form>
    </div>
  );
}
