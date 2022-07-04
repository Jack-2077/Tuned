import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { StyledAddTrack } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { addTrack, removeTrack } from '../features/addTrack/addTrackSlice';

import ReactPlayer from 'react-player';
import YoutubePlayer from 'react-player/youtube';
import SoundcloudPlayer from 'react-player/soundcloud';
import Modal from './Modal';

export default function AddTrack() {
  const [trackUrl, setTrackUrl] = useState('');
  const [TrackData, setTrackData] = useState({
    name: '',
    artist: '',
    streams: '',
    duration: 0,
    albumArt: '',
  });
  const [playable, setPlayable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const isPlayable =
      YoutubePlayer.canPlay(trackUrl) || SoundcloudPlayer.canPlay(trackUrl);
    setPlayable(isPlayable);
  }, [trackUrl]);

  async function handleEdit({ player }) {
    const nestedPlayer = player.player.player;
    let trackData;
    if (nestedPlayer.getVideoData) {
      trackData = await getYoutubeInfo(nestedPlayer);
    } else if (nestedPlayer.getCurrentSound) {
      trackData = await getSoundcloudInfo(nestedPlayer);
    }
    setTrackData({ trackData, trackUrl });
  }

  const getYoutubeInfo = (player) => {
    return new Promise((resolve, reject) => {
      const { title, video_id, author } = player.getVideoData();
      resolve({
        name: title,
        artist: author,
        duration: player.getDuration(),
        albumArt: `https://img.youtube.com/vi/${video_id}/0.jpg`,
      });
    });
  };

  const getSoundcloudInfo = (player) => {
    return new Promise((resolve, reject) => {
      player.getCurrentSound((trackData) => {
        if (trackData) {
          resolve({
            name: trackData.title,
            artist: trackData.user.userName,
            duration: Number(trackData.duration / 1000),
            albumArt: trackData.artwork_url.replace('-large', '-t500x500'),
          });
        }
      });
    });
  };

  const addToTrackList = ({ name, artist, albumArt }) => {
    const { duration } = TrackData.trackData;
    dispatch(addTrack({ name, artist, albumArt, duration }));
    closeModalHandler();
    setTrackUrl('');
  };
  const handleAddTrack = () => {
    TrackData.trackData && showModalHandler();
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

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
  ];

  let inputClassName = '';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = async (data) => {
  //   const trackUrl = data['track-link'];
  //   console.log(trackUrl);
  //   if (YoutubePlayer.canPlay(trackUrl)) {
  //     newTrackData = await getYoutubeInfo(player);
  //     setShowModal(true);
  //   } else if (SoundcloudPlayer.canPlay(trackUrl)) {
  //     newTrackData = await getSoundcloudInfo();
  //     setShowModal(true);
  //   }
  //   // const canPlay =
  //   //   YouTubePlayer.canPlay(trackUrl) || SoundcloudPlayer.canPlay(trackUrl);

  //   // if (canPlay) {
  //   //   setShowModal(true);
  //   // }
  //   //check if track can be added
  //   //if true
  //   //open modal
  //   //if false
  //   //show error message
  //   //console.log(data['track-link'] === 'just');
  //   inputClassName = errors['track-link'] ? 'hi' : 'addTrack__error-input';
  //   // console.log(inputClassName);

  //   reset({ 'track-link': '' });
  // };

  const testData = {
    name: 'jack',
    artist: 'Juke',
    duration: '3122',
    albumArt: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
  };

  return (
    <StyledAddTrack>
      <div className='addTrack__container'>
        <input
          type='text'
          placeholder='youtube or soundcloud link goes here'
          name='song-link'
          aria-label='Add Song Link'
          value={trackUrl}
          onChange={(e) => setTrackUrl(e.target.value)}
        />
        <button disabled={!playable} onClick={handleAddTrack}>
          Add
        </button>
      </div>
      {/* <Modal onModalClose={closeModalHandler} onConfirmHandler={addToTrackList}>
        {testData}
      </Modal> */}
      {showModal && (
        <Modal
          onModalClose={closeModalHandler}
          onConfirmHandler={addToTrackList}
        >
          {TrackData.trackData}
        </Modal>
      )}
      {trackUrl && <ReactPlayer url={trackUrl} hidden onReady={handleEdit} />}

      {!playable && trackUrl && (
        <p className='addTrack__error'>Please enter a valid link</p>
      )}
      {!trackUrl && <p>Please enter a url</p>}
    </StyledAddTrack>
  );
}
