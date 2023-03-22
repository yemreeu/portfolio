import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss"

import { MdOutlineArrowBack } from "react-icons/md";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <MdOutlineArrowBack className="back" onClick={() => navigate(-1)}></MdOutlineArrowBack>
    </>
  );
};
