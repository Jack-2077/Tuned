import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.footer`
  grid-area: track-player;
  height: auto;
  min-width: 100%;
  /* min-width: 620px; */
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
    min-width: 180px;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;

    /* display: flex;
    gap: 5px;
    width: 50%; */
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
    max-width: 722px;
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* display: flex;
    flex-direction: column;
    margin-right: 20px; */
  }

  .media-controls {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    gap: 16px;
    margin-bottom: 8px;
  }

  .playback-bar {
    align-items: center;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    width: 100%;
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
    height: 12px;
    position: relative;
    width: 100%;

    & > div {
      //1
      height: 100%;
      overflow: hidden;
      touch-action: none;
      width: 100%;

      div:first-child {
        border-radius: calc(4px / 2);
        height: 4px;
        width: 100%;
        background-color: hsla(0, 0%, 100%, 0.3);
        display: flex;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        div:first-child {
          overflow: hidden;
          border-radius: calc(4px / 2);
          height: 4px;
          width: 100%;

          div {
            background-color: #fff;
            border-radius: calc(4px / 2);
            height: 4px;
            transform: translateX(calc(-100% + 0%));
            width: 100%;
          }
        }
      }
      &:not(:first-child) {
        background-color: #fff;
        border: 0;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
        display: none;
        height: 12px;
        left: 0%;
        margin-left: -6px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        z-index: 100;
      }
    }
  }

  .hidden-visually {
    clip: rect(0 0 0 0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  /* .progress-bar > div > div {
    border-radius: calc(4px / 2);
    height: 4px;
    width: 100%;
    background-color: hsla(0, 0%, 100%, 0.3);
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:first-child {
      overflow: hidden;
      border-radius: calc(4px / 2);
      height: 4px;
      width: 100%;

      div {
        background-color: #fff;
        border-radius: calc(4px / 2);
        height: 4px;
        transform: translateX(calc(-100% + 0%));
        width: 100%;
      }
    }

    &:not(:first-child) {
      background-color: #fff;
      border: 0;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
      display: none;
      height: 12px;
      left: 0%;
      margin-left: -6px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      z-index: 100;
    }
  } */

  /* .progress-bar > div > div + div {
    overflow: hidden;
    border-radius: calc(4px / 2);
    height: 4px;
    width: 100%;
  } */

  /* .progress-bar > div > div + div > div {
    background-color: #fff;
    border-radius: calc(4px / 2);
    height: 4px;
    transform: translateX(calc(-100% + 0%));
    width: 100%;
  } */

  /* .progress-bar > div > div + div + div {
    background-color: #fff;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
    display: none;
    height: 12px;
    left: 0%;
    margin-left: -6px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    z-index: 100;
  } */

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
