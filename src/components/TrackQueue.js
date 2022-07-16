import React from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as TrashIcon } from '../assests/icons/trash-icon.svg';

import { useDispatch, useSelector } from 'react-redux';

import { removeFromQueue } from '../features/addToQueue/addToQueueSlice';
import { playTrack, pauseTrack } from '../features/playTrack/playTrackSlice';

import { StyledTrackQueue } from './styles';

const StyledTrackQueueContainer = styled.div`
  grid-area: track-queue;
  color: red;
  background-color: var(--dark-grey);
  margin-top: 10%;

  h3 {
    padding-left: var(--spacing-xs);
  }
`;

export default function SongQueue() {
  const dispatch = useDispatch();

  const queuedTracks = useSelector((state) => state.addToQueue.queuedTracks);
  const { id: currentTrackId, isPlaying } = useSelector(
    (state) => state.playTrack.currentTrack
  );

  function handlePlayTrack(id, track) {
    dispatch(playTrack({ id, ...track }));
  }

  function handlePauseTrack(id, track) {
    dispatch(pauseTrack({ id, ...track }));
  }

  // useEffect( () =>
  // {

  //   const t = isPlaying &&

  // }, [ currentTrackId, isPlaying ] );

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
                    <PauseIcon onClick={() => handlePauseTrack(id, track)} />
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
