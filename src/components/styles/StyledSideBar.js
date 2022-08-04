import styled from 'styled-components/macro';

const StyledSideBar = styled.div`
  grid-area: sidebar;
  background-color: var(--dark-grey);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .app-title {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 3.222em;
    color: var(--purple);
    text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
    padding: 0;
    text-align: center;
  }

  .notification {
    position: fixed;
    top: 0px;
    background: var(--purple);
    left: 0;
    right: 0px;
    padding: 12px 20px 10px;
    color: var(--dark-grey);
    border-bottom: 1px solid var(--gray);
    z-index: 30000;
    word-break: break-all;
  }

  .notification button {
    position: absolute;
    border: 0;
    background: none;
    right: 8px;
    font-size: 20px;
    top: 8px;
    color: var(--black);
    cursor: pointer;
    padding: 0;
  }

  footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }

  footer span {
    display: block;
    font-size: var(--fz-sm);
    @media (max-width: 1220px) {
      font-size: var(--fz-xxs);
    }
  }

  footer > div {
    text-align: center;
  }

  footer button {
    padding: 5px;
    border: solid 1px transparent;
    max-width: max-content;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1rem;
  }

  span {
    padding-top: 2px;
  }

  footer button,
  a > svg {
    margin: 0 auto;
  }

  svg {
    height: 2em;
    width: 2em;
    fill: var(--white);
    display: block;
  }

  a:hover svg {
    fill: rgb(255, 147, 0);
  }
`;

export default StyledSideBar;
