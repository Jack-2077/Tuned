import styled, { keyframes } from 'styled-components/macro';

export const queueAnimation = keyframes`
0%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const StyledTrackQueue = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .queue__item {
    display: grid;
    align-items: center;
    grid-template-columns: 0.8fr 0.2fr;
    grid-gap: var(--spacing-md);
    padding: var(--spacing-xs);
    color: var(--light-grey);
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    justify-content: space-between;
    &:hover,
    &:focus {
      background-color: var(--black);
    }

    @media (min-width: 768px) {
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
    min-width: 52px;
    height: 40px;
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
    gap: 2em;
  }
`;

export default StyledTrackQueue;
