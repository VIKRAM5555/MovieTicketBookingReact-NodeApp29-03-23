import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Field, Formik, useFormik } from "formik";
import Alert from "@mui/material/Alert";
import * as yup from "yup";
import { useState, useContext, createContext } from "react";
import { UserContext } from "./App";
import { Login } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function SignupPage() {
  let url = "https://spotify-serverfinal.onrender.com/";
  const [UsernameData, setUsernameData] = useState("No User");
  const [isVisible, setIsVisible] = useState(false);
  const [userDataFromDB, setUserDataFromDB] = useState({});
  const navigate = useNavigate();

  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),

    password: yup.string().required(),
  });

  const { handleSubmit, handleChange, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        UserName: "",

        password: "",
      },
      validationSchema,
      onSubmit: (values) => {
        setUsernameData(values.UserName);
        let req = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: values.UserName,

            password: values.password,
          }),
        };

        fetch(`${url}signup`, req)
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Succesfully Created");

              navigate("/movies");
            } else {
              alert(data.errors[0]);
              setUserDataFromDB(data.userdata);
            }
          });
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
          Sign Up
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
          label="PASSWORD"
          name="password"
          type={isVisible ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <IconButton
                position="start"
                onClick={() => setIsVisible(!isVisible)}
              >
                {!isVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password ? (
          <Alert severity="error">{errors.password}</Alert>
        ) : (
          ""
        )}

        <Button type="submit" variant="contained" className="Stack">
          <div>SIGN UP</div>
        </Button>
      </form>
    </div>
  );
}
