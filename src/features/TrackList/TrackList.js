import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { removeTrack, selectAllTracks } from '../addTrack/addTrackSlice';

import { StyledTrackList } from '../../components/styles';

import { addToQueue } from '../addToQueue/addToQueueSlice';

import {
  playTrack,
  selectCurrentTrack,
  toggleIsPlaying,
} from '../currentTrack/currentTrackSlice';

import { useGetTrackListQuery } from './TrackListSlice';
import Track from './Track';
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

const tracks = [
  {
    id: '93616184-c5e4-4343-9a41-e090fdf32d30',
    track: {
      name:
        'React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial',
      artist: 'yO',
      albumArt: 'https://img.youtube.com/vi/NqzdVN2tyvQ/0.jpg',
      duration: 14379,
      trackUrl:
        'https://www.youtube.com/watch?v=NqzdVN2tyvQ&ab_channel=DaveGray',
    },
  },
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
];

const testTrack = [
  {
    linkId: 'justin',
    tracks: {
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
  },
  {
    linkId: 'kat',
    tracks: {
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
  },
];

const StyledTrackListContainer = styled.div`
  grid-area: track-list;
`;

const StyledHeading = styled.ul`
  height: 0;
  overflow: hidden;
`;

export default function TrackList() {
  // const [test, setTest] = useState(false);
  // let content = '1233';
  // if (test) {
  //   const { data, isSuccess, isError, error, isLoading } = useGetTrackListQuery(
  //     'jack'
  //   );

  //   if (isLoading) {
  //     content = 'loading';
  //   } else if (isSuccess) {
  //     content = JSON.stringify(data);
  //   } else if (isError) {
  //     content = <p>{error}</p>;
  //   }
  // }

  // return (
  //   <p>
  //     <button onClick={() => setTest((prev) => !prev)}>Test</button>
  //     <li style={{ color: 'red' }}>it is {test ? 'true' : 'false'}</li>
  //     {content}
  //   </p>
  // );
  const testLink = 'john';

  // const fetchTracks = async () => {
  //   let { data: tracks, error } = await supabase
  //     .from('tunedTracks')
  //     .select('tracks')
  //     .eq('linkId', testLink);
  //   if (error) console.log('error', error);
  //   else console.log(tracks);
  // };

  // const saveTracks = async () => {
  //   let { data: tracks3, error } = await supabase
  //     .from('tunedTracks')
  //     .insert(testTrack);

  //   if (error) console.log('error', error);
  // };

  const dispatch = useDispatch();

  const { id: currentTrackId, isPlaying } = useSelector(selectCurrentTrack);

  // saveTracks();

  // fetchTracks();
  const tracks2 = useSelector(selectAllTracks);

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
      <StyledTrackList>
        {tracks.map(({ id, track }, i) => (
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
    </StyledTrackListContainer>
  );

  // return (
  //   <StyledTrackListContainer>
  //     <StyledHeading as={StyledTrackList}>
  //       <li>
  //         <div className='track__headings'>
  //           <div className='track__item__num'>#</div>
  //           <div className='track__item__title-group'>TITLE</div>
  //           <div className='track__item__duration'>
  //             <svg role='img' height='16' width='16' viewBox='0 0 16 16'>
  //               <path d='M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z'></path>
  //               <path d='M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z'></path>
  //             </svg>
  //           </div>
  //         </div>
  //       </li>
  //     </StyledHeading>
  //     <StyledTrackList>
  //       {tracks.map(({ id, track }, i) => (
  //         <li className='track__item' key={id}>
  //           <div className='track__item__num'>{i + 1}</div>
  //           <div className='track__item__title-group'>
  //             <div className='track__item__img'>
  //               <img src={track.albumArt} alt={track.name} />
  //             </div>
  //             <div className='track__item__name-artist'>
  //               <div className='track__item__name overflow-ellipsis'>
  //                 {track.name}
  //               </div>
  //               <div className='track__item__artist overflow-ellipsis'>
  //                 <span>{track.artist}</span>
  //               </div>
  //             </div>
  //           </div>
  //           <div className='track__item__duration'>
  //             {formatDuration(track.duration)}
  //           </div>
  //           <div className='track__item__icons'>
  //             <div className='icons-tooltip'>
  //               {currentTrackId === id && isPlaying ? (
  //                 <>
  //                   <PauseIcon onClick={handlePauseTrack} />
  //                   <span className='icons-tooltip-text'>Pause track</span>
  //                 </>
  //               ) : (
  //                 <>
  //                   <PlayIcon onClick={() => handlePlayTrack(id, track)} />
  //                   <span className='icons-tooltip-text'>Play track</span>
  //                 </>
  //               )}
  //             </div>
  //             <div className='icons-tooltip'>
  //               <QueueIcon onClick={() => handleAddToQueue(id, track)} />
  //               <span className='icons-tooltip-text'>Add to queue</span>
  //             </div>
  //             <div className='icons-tooltip'>
  //               <TrashIcon onClick={() => dispatch(removeTrack(id))} />
  //               <span className='icons-tooltip-text'>Delete track</span>
  //             </div>
  //           </div>
  //         </li>
  //       ))}
  //     </StyledTrackList>
  //   </StyledTrackListContainer>
  // );
}
