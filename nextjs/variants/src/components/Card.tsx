import React from "react";
import Button from "./Button";

type CardProps = {
  variant?: "primaryCard" | "secondaryCard";
  title: string;
  desceription: string;
};

const Card = ({ variant = "primaryCard", title, desceription }: CardProps) => {
  return (
    <div className="CardContainer">
      <div className={`card ${variant}`}>
        <h1>{title}</h1>
        <br />
        <p>{desceription}</p>
        <Button
          label="Click me !"
          size="md"
          variant={variant === "primaryCard" ? "primary" : "secondary"}
        />
      </div>
    </div>
  );
};

export default Card;
