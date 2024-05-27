"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-up";

const ScrollToTopComponent = () => {
  const [click, setClick] = useState(false);

  const handleMouseDown = () => setClick(true);
  const handleMouseUp = () => setClick(false);

  const backgroundColor = click ? "#8064A2" : "white";

  const styles = {
    width: "40px",
    height: "40px",
    backgroundColor: backgroundColor,
  };
  return (
    <div onMouseEnter={handleMouseDown} onMouseLeave={handleMouseUp}>
      <ScrollToTop showUnder={160}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div
            className="rounded-5 d-flex align-items-center justify-content-center shadow-lg"
            style={styles}
          >
            <ChevronUp size={20} stroke="#939CA3" />
          </div>
          <span style={{ fontSize: "10px", color: "#8064A2" }}>
            Go to top (Ctrl+Home)
          </span>
        </div>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopComponent;
