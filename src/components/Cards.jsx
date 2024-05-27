"use client";
import React, { useState } from "react";
import cardsIcon1 from "@/assets/cards/cardsIcon1.svg";
import Image from "next/image";

const Cards = ({
  backgroundColor,
  textColor,
  title,
  text,
  buttonText,
  imageURL,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  backgroundColor = isHovered ? backgroundColor : "";
  textColor = isHovered ? "white" : "";

  const cardStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: "100%",
  };

  const svgStyle = {
    filter: isHovered ? "brightness(0) invert(1)" : "",
  };

  const btnStyle = {
    backgroundColor: textColor,
    color: "black",
  };

  return (
    <div className=" col-md-6 ">
      <div
        className="card p-3 cardStyle"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body p-4 align-content-between">
          <h5 className="card-title fw-bold d-flex gap-4 align-items-center justify-content-center justify-content-md-start">
            <Image
              src={imageURL ? imageURL : cardsIcon1}
              alt="cardsIcon1"
              width={40}
              height={40}
              style={svgStyle}
            />
            <span>{title ? title : ""}</span>
          </h5>
          <p className="card-text text-center text-md-start">
            {text ? text : ""}
          </p>
          {buttonText ? (
            <div className="col  col-md-4 col-xl-3">
              <a
                href="#"
                className="mt-4 btn btn-outline-primary px-3 py-2 w-100"
                style={btnStyle}
              >
                {buttonText ? buttonText : ""}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
