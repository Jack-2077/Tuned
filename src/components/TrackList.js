import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { removeTrack } from '../features/addTrack/addTrackSlice';

import { StyledTrackList } from './styles';
import { addToQueue } from '../features/addToQueue/addToQueueSlice';

const ClockSvg = styled.svg`
  fill: #b3b3b3;
  height: 16;
  width: 16;
`;

const tracks2 = [
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
  {
    album: {
      name: 'Begin Again',
      url: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
    },
    name: 'Escalate',
    artists: [{ name: 'Ben Bohmer' }],
    duration_ms: '3:58',
  },
];

const StyledTrackListContainer = styled.div`
  grid-area: track-list;
`;
export default function TrackList() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.addTrack.tracks);

  let trackDetails;

  function handleAddToQueue(id, { name, artist, duration, albumArt }) {
    dispatch(addToQueue({ id, track: { name, artist, duration, albumArt } }));
  }

  return (
    <StyledTrackListContainer>
      <StyledTrackList>
        <div className='track__headings'>
          <div className='track__item__num'>#</div>
          <div className='track__item__title-group'>TITLE</div>
          <div className='track__item__album overflow-ellipsis'>STREAMS</div>
          <div className='track__item__duration'>
            <ClockSvg role='img' height='16' width='16' viewBox='0 0 16 16'>
              <path d='M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z'></path>
              <path d='M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z'></path>
            </ClockSvg>
          </div>
        </div>
        {tracks.map(({ id, track }, i) => (
          <li className='track__item' key={id}>
            <div className='track__item__num'>{i + 1}</div>
            <div className='track__item__title-group'>
              {/* {track.album.images.length && track.album.images[2] && (
                <div className='track__item__img'>
                  <img src={track.album.images[2].url} alt={track.name} />
                </div>
              )} */}

              <div className='track__item__img'>
                <img src={track.albumArt} alt={track.name} />
              </div>

              <div className='track__item__name-artist'>
                <div className='track__item__name overflow-ellipsis'>
                  {track.name}
                </div>
                <div className='track__item__artist overflow-ellipsis'>
                  <span>{track.artist}</span>

                  {/* {track.artists.map((artist, i) => (
                    <span key={i}>
                      {artist.name}
                      {i !== track.artists.length - 1 && ', '}
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
            <div className='track__item__album overflow-ellipsis'>
              {track.name}
            </div>
            <div className='track__item__duration'>{track.duration}</div>
            <button onClick={() => handleAddToQueue(id, track)}>a</button>
            {/* <button onClick={() => dispatch(removeTrack(id))}>R</button> */}
          </li>
        ))}
      </StyledTrackList>
    </StyledTrackListContainer>
  );
}
