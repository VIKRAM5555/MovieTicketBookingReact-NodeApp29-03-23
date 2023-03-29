import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Signin: "Signin",
      },
    },
    ta: {
      translation: {
        Signin: "உள்நுழையவும்",
        Location: "இடம்",
        Capacity: "திறன்",
        Amenities: "வசதிகள்",
        Cost: "செலவு",
        CHENNAI_MUMBAI_KOLKATA_BANGLORE_PUNE_GUJARAT:
          "சென்னை_மும்பை_கோல்கட்டா_பெங்களூர்_புனே_குஜராத்",
        Next: "அடுத்தது",
        Tamil: "தமிழ்",
      },
    },
  },
  lng: "en",
});
export default i18next;
