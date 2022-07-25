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

  footer {
    margin: 0 0 30px 40px;
  }

  svg {
    height: 2em;
    width: 2em;
    fill: var(--white);
    display: block;
  }

  footer:hover svg {
    fill: rgb(255, 147, 0);
  }

  footer span {
    font-size: var(--fz-sm);
    margin-left: -15px;
  }
`;

export default StyledSideBar;
