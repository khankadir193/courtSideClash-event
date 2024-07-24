import React, { useState, useEffect } from "react";
import '../Style/ScrollTop.css';


const ScrollToTopButton = () => {
  // Using useState to manage the visibility of the button
  const [showButton, setShowButton] = useState(false);

  // useEffect is used to add and clean up the scroll event listener
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      // If yes, show the button; otherwise, hide it
      setShowButton(window.scrollY > 0);
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  // Function to smoothly scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Render the button if showButton is true
    showButton && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "7vw",
          right: "0vw",
          cursor: "pointer",
        }}
        className="scroll-btn"
      />
    )
  );
};

export default ScrollToTopButton;
