import React, { useEffect, useState } from 'react';

import { StyledAddTrack } from './styles';

import { useDispatch } from 'react-redux';
import { addTrack } from '../features/addTrack/addTrackSlice';

import ReactPlayer from 'react-player/lazy';
import YoutubePlayer from 'react-player/youtube';
import SoundcloudPlayer from 'react-player/soundcloud';
import Modal from './Modal';

export default function AddTrack() {
  const [trackUrl, setTrackUrl] = useState('');
  const [TrackData, setTrackData] = useState({});
  // TrackData = { name: '', artist: '', duration: 0, albumArt: '',}

  const [playable, setPlayable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (trackUrl) {
      const isPlayable =
        YoutubePlayer.canPlay(trackUrl) || SoundcloudPlayer.canPlay(trackUrl);
      setPlayable(isPlayable);
    }
  }, [trackUrl]);

  async function handleEdit({ player }) {
    const nestedPlayer = player.player.player;
    let trackData;
    if (nestedPlayer.getVideoData) {
      trackData = getYoutubeInfo(nestedPlayer);
    } else if (nestedPlayer.getCurrentSound) {
      trackData = await getSoundcloudInfo(nestedPlayer);
    }

    console.log(trackData.albumArt);

    setTrackData({ trackData, trackUrl });
  }

  const getYoutubeInfo = (player) => {
    const { title, video_id, author } = player.getVideoData();
    return {
      name: title,
      artist: author,
      duration: player.getDuration(),
      albumArt: `https://img.youtube.com/vi/${video_id}/0.jpg`,
    };
    // return new Promise((resolve, reject) => {
    //   const { title, video_id, author } = player.getVideoData();
    //   resolve({
    //     name: title,
    //     artist: author,
    //     duration: player.getDuration(),
    //     albumArt: `https://img.youtube.com/vi/${video_id}/0.jpg`,
    //   });
    // });
  };

  function handleUserInput(e) {
    setTrackUrl(e.target.value);
    if (!trackUrl) {
      Object.keys(TrackData).length !== 0 && setTrackData({});
    }
  }

  const getSoundcloudInfo = async (player) => {
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
    dispatch(addTrack({ name, artist, albumArt, duration, trackUrl }));
    closeModalHandler();

    //reset state
    setTrackUrl('');
    setTrackData({});
  };
  const handleAddTrack = () => {
    showModalHandler();
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setTrackUrl('');
    setTrackData({});
  };

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
          onChange={handleUserInput}
        />
        <button disabled={!trackUrl || !playable} onClick={handleAddTrack}>
          Add
        </button>
      </div>

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
    </StyledAddTrack>
  );
}
