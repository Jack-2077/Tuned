import styled from 'styled-components/macro';

const StyledAddTrack = styled.ul`
  grid-area: add-track;

  .addTrack__container {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  .addTrack__error-message {
    font-size: 12px;
    color: var(--color-invalid);
  }
`;

export default StyledAddTrack;
