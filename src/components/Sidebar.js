import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  grid-area: sidebar;

  /*
  width: 8.5%;
  position: absolute;
  left: 0;
  top: 0; */
  background-color: ${(props) => props.theme.secondary};
`;
export default function Sidebar() {
  return <StyledSideBar />;
}
