import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState, useContext, createContext, useEffect } from "react";
import { locateContext } from "./App";
export function Profile() {
  const { UsernameData } = useContext(locateContext);
  console.log(UsernameData);

  return (
    <div className="Profile">
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar(UsernameData)} />
      </Stack>
    </div>
  );
}

function stringAvatar(name) {
  console.log(name);
  let StartLetter = "";
  name.split(" ").map((a, i) => {
    StartLetter += `${name.split(" ")[i][0]}`;
  });

  return {
    sx: {
      bgcolor: "#00000000",
      width: "180px",
      borderRadius: "20px",
      color: "black",
      fontWeight: "900",
      border: "#19d238 solid 1px",
      marginTop: "20px",
    },
    children: `Login: "${StartLetter}"`,
  };
}
