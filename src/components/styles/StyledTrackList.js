import styled from 'styled-components/macro';

const StyledTrackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  .track__headings,
  .track__item {
    display: grid;
    align-items: center;
    grid-template-columns: 20px 2fr 1fr 2fr;
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
    color: #b3b3b3;
    font-size: var(--fz-xs);
    line-height: 1rem;
    letter-spacing: 0.1em;
  }

  svg {
    fill: #b3b3b3;
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
  .track__item__img img {
    margin-right: var(--spacing-sm);
    width: 50px;
    height: 50px;
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
  .track__item__icons {
    display: flex;
    justify-content: space-between;
  }
  .track__item__icons svg {
    fill: var(--purple);
    height: 2em;
    width: 2em;
    transition: all 0.2s linear;
  }

  .track__item__icons div:last-child svg {
    fill: #de3030;
  }

  .track__item__icons svg:hover {
    transform: scale(1.2);
  }

  .track__item__icons__tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  }

  .track__item__icons__tooltip .track__item__icons__tooltiptext {
    visibility: hidden;
    width: 120px;
    bottom: 110%;
    left: 50%;
    margin-left: -60px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
  }

  .track__item__icons__tooltip:hover .track__item__icons__tooltiptext {
    visibility: visible;
  }
`;

export default StyledTrackList;
