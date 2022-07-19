import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    object-fit: cover;
    width: 85%;
    max-width: 85%;
    height: auto;
    border-radius: 12px;
  }

  .track-controls {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    border-radius: 8px;
    width: 75%;
    height: 55%;
    left: 12.5%;
    top: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }

  p:first-of-type + p {
    color: var(--light-grey);
  }

  p:first-of-type + p + p {
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

  /* .slider {
    background: linear-gradient(90deg, #ffffff 3%, #151616 3%);
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    outline: none;
    opacity: 1;
    transition: opacity 0.2s;
  } */

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

  /* .slider {
    width: 250px;
    margin-left: 14px;
    -webkit-appearance: none;
    background-color: #999;
    height: 2px;
    border: none;
    outline: 0;

    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  } */
`;

export default StyledTrackPlayer;
