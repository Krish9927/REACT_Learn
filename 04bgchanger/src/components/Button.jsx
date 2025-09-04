import React from "react";

// Only valid CSS colors
const colorMap = {
  Red: "red",
  Green: "green",
  Blue: "blue",
  Olive: "olive",
  Gray: "gray",
  Yellow: "yellow",
  Pink: "pink",
  Purple: "purple",
  Lavender: "lavender",
  White: "white",
  Black: "black",
};

function Button({ btnColor, setColor }) {
  return (
    <button
      className="px-4 py-2 rounded-lg font-semibold text-blue-800"
      style={{ backgroundColor: colorMap[btnColor] }}
      onClick={() => setColor(colorMap[btnColor])}
    >
      {btnColor}
    </button>
  );
}

export default Button;
