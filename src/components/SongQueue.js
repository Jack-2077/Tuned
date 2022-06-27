import React from 'react';
import { StyledSongQueue } from './styles';
import styled from 'styled-components/macro';

const tracks = [
  {
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  },
  {
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  },
  {
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  },
  {
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  },
  {
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    albumArt:
      'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  },
];

const StyledSongQueueContainer = styled.div`
  grid-area: song-queue;
  color: red;
  background-color: var(--dark-grey);
  margin-top: 10%;

  h3 {
    padding-left: var(--spacing-xs);
  }
  /* padding-left: 10px; */
`;

export default function SongQueue() {
  return (
    <StyledSongQueueContainer>
      <h3>Next up</h3>
      <StyledSongQueue>
        {tracks.map((track, i) => (
          <li className='queue__item' key={i}>
            <div className='queue__item__title-group'>
              <div className='queue__item__img'>
                <img src={track.albumArt} alt={track.name} />
              </div>

              <div className='queue__item__name-artist'>
                <div className='queue__item__name overflow-ellipsis'>
                  {track.name}
                </div>
                <div className='queue__item__artist overflow-ellipsis'>
                  {track.artists.map((artist, i) => (
                    <span key={i}>
                      {artist.name}
                      {i !== track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='#ff5252'
            >
              <path d='M22 5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1zM4.934 21.071 4 8h16l-.934 13.071a1 1 0 0 1-1 .929H5.931a1 1 0 0 1-.997-.929zM15 18a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0z' />
            </svg>
          </li>
        ))}
      </StyledSongQueue>
    </StyledSongQueueContainer>
  );
}
