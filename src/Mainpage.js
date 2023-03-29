import { Corosell } from "./Corosell";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicSelect from "./BasicSelect";
import { useEffect, useRef, useState } from "react";
import { Profile } from "./profile";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useTranslation } from "react-i18next";

import ScrollTab from "./ScrollTab";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export function Mainpage() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "64px",
          background: "white",
          display: "flex",
          border: "thin solid green",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://w7.pngwing.com/pngs/929/167/png-transparent-bookmyshow-india-ticket-business-logo-book-store-text-logo-india-thumbnail.png')",
            width: "30%",
            height: "64px",
            backgroundSize: "25%",
            backgroundRepeat: "no-repeat",
            objectFit: "fill",
            backgroundPosition: "center",
            borderRadius: "20px",
          }}
        ></div>{" "}
        <div
          style={{
            display: "flex",
            height: "45px",
            width: "60vw",
            gap: "50px",
          }}
        >
          <BasicSelect />

          <Button
            style={{ marginTop: "10px", width: "20vw" }}
            variant="contained"
            className="Stack"
            onClick={() => {
              navigate("/Signin");
            }}
          >
            {t("Signin")}
          </Button>
          <ScrollTab />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "40px",
          backgroundImage:
            "linear-gradient( 89.4deg, #032c03 0.8%, #04331f 99.4% )",
          padding: "0px",
        }}
      ></div>{" "}
      <div
        style={{
          marginLeft: "450px",
        }}
      >
        <Corosell />
      </div>
      <StartPage />
    </div>
  );
}

function StartPage() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [index, SetIndex] = useState("");
  const startContent = [
    {
      title: t("Location"),
      description:
        "The location of the hall can make or break an event. It's important to choose a venue that is easily accessible for attendees, with good transport links and parking facilities. The surrounding area should also be considered, such as local amenities, accommodation options, and any potential noise restrictions. The location should be convenient and attractive for attendees, while also providing a suitable atmosphere for the event.",
      img: " https://images.pexels.com/photos/2508735/pexels-photo-2508735.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: t("Capacity"),
      description:
        " The size of the hall is an important factor to consider when booking a venue. The venue should be large enough to comfortably accommodate all attendees, while also leaving enough space for activities, presentations, and networking. It's important to get a clear understanding of the capacity of the hall before making a booking to ensure that it can accommodate your event. An overcrowded hall can be uncomfortable for attendees, while a hall that's too large can create an awkward atmosphere.",
      img: "https://images.pexels.com/photos/1790556/pexels-photo-1790556.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: t("Amenities"),
      description:
        " Amenities can make or break an event. Depending on the type of event you're hosting, you may require certain amenities such as audio-visual equipment, catering facilities, and stage or lighting equipment. It's important to check what amenities the hall offers and if they're included in the booking fee or if they come at an extra cost. Additionally, it's important to ensure that the amenities meet your specific requirements. The right amenities can enhance the experience for attendees and create a successful event.",
      img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: t("Cost"),
      description:
        "Cost is a crucial factor to consider when booking a hall for an event. It's important to have a clear understanding of the overall cost of the venue, including any additional fees, deposits, and taxes. You should also consider the payment terms and cancellation policy, as well as any potential discounts or packages that the venue may offer. Be sure to have a clear budget in mind before booking to ensure that the hall is affordable and fits within your financial constraints.",
      img: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const handleClick = (val) => {
    const element = document.getElementById(`content${val}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div>
      <div className="startpageContent">
        {startContent.map((a, i) => (
          <div
            id={i}
            onClick={(e) => {
              handleClick(e.target.id);
            }}
            className="startpageContentButton"
            style={{ overflow: "hidden", padding: "20px" }}
          >
            {
              <h4
                id={i}
                onClick={(e) => {
                  handleClick(e.target.id);
                }}
              >
                {a.title}
              </h4>
            }
            {a.description}
          </div>
        ))}
      </div>

      <div className="startpageContent containers">
        <div className="desc">
          {startContent.map((a, i) => (
            <RollOn a={a} i={i} SetIndex={SetIndex} />
          ))}
        </div>

        {index !== "" && (
          <div>
            <img
              style={{ borderRadius: "20px" }}
              src={startContent[index].img}
            />
          </div>
        )}
      </div>

      <Button
        onClick={() => navigate("/signin")}
        startIcon={<ArrowCircleRightIcon />}
        role="button"
        class="button-next"
        style={{ width: "fit-content" }}
      >
        <span class="text">{t("Next")}</span>
      </Button>
    </div>
  );
}
function RollOn({ i, a, SetIndex }) {
  const [colors, setColors] = useState();
  const myRef = useRef();
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries) => {
      console.log("entry", entries[0]);
      setColors(entries[0].isIntersecting);
      entries[0].isIntersecting && SetIndex(i);
    }, options);
    observer.observe(myRef.current);
  }, []);
  return (
    <div
      style={{
        width: "40vw",
        height: "74vh",
        color: colors ? "black" : "tomato",
        fontWeight: 700,
        letterSpacing: "5px",
        wordSpacing: "5px",
      }}
      className="startpageContentButton"
      id={`content${i}`}
      ref={myRef}
    >
      {<h1>{a.title}</h1>}
      {a.description}
    </div>
  );
}
