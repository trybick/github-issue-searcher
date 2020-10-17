import React, { useState } from 'react';
import './Header.scss';
import githubIcon from '../../images/github-icon.svg';
import githubIconWhite from '../../images/github-icon-white.svg';
import DarkModeToggle from 'react-dark-mode-toggle';

const Header = ({ onToggleChangeDarkMode, darkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="page-header">
      <h2 className="page-header-title">
        <span className="page-header-title-highlight">Issue</span>-Collab
      </h2>
      <div className="header-right">
        <DarkModeToggle
          onChange={event => {
            onToggleChangeDarkMode(event);
            setIsDarkMode(event);
          }}
          checked={isDarkMode}
          size={80}
        />

        <a
          className="github-link"
          href="https://github.com/trybick/issue-collab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github-svg"
            src={darkMode ? githubIconWhite : githubIcon}
            alt="github-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
