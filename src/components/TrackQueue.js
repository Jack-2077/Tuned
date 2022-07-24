import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as TrashIcon } from '../assests/icons/trash-icon.svg';

import { useDispatch, useSelector } from 'react-redux';

import { removeFromQueue } from '../features/addToQueue/addToQueueSlice';

import {
  toggleIsPlaying,
  playTrack,
} from '../features/currentTrack/currentTrackSlice';

import { StyledTrackQueue } from './styles';

const StyledTrackQueueContainer = styled.div`
  grid-area: track-queue;
  background-color: var(--dark-grey);
  margin-top: 2%;

  h3 {
    padding-left: var(--spacing-xs);
  }
`;

const queuedTracks = [
  {
    id: '8d8cf20d-05b7-440e-bde7-415bdff0d01e',
    track: {
      name: 'Ben Böhmer - Begin Again (Official Visualiser)',
      artist: 'Begin',
      albumArt: 'https://img.youtube.com/vi/p8cYGrK_WyA/0.jpg',
      duration: 162,
      trackUrl:
        'https://www.youtube.com/watch?v=p8cYGrK_WyA&ab_channel=BenB%C3%B6hmer',
    },
  },
  {
    id: '0ffa26ad-b397-4831-818e-8ba4df2a2cfb',
    track: {
      name: 'Drake - Jimmy Cooks (feat. 21 Savage)',
      artist: 'yO',
      albumArt: 'https://i1.sndcdn.com/artworks-zGcUlHkFu3VQ-0-t500x500.jpg',
      duration: 218.41,
      trackUrl:
        'https://soundcloud.com/octobersveryown/drake-jimmy-cooks-feat-21?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
];
export default function SongQueue() {
  const dispatch = useDispatch();

  const queuedTracks = useSelector((state) => state.addToQueue.queuedTracks);
  const { id: currentTrackId, isPlaying } = useSelector(
    (state) => state.currentTrack.track
  );

  function handlePause() {
    dispatch(toggleIsPlaying());
  }

  function handlePlayTrack(id, track) {
    dispatch(playTrack({ id, ...track }));
  }

  return (
    <StyledTrackQueueContainer>
      <h3>Next up</h3>
      <StyledTrackQueue>
        {queuedTracks.map(({ id, track }) => (
          <li className='queue__item' key={id}>
            <div className='queue__item__title-group'>
              <div className='queue__item__img'>
                <img src={track.albumArt} alt={track.name} />
              </div>

              <div className='queue__item__name-artist'>
                <div className='queue__item__name overflow-ellipsis'>
                  {track.name}
                </div>
                <div className='queue__item__artist overflow-ellipsis'>
                  {track.artist}
                </div>
              </div>
            </div>
            <div className='track__item__icons queue__icons'>
              <div className='icons-tooltip'>
                {currentTrackId === id && isPlaying ? (
                  <>
                    <PauseIcon onClick={handlePause} />
                    <span className='icons-tooltip-text'>Pause track</span>
                  </>
                ) : (
                  <>
                    <PlayIcon onClick={() => handlePlayTrack(id, track)} />
                    <span className='icons-tooltip-text'>Play track</span>
                  </>
                )}
              </div>
              <div className='icons-tooltip'>
                <TrashIcon onClick={() => dispatch(removeFromQueue(id))} />
                <span className='icons-tooltip-text'>Delete track</span>
              </div>
            </div>
          </li>
        ))}
      </StyledTrackQueue>
    </StyledTrackQueueContainer>
  );
}
