import React from 'react';
import styled from 'styled-components/macro';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromQueue } from './addToQueueSlice';
import { toggleIsPlaying, playTrack } from '../currentTrack/currentTrackSlice';

import { StyledTrackQueue } from '../../components/styles';

import { ReactComponent as PlayIcon } from '../../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assests/icons/pause-icon.svg';
import { ReactComponent as TrashIcon } from '../../assests/icons/trash-icon.svg';

const StyledTrackQueueContainer = styled.div`
  grid-area: track-queue;
  background-color: var(--dark-grey);
  padding-top: 2%;
  overflow: auto;

  h3 {
    padding-left: var(--spacing-xs);
  }
`;

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
      {queuedTracks.length !== 0 && (
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
      )}
    </StyledTrackQueueContainer>
  );
}
