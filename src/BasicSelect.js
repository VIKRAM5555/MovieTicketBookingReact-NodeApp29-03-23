import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useContext, createContext } from "react";
import { locateContext } from "./App";
import { useTranslation } from "react-i18next";
export default function BasicSelect() {
  const { i18n, t } = useTranslation();
  const locations = t("CHENNAI_MUMBAI_KOLKATA_BANGLORE_PUNE_GUJARAT").split(
    "_"
  );
  const { locate, setLocate } = useContext(locateContext);

  const handleChange = (event) => {
    setLocate(event.target.value);
  };

  return (
    <FormControl
      sx={{
        width: "1200px",
        display: "flex",
        flexDirection: "column",
        height: "35px",
        marginLeft: "20px",
        marginRight: "25px",
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={locate}
        label="where are you going...?"
        onChange={handleChange}
      >
        {locations.map((data, i) => (
          <MenuItem key={i} value={data}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
