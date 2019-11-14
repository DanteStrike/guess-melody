import React from "react";
import PropTypes from "prop-types";
import GameHeader from "../game-header/game-header.jsx";
import {Question} from "../../utils/enum.js";

class QuestionArtistScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioPlayerID = Question.Artist.PLAYER_ID;

    this._answerChangeHandler = this._answerChangeHandler.bind(this);
  }

  _answerChangeHandler(evt) {
    const {onAnswerClick} = this.props;
    const artist = evt.target.value;
    onAnswerClick(artist);
  }

  render() {
    const {
      id,
      question: {
        song,
        answers,
      },
      renderAudioPlayer,
      resetActiveAudioPlayer
    } = this.props;

    return (
      <section className="game game--artist">
        <GameHeader/>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              {renderAudioPlayer(song.src, this._audioPlayerID)}
            </div>
          </div>
          <form className="game__artist" onChange={resetActiveAudioPlayer}>
            {answers.map((answer, index) => (
              <div className="artist" key={`${id}-${index}-answer`}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist}
                  id={`answer-${index}`} onChange={this._answerChangeHandler}/>
                <label className="artist__name" htmlFor={`answer-${index}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>
            ))}
          </form>
        </section>
      </section>
    );
  }
}

QuestionArtistScreen.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.exact({
    type: PropTypes.oneOf([`artist`]),
    song: PropTypes.exact({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }),
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          artist: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired
        })
    ),
  }),
  renderAudioPlayer: PropTypes.func.isRequired,
  resetActiveAudioPlayer: PropTypes.func.isRequired,
  onAnswerClick: PropTypes.func.isRequired
};

export default QuestionArtistScreen;

