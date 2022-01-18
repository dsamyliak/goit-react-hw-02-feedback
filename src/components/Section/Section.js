import React from "react";
import "./Section.css";

const Section = ({ title, children }) => (
  <section className="Feedback__Counter">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
