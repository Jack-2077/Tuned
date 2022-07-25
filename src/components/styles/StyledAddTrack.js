import styled from 'styled-components/macro';

const StyledAddTrack = styled.ul`
  grid-area: add-track;

  .addTrack__container {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  .addTrack__error {
    color: var(--color-invalid);
    margin: 15px 10px 0 0;
  }
`;

export default StyledAddTrack;
