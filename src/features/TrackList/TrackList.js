import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Track from './Track';

import {
  removeTrack,
  selectAllTracks,
  setTracks,
} from '../addTrack/addTrackSlice';
import {
  playTrack,
  selectCurrentTrack,
  toggleIsPlaying,
} from '../currentTrack/currentTrackSlice';
import { addToQueue } from '../addToQueue/addToQueueSlice';
import { useGetTrackListQuery } from './TrackListSlice';

import styled from 'styled-components/macro';
import { StyledLoader, StyledTrackList } from '../../components/styles';

const StyledTrackListContainer = styled.div`
  grid-area: track-list;
`;

const StyledHeading = styled.ul`
  height: 40px;
  overflow: hidden;
`;

export default function TrackList() {
  const dispatch = useDispatch();
  const tracks = useSelector(selectAllTracks);
  let trackListId;

  const queryString = document.location.search;
  if (queryString) {
    const params = new URLSearchParams(document.location.search);
    trackListId = params.get('trackListId');
  }
  const { data, isSuccess, isLoading } = useGetTrackListQuery(trackListId);

  useEffect(() => {
    if (isSuccess) {
      if (data.length) {
        dispatch(setTracks(data[0].tracks));
      }
    }
  }, [isSuccess, data]);

  const { id: currentTrackId, isPlaying } = useSelector(selectCurrentTrack);

  const addToQueueHandler = (
    id,
    { name, artist, duration, albumArt, trackUrl }
  ) => {
    dispatch(
      addToQueue({ id, track: { name, artist, duration, albumArt, trackUrl } })
    );
  };

  const playTrackHandler = (id, track) => dispatch(playTrack({ id, ...track }));

  const pauseTrackHandler = () => dispatch(toggleIsPlaying());

  const removeFromTrackListHandler = (id) => {
    dispatch(removeTrack(id));
  };

  return (
    <StyledTrackListContainer>
      <StyledHeading as={StyledTrackList}>
        <li>
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
        </li>
      </StyledHeading>
      {queryString && isLoading && (
        <StyledLoader>
          <div></div>
          <div></div>
          <div></div>
        </StyledLoader>
      )}
      {
        <StyledTrackList>
          {tracks.length !== 0 &&
            tracks.map(({ id, track }, i) => (
              <Track
                id={id}
                key={id}
                index={i}
                track={track}
                currentTrackId={currentTrackId}
                isPlaying={isPlaying}
                handleAddToQueue={addToQueueHandler}
                handlePlayTrack={playTrackHandler}
                handlePauseTrack={pauseTrackHandler}
                handleRemoveTrack={removeFromTrackListHandler}
              />
            ))}
        </StyledTrackList>
      }
    </StyledTrackListContainer>
  );
}
