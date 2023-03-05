import "./card.css";
// import { useState } from "react";
import React from "react";

export const Card = ({ name, img, region, languages, species }) => {
  return (
    <>
      <li className="cards_item">
        <div className="card">
          <div className="card_img">
            <img src={img} alt="" />
          </div>
          <div className="card_content">
            <h2 className="card_title">{name}</h2>
            <h2 className="card_gender">{region}</h2>
            <h2 className="card_gender">
              {languages &&
                Object.keys(languages).map((key, i) => " " + languages[key])}
            </h2>
            <h2 className="card_gender">{species}</h2>
          </div>
        </div>
      </li>
    </>
  );
};
