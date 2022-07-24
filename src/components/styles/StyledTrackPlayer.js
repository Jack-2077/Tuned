import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.div`
  grid-area: track-player;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-end;

  img {
    width: 29vw;
    height: 45vh;
    border-radius: 12px;
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
`;

export default StyledTrackPlayer;
