import React, { useState } from "react";
import SNavLog from "./style";

export default function NavLog() {
  const [fadeAnimated, setFadeAnimated] = useState(false);

  const handleClick = () => {
    setFadeAnimated(!fadeAnimated);
  };

  return (
    <SNavLog>
      <div
        className="circle"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        tabIndex="0"
      >
        <span className={`one ${fadeAnimated ? "span-animated" : null}`} />
        <span className={`two ${fadeAnimated ? "span-animated-two" : null}`} />
      </div>
      <div
        className={`big_circle ${fadeAnimated ? "big-circle-animated" : null}`}
      >
        <button type="button" className="button-one">
          1
        </button>
        <button type="button" className="button-two">
          2
        </button>
        <button type="button"> 3 </button>
      </div>
    </SNavLog>
  );
}
