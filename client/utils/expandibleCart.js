import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function ExpandableCard({ title, children }) {
  const [isExpanded, setExpanded] = useState(Boolean);
  useEffect(() => setExpanded(false), []);
  return (
    <div>
      <div
        className="headerCardContainer"
        onClick={() => setExpanded(!isExpanded)}
      >
        <h2>{title}</h2>
        <div className="headerCardIcon">
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      <div
        className="respuesta"
        style={{
          display: isExpanded ? "block" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ExpandableCard;
