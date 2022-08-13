import React from "react";

export function Field({ img, name }) {
  return (
    <div className="choose__your__field__field">
      <img src={img} alt="fieldimg" />
      <div className="field__name">{name}</div>
    </div>
  );
}
