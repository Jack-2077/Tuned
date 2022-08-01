import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.div`
  grid-area: track-player;
  position: sticky;
  /* height: 100%; */
  /* position: fixed; */
  /* background-color: red; */
  /* display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-end; */

  /* img {
    width: 25vw;
    height: 45vh;
    border-radius: 12px;
  } */

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

  .playPauseButton svg {
    width: 25px;
    height: 25px;
  }

  .track-controls {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    border-radius: 8px;
    width: 75%;
    height: 50%;
    left: 12.5%;
    top: 47%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }

  p + p {
    color: var(--light-grey);
  }

  p:last-of-type {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .input-slider-container {
    display: grid;
    place-items: center;
    width: 100%;
    padding-top: 5%;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;

    /* background-color: var(--fg-color);
    border-radius: calc(4px)/2;
    height: 4px;
   
    transform: translateX(calc(-100% + 0.881057%));
    width: 100%; */
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
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

  .sm-track-player__container {
    background-color: var(--near-black);
    height: 90px;
    display: flex;
    /* justify-content: flex-start; */
    gap: 20px;
    justify-content: space-between;
  }

  .sm-track-player__track-info {
    display: flex;
    gap: 5px;
    width: 50%;
  }

  .sm-track-player__track-info img {
    width: 56px;
    height: 56px;
  }

  .sm-track-player__track-info .track-details {
    column-gap: 8px;
    display: grid;
    grid-template:
      'title title'
      'badges subtitle' / auto 1fr;
    margin: 0 14px;
  }

  .track-details .name {
    color: #fff;
    grid-area: title;
    justify-self: start;
    width: 100%;
  }

  .track-details .artist {
    grid-area: subtitle;
    grid-column-start: badges;
    min-width: 0;
    width: 100%;
  }

  .track-details .badges {
    align-items: center;
    display: inline-flex;
    grid-area: badges;
    justify-content: center;
  }

  .sm-track-player__track-controls {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  /* .sm-track-player__container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 14px;
    background-color: var(--dark-grey);
    height: 90px;
  }

  .sm-track-player__track-info {
    min-width: 180px;
    width: 30%;
  }

  .sm-track-player__track-info-image {
    isolation: isolate;
    position: relative;
  }

  .sm-track-player__track-info-image-container {
    width: 56px;
    height: 56px;
  }

  .sm-track-player__track-info-image img {
    background-color: #000;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
  }

  .sm-track-player__track-info-details {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-column-gap: 8px;
    -moz-column-gap: 8px;
    column-gap: 8px;
    display: grid;
    grid-template:
      'title title'
      'badges subtitle' / auto 1fr;
    margin: 0 14px;
  }

  .sm-track-player__track-info-details-title {
    color: #fff;
    grid-area: title;
    justify-self: start;
    width: 100%;
  }

  .sm-track-player__track-info-details-artist {
    grid-area: subtitle;
    grid-column-start: badges;
    min-width: 0;
    width: 100%;
  }

  .sm-track-player__track-info-details-badge {
    display: inline-flex;
    grid-area: badges;
    justify-content: center;
    align-items: center;
  } */
`;

export default StyledTrackPlayer;
