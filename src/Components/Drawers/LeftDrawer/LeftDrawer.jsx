import React, { useEffect, useState } from "react";
import BaseDrawer from "../BaseLeftDrawer";
import AboutMenu from "./AboutMenu/AboutMenu";
import MainMenu from "./MainMenu/MainMenu";
import BackgroundMenu from "./BackgroundMenu/BackgroundMenu";
const LeftDrawer = (props) => {
  const [show, setShow] = useState(false);
  const [sectionName, setSectionName] = useState("Profile");
  useEffect(() => {
    props.show && setShow(true);
  }, [props.show]);

  const handleBackClick = () => {
    if (
      sectionName === "Profile Description" ||
      sectionName === "Change background"
    )
      setSectionName("Menu");
    else setSectionName("Change background");
  };

  return (
    <BaseDrawer
      title={sectionName}
      show={show}
      closeCallback={(param) => {
        setShow(param);
        props.closeCallback();
      }}
      anchor="left"
      backClickCallback={handleBackClick}
      showBackIcon={sectionName !== "Menu"}
      content={
        sectionName === "Menu" ? (
          <MainMenu
            menuCallback={(param) => {
              setSectionName(param);
            }}
          />
        ) : sectionName === "About this board" ? (
          <AboutMenu />
        ) : (
          <BackgroundMenu
            menuCallback={(param) => {
              setSectionName(param);
            }}
            sectionName={sectionName}
          />
        )
      }
    />
  );
};

export default LeftDrawer;
