import React from "react";
import { useState } from "react";
import "./MoodToggler.css";

const MoodToggler = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  const styles = { color: isHappy ? "green" : "red" };

  return (
    <>
      <h3 className="MoodToggler" style={styles} onClick={toggleMood}>
        {isHappy ? ":)" : ":("}
      </h3>
      ;
    </>
  );
};

export default MoodToggler;
