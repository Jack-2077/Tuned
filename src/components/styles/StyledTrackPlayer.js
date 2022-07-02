import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 85%;
    height: 80%;
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
    top: 45%;
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
`;

export default StyledTrackPlayer;
