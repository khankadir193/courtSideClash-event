import React, { useEffect, useState } from "react";
import "../Style/accordion.css";
import rewardsSliderBg from "../assests/user-talent.png"; // Consider parameterizing this if it changes based on reward-base
import { ButtonSlider } from "../components/ButtonSlider";

function Accordion({
  title,             // Destructured props for cleaner code
  children,
  toggleUserTalent,
  hasTabs,
  defaultOpen,
  userTalent
}) {
  // State for tracking whether the accordion is open or closed
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Toggles the accordion open/closed state
  const handleToggle = () => setIsOpen(prevState => !prevState);

  return (
    <div className="accordion">
      {/* Accordion header toggles the body visibility */}
      <div className="accordion-header" onClick={handleToggle}>
        <div className="accordion-title">
          <span>{title}</span>
          {/* Icon changes based on accordion state */}
          <span className={isOpen ? "down-chevron" : "right-chevron"}></span>
        </div>
      </div>

      {/* Conditional rendering of the accordion body based on isOpen state */}
      {isOpen && (
        <div className="accordion-body">
          {/* Conditionally render the ButtonSlider if hasTabs is true */}
          {hasTabs && (
            <ButtonSlider
              onToggle={toggleUserTalent}
              bg={rewardsSliderBg} // Background image passed to ButtonSlider
              texts={["Users", "Talents"]} // Static texts, could be parameterized if needed
              isTalent={userTalent.talent} // Condition to determine current view
            />
          )}

          {/* Render any child elements passed to the Accordion */}
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
