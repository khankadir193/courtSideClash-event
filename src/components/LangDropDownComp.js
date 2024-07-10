import React, { useState } from "react";
import './LangDropDown.css';

const LangDropDownComp = ({ selectedLanguage, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const languageOptions = ["English", "Hinglish"];

  const handleLanguageChange = (index) => {
    changeLanguage(index);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div onClick={toggleDropdown} className={`dropdown-box ${isOpen ? "open" : ""}`}>
        <div className="selected-language">
          {languageOptions[selectedLanguage]}
        </div>
        <svg className="dropdown-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {languageOptions.map((language, index) => (
            <div
              key={language}
              className="dropdown-item"
              onClick={() => handleLanguageChange(index)}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangDropDownComp;
