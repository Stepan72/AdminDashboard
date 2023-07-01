import React from "react";

function Button({ bgColor, size, color, borderRadius, text, onClick }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
