import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {formatTimeToMS} from "../../utils/time/time.js";

class GameTimer extends React.PureComponent {
  render() {
    const {gameTimeRemaining} = this.props;
    const time = formatTimeToMS(gameTimeRemaining);

    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{time.minutes}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{time.seconds}</span>
      </div>
    );
  }
}

GameTimer.propTypes = {
  gameTimeRemaining: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  gameTimeRemaining: state.gameTimeRemaining
});

export {GameTimer};

export default connect(mapStateToProps)(GameTimer);
