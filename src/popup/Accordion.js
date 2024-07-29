import React, { useEffect, useState } from "react";
import "../Style/accordion.css";
import rewardsSliderBg from "../assests/user-talent.png"; // need to change  according to reward-base
import { ButtonSlider } from "../components/ButtonSlider";

function Accordion(props) {
  const { toggleUserTalent, hasTabs, defaultOpen, userTalent } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <div className="accordion-title">
          <span>{props.title}</span>
          <span className={isOpen ? "down-chevron" : "right-chevron"}></span>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body">
          {hasTabs ? (
            <div>
              <ButtonSlider
                onToggle={toggleUserTalent}
                bg={rewardsSliderBg}
                texts={["Users", "Talents"]}
                isTalent={userTalent.talent}
              />
            </div>
          ) : null}

          {props.children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
