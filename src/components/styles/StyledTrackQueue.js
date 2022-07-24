import styled from 'styled-components/macro';

const StyledTrackQueue = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 38vh;
  overflow: auto;

  /* body::-webkit-scrollbar       {background-color:#fff;width:16px}
body::-webkit-scrollbar-track {background-color:#fff}
body::-webkit-scrollbar-thumb {background-color:#babac0;border-radius:16px;border:4px solid #fff} */

  .queue__item {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing-md);
    padding: var(--spacing-xs);
    color: var(--light-grey);
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    &:hover,
    &:focus {
      background-color: var(--black);
    }

    @media (min-width: 768px) {
      grid-template-columns: 0.5fr 0.4fr;
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }

  .queue__item__title-group {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .queue__item__img img {
    margin-right: var(--spacing-sm);
    min-width: 44px;
    height: 50px;
    flex-shrink: 0;
    background-color: var(--dark-grey);
  }
  .queue__item__name {
    color: var(--white);
    font-size: var(--fz-md);
  }
  .queue__item__album {
    display: none;
    @media (min-width: 768px) {
      display: block;
      white-space: nowrap;
    }
  }

  .queue__icons {
    justify-content: space-around;
    gap: 4em;
  }
`;

export default StyledTrackQueue;
