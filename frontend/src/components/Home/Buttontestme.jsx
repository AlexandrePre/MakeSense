import React from "react";
import { Link } from "react-router-dom";
import "./Buttontestme.css";

export default function Home() {
  return (
    <div className="btn">
      <Link to="inscription">
        <button className="btn-testme" type="button">
          ESSAYEZ NOUS
        </button>
      </Link>
    </div>
  );
}
