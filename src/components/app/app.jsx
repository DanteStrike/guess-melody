import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {gameTime, errorAmount} = props;

  const onGameStartButtonClick = () => {
  };

  return (
    <WelcomeScreen
      time = {gameTime}
      errorAmount = {errorAmount}
      onWelcomeButtonClick = {onGameStartButtonClick}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorAmount: PropTypes.number.isRequired
};

export default App;
