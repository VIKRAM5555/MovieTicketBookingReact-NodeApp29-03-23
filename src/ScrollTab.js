import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function ScrollTab() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { i18n, t } = useTranslation();
  const handleChangeLang = (val) => {
    i18n.changeLanguage(val);
  };
  const data = JSON.parse(localStorage.getItem("myData"));
  console.log("v", data?.Token);
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      className="MuiTabs-indicator"
      sx={{
        borderRadius: "10px",
        width: "45vw",
        backgroundImage:
          "linear-gradient( 89.4deg, #032c03 0.8%, #04331f 99.4% )",
      }}
    >
      <Tab
        label={t("Tamil")}
        style={{ fontWeight: "900", color: "white" }}
        onClick={() => {
          handleChangeLang("ta");
        }}
      />
      <Tab
        label="English"
        style={{ fontWeight: "900", color: "white" }}
        onClick={() => {
          handleChangeLang("en");
        }}
      />
    </Tabs>
  );
}
