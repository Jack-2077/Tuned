import styled from 'styled-components/macro';

const StyledSongList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  .track__headings,
  .track__item {
    display: grid;
    align-items: center;
    grid-template-columns: 20px 1fr;
    grid-gap: var(--spacing-md);
    padding: var(--spacing-xs);
    color: var(--light-grey);

    @media (min-width: 768px) {
      grid-template-columns: 20px 4fr 2fr minmax(60px, 1fr);
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }

  .track__headings {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    color: #b3b3b3;
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
  }
  .track__item__img {
    margin-right: var(--spacing-sm);
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background-color: var(--dark-grey);
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
      justify-content: flex-end;
      font-variant-numeric: tabular-nums;
    }
  }
`;

export default StyledSongList;
