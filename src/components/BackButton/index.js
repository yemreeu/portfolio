import React from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineArrowBack } from "react-icons/md";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <MdOutlineArrowBack onClick={() => navigate(-1)}></MdOutlineArrowBack>
    </>
  );
};
