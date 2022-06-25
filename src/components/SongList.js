import React from 'react';
import styled from 'styled-components';

const SongListContainer = styled.div`
  grid-area: song-list;
  color: red;
`;

const ClockSvg = styled.svg`
  fill: #b3b3b3;
  height: 16;
  width: 16;
`;
export default function SongList() {
  return (
    <SongListContainer>
      <div>
        # TITLE ALBUM TIME
        <ClockSvg role='img' height='16' width='16' viewBox='0 0 16 16'>
          <path d='M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z'></path>
          <path d='M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z'></path>
        </ClockSvg>
      </div>
    </SongListContainer>
  );
}
