import React, { useState } from "react";
import cln from "classnames";

import "./style.css";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(false);
  const updateCount = () => {
    isAdd ? setCount((count) => count - 1) : setCount((count) => count + 1);
    setIsAdd(!isAdd);
  };
  const style = () => {
    return isAdd ? { color: "blue" } : {};
  };

  const classes = cln({
    like: isAdd,
    unlike: !isAdd,
  });
  console.log(style());
  return (
    <div>
      <div className="like-button">
        <div className="likes-counter">
          <button className={classes} onClick={updateCount}>
            {" "}
            Like {count}
          </button>
        </div>
      </div>
    </div>
  );
}
