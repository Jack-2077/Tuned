import styled from 'styled-components/macro';

const StyledAddTrack = styled.div`
  grid-area: add-track;

  .addTrack__container {
    display: flex;
    gap: 1em;
    align-items: baseline;
    justify-content: space-around;
  }

  input[type='text'] {
    min-width: 0;
    width: 80%;
  }

  @media (max-width: 500px) {
    input[type='text'] {
      width: 65%;
    }
  }

  .addTrack__error {
    color: var(--color-invalid);
    margin: 15px 10px 0 0;
  }
`;

export default StyledAddTrack;
