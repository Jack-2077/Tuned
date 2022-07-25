import styled from 'styled-components/macro';

const StyledSideBar = styled.div`
  grid-area: sidebar;
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .app-title {
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: 65px;
    color: var(--purple);
    text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
    top: 10%;
  }

  button {
    padding: 10px;
    border: solid 1px transparent;
    max-width: max-content;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 30px;
    font-size: 1rem;
    margin-left: -7px;
  }

  footer {
    margin: 0 0 30px 35px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  svg {
    height: 2em;
    width: 2em;
    fill: var(--white);
    display: block;
  }

  footer a:hover svg {
    fill: rgb(255, 147, 0);
  }

  footer span {
    display: inline-block;
    font-size: var(--fz-sm);
    margin-left: -15px;
    margin-top: 10px;
  }
`;

export default StyledSideBar;
