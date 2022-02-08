import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach..!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brrrr, it is cold..!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

// If this does not resolve your issue, you can also choose to install the CSS library locally:

// npm install semantic-ui-css

// Then, import the library into your root index.js component:

// import "semantic-ui-css/semantic.min.css";