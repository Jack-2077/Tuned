import styled from 'styled-components/macro';

const StyledTrackPlayer = styled.div`
  display: flex;
  justify-content: space-around;

  /* img{
    width: 82%; 
    height: 82%;
    border-radius: 8px;
  } */
  .current-track {
    background: url(${(props) => props.albumArt});
    background-color: rgba(0, 0, 0, 0.7);
    width: 275px;
    height: 275px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .track-controls {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    margin-top: auto;

    width: 90%;
    height: 50%;
    border-radius: 8px;
    margin-bottom: 10px;

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
