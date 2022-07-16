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
    height: 52%;
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

  svg {
    fill: var(--white);
  }
`;

export default StyledTrackPlayer;
