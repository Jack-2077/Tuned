import styled from 'styled-components/macro';

const StyledTrackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

  .track__headings,
  .track__item {
    display: grid;
    align-items: center;
    grid-template-columns: 20px 2fr 1fr 1.6fr;
    grid-gap: var(--spacing-md);
    padding: var(--spacing-xs);
    color: var(--light-grey);

    @media (min-width: 768px) {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    @media (max-width: 767px) {
      grid-template-columns: 20px 2fr 2fr;
    }
  }

  .track__headings {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    color: var(--light-grey);
    font-size: var(--fz-xs);
    line-height: 1rem;
    letter-spacing: 0.1em;
  }

  .track__item {
    font-size: var(--fz-sm);
    border-radius: var(--border-radius-subtle);
    transition: background-color 0.3s ease;
    cursor: default;
    &:hover,
    &:focus {
      background-color: var(--dark-grey);
    }
  }
  .track__item__num {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--fz-md);
    font-variant-numeric: tabular-nums;
    overflow: visible;
  }
  .track__item__title-group {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .track__item__img img {
    margin-right: var(--spacing-sm);
    width: 52px;
    height: 40px;
    flex-shrink: 0;
  }
  .track__item__name {
    color: var(--white);
    font-size: var(--fz-md);
  }
  .track__item__album {
    display: none;
    @media (min-width: 768px) {
      display: block;
      white-space: nowrap;
    }
  }
  .track__item__duration {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      font-variant-numeric: tabular-nums;
    }
  }

  .track__item__duration svg {
    fill: var(--light-grey);
  }
`;

export default StyledTrackList;
