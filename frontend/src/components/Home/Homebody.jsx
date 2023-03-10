import React from "react";
import "./Homebody.css";
import data from "../../tools/data";
import BodyItems from "./BodyItems";

export default function Homebody() {
  const dataMap = data.map((item) => (
    <BodyItems id={item.id} img={item.img} title={item.title} txt={item.txt} />
  ));

  return (
    <div className="body">
      <h2>SOYONS COLLABORATIF ET INCLUSIF ...</h2>
      <div className="card">{dataMap}</div>
    </div>
  );
}
