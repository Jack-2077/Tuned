import React from 'react';

import { formatDuration } from '../../utils';

import { ReactComponent as PlayIcon } from '../../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assests/icons/pause-icon.svg';
import { ReactComponent as QueueIcon } from '../../assests/icons/add-song.svg';
import { ReactComponent as TrashIcon } from '../../assests/icons/trash-icon.svg';

export default function Track({
  id,
  track,
  index,
  handleAddToQueue,
  handlePlayTrack,
  handlePauseTrack,
  handleRemoveTrack,
  currentTrackId,
  isPlaying,
}) {
  return (
    <li className='track__item' key={id}>
      <div className='track__item__num'>{index + 1}</div>
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
      <div className='track__item__duration'>
        {formatDuration(track.duration)}
      </div>
      <div className='track__item__icons'>
        <div className='icons-tooltip'>
          {currentTrackId === id && isPlaying ? (
            <>
              <PauseIcon onClick={handlePauseTrack} />
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
          <QueueIcon onClick={() => handleAddToQueue(id, track)} />
          <span className='icons-tooltip-text'>Add to queue</span>
        </div>
        <div className='icons-tooltip'>
          <TrashIcon onClick={() => handleRemoveTrack(id)} />
          <span className='icons-tooltip-text'>Delete track</span>
        </div>
      </div>
    </li>
  );
}
