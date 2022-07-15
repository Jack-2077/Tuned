import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { removeTrack } from '../features/addTrack/addTrackSlice';

import { StyledTrackList } from './styles';
import { addToQueue } from '../features/addToQueue/addToQueueSlice';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as QueueIcon } from '../assests/icons/add-song.svg';
import { ReactComponent as TrashIcon } from '../assests/icons/trash-icon.svg';
import { pauseTrack, playTrack } from '../features/playTrack/playTrackSlice';

// const tracks2 = [
//   {
//     id: '123',
//     track: {
//       name: 'React',
//       artist: 'Redux',
//       albumArt: 'https://img.youtube.com/vi/NqzdVN2tyvQ/0.jpg',
//       duration: 14379,
//     },
//   },
// ];

const StyledTrackListContainer = styled.div`
  grid-area: track-list;
`;
export default function TrackList() {
  const dispatch = useDispatch();

  const { id: currentTrackId, isPlaying } = useSelector(
    (state) => state.playTrack.currentTrack
  );
  const tracks = useSelector((state) => state.addTrack.tracks);

  function handleAddToQueue(id, { name, artist, duration, albumArt }) {
    dispatch(addToQueue({ id, track: { name, artist, duration, albumArt } }));
  }

  function handlePlayTrack(id, track) {
    dispatch(playTrack({ id, ...track }));
  }

  function handlePauseTrack(id, track) {
    dispatch(pauseTrack({ id, ...track }));
  }

  return (
    <StyledTrackListContainer>
      <StyledTrackList>
        <div className='track__headings'>
          <div className='track__item__num'>#</div>
          <div className='track__item__title-group'>TITLE</div>
          <div className='track__item__duration'>
            <svg role='img' height='16' width='16' viewBox='0 0 16 16'>
              <path d='M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z'></path>
              <path d='M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z'></path>
            </svg>
          </div>
        </div>
        {tracks.map(({ id, track }, i) => (
          <li className='track__item' key={id}>
            <div className='track__item__num'>{i + 1}</div>
            <div className='track__item__title-group'>
              <div className='track__item__img'>
                <img src={track.albumArt} alt={track.name} />
              </div>
              <div className='track__item__name-artist'>
                <div className='track__item__name overflow-ellipsis'>
                  {track.name}
                </div>
                <div className='track__item__artist overflow-ellipsis'>
                  <span>{track.artist}</span>
                </div>
              </div>
            </div>
            {/* <div className='track__item__album overflow-ellipsis'>
              {track.name}
            </div> */}
            <div className='track__item__duration'>{track.duration}</div>
            {/* <button onClick={ () => handleAddToQueue( id, track ) }>a</button> */}
            <div className='track__item__icons'>
              <div className='track__item__icons__tooltip'>
                {currentTrackId === id && isPlaying ? (
                  <>
                    <PauseIcon onClick={() => handlePauseTrack(id, track)} />
                    <span className='track__item__icons__tooltiptext'>
                      Pause track
                    </span>
                  </>
                ) : (
                  <>
                    <PlayIcon onClick={() => handlePlayTrack(id, track)} />
                    <span className='track__item__icons__tooltiptext'>
                      Play track
                    </span>
                  </>
                )}
              </div>
              <div className='track__item__icons__tooltip'>
                <QueueIcon onClick={() => handleAddToQueue(id, track)} />
                <span className='track__item__icons__tooltiptext'>
                  Add to queue
                </span>
              </div>
              <div className='track__item__icons__tooltip'>
                <TrashIcon onClick={() => dispatch(removeTrack(id))} />
                <span className='track__item__icons__tooltiptext'>
                  Delete track
                </span>
              </div>
            </div>
            {/*  */}

            {/* <button onClick={() => dispatch(removeTrack(id))}>R</button> */}
          </li>
        ))}
      </StyledTrackList>
    </StyledTrackListContainer>
  );
}
