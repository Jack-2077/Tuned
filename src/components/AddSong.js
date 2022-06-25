import React, { useState } from 'react';
import styled from 'styled-components';

const AddSongContainer = styled.div`
  grid-area: add-song;
  display: flex;
  align-items: baseline;
  gap: 1em;
`;

const Input = styled.input`
  border-radius: 40px;
  min-width: 85%;
  margin-top: 4%;
  height: 40px;
  background-color: ${(props) => props.theme.secondary};
  color: #ffffff;
  border: none;
`;

const Button = styled.button`
  background-color: #bb86fc;
  border-radius: 100px;
  cursor: pointer;
  padding: 0.4375em 1.25em;
  height: 40px;
  font-size: 16px;

  &:hover {
    transform: scale(1.04);
  }
  /* border-radius: 40px;
  margin-top: 4%;
  margin-left: 10px;
  height: 30px; */
`;
export default function AddSong() {
  const [songLink, setSongLink] = useState('');

  const onUserSubmit = (e) => {
    if (songLink) {
      setSongLink('');
    }
  };

  return (
    <AddSongContainer>
      <Input
        type='text'
        placeholder='youtube or soundcloud link goes here'
        name='song-link'
        aria-label='Add Song Link'
        value={songLink}
        onChange={(e) => setSongLink(e.target.value)}
      />
      <Button type='submit' onClick={onUserSubmit}>
        Add
      </Button>
    </AddSongContainer>
  );
}
