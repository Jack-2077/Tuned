import React, { useState } from 'react';
import { StyledAddSong } from './styles';

export default function AddSong() {
  const [songLink, setSongLink] = useState('');

  const onUserSubmit = (e) => {
    if (songLink) {
      setSongLink('');
    }
  };

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
      <button type='submit' onClick={onUserSubmit}>
        Add
      </button>
    </StyledAddSong>
  );
}
