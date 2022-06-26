import React, { useState } from 'react';
import { StyledAddSong } from './styles';

// import YoutubePlayer from 'react-player/youtube';
// import SoundcloudPlayer from 'react-player/soundcloud';
import Modal from './Modal';

export default function AddSong() {
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
  //   .then((yes) => console.log(yes.items[0].statistics.viewCount));

  const [songLink, setSongLink] = useState('');
  const [showModal, setShowModal] = useState(false);

  // const onUserSubmit = (e) => {
  //   if (songLink) {
  //     setSongLink('');
  //   }
  // };

  // const handleReady = ({ player }) => {
  //   const nestedPlayer = player.player.player;
  //   console.log(nestedPlayer.getVideoData());
  // };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const NewSongData = (
    <>
      <p>Home</p>
      <p>Ben Bohmer</p>
      <p>Album</p>
      <button onClick={closeModalHandler}>Discard</button>
      <button>Add</button>
    </>
  );
  return (
    <StyledAddSong>
      <input
        type='text'
        placeholder='youtube or soundcloud link goes here'
        name='song-link'
        aria-label='Add Song Link'
        value={songLink}
        onChange={(e) => setSongLink(e.target.value)}
      />
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal && (
        <Modal onModalClose={closeModalHandler}>{NewSongData}</Modal>
      )}
      {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal> */}
      {/* <YoutubePlayer
        url='https://music.youtube.com/watch?v=iMs8vfT25vg&feature=share'
        hidden
        onReady={handleReady}
      /> */}
    </StyledAddSong>
  );
}
