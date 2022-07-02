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
  // console.log(
  //   ReactPlayer.canPlay('https://www.youtube.com/watch?v=ysz5S6PUM-U') statistics.viewCount

  // );

  // const key = 'AIzaSyCaN6erjbxaxGXBHv5jG0Os4WT5aJrq-hs';
  // const id =
  //   '499928520414-7ihdk51uhrljip128pb8mit7kfl5als7.apps.googleusercontent.com';

  // fetch(
  //   'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=iMs8vfT25vg&key=AIzaSyCaN6erjbxaxGXBHv5jG0Os4WT5aJrq-hs'
  // )
  //   .then((res) => res.json())
  //   .then( ( yes ) => console.log( yes.items[ 0 ].statistics.viewCount ) );

  // fetch(
  //   'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=iMs8vfT25vg&key=AIzaSyCaN6erjbxaxGXBHv5jG0Os4WT5aJrq-hs'
  // )
  //   .then((res) => res.json())
  //   .then((yes) => console.log(yes.items[0].statistics.viewCount));

  const [trackUrl, setTrackUrl] = useState('');
  const [TrackData, setTrackData] = useState({
    name: '',
    artist: '',
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

  // const onUserSubmit = (e) => {
  //   if (songLink) {
  //     setSongLink('');
  //   }
  // };

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
    return new Promise((resolve) => {
      const { title, video_id, author } = player.getVideoData();

      resolve({
        name: title,
        artist: author,
        duration: player.getDuration(),
        albumArt: `http://img.youtube.com/vi/${video_id}/0.jpg`,
      });
    });
  };

  const getSoundcloudInfo = (player) => {
    return new Promise((resolve) => {
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

  const addToTrackList = () => {
    dispatch(addTrack(TrackData.trackData));
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
      {showModal && (
        <Modal
          onModalClose={closeModalHandler}
          onConfirmHandler={addToTrackList}
        >
          {TrackData.trackData}
        </Modal>
      )}
      <ReactPlayer url={trackUrl} hidden onReady={handleEdit} />

      {!playable && trackUrl && (
        <p className='addTrack__error'>Please enter a valid link</p>
      )}
      {!trackUrl && <p>Please enter a url</p>}
    </StyledAddTrack>
  );
}
