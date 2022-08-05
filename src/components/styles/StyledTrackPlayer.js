import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.footer`
  grid-area: track-player;
  height: auto;
  min-width: 100%;
  border-top: 1px solid #282828;
  .track-player__container {
    background-color: var(--light-black);
    padding: var(--spacing-xs) var(--spacing-sm);
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .track-player__track-info {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
  }

  .track-player__track-info img {
    width: 56px;
    height: 56px;
  }

  .track-details {
    margin: 0 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    color: #fff;
    justify-self: start;
    width: 100%;
  }

  .artist {
    color: var(--light-grey);
    min-width: 0;
    width: 100%;
  }

  .track-player__track-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .media-controls {
    display: flex;
    width: 100%;
    gap: 16px;
    margin-bottom: 8px;
    justify-content: center;
    align-items: baseline;
  }

  svg {
    height: 21px;
    width: 25px;
  }

  button {
    border: none;
    height: 0;
    background-color: transparent;
    padding: 0;
  }

  button:hover,
  button:focus {
    transform: scale(1);
  }

  .track__item__icons button svg:hover {
    transform: scale(1);
  }

  .playPauseButton {
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: var(--button-size);
    color: #000;
    display: flex;
    height: var(--button-size);
    justify-content: center;
    min-width: var(--button-size);
    position: relative;
    width: var(--button-size);
  }

  .playPauseButton:hover {
    transform: scale(1.1);
  }

  .playback {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }

  .progress-time {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block: 0px;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #a7a7a7;
  }

  .progress-bar {
    display: flex;
    align-items: center;
  }

  .slider {
    -webkit-appearance: none;
    width: 28vw;
    height: 4px;
    border-radius: 5px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--purple);
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #9440f3;
    cursor: pointer;
  }

  .queue-button {
    display: none;
  }

  .queue-button .icons-tooltip-text {
    top: -31px;
  }

  @media (max-width: 1100px) {
    .queue-button {
      display: inline-block;
    }
  }
`;

export default StyledTrackPlayer;
