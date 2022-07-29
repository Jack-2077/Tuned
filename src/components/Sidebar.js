import React, { useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { selectAllTracks } from '../features/addTrack/addTrackSlice';
import { useSaveTrackListMutation } from '../features/TrackList/TrackListSlice';
import { nanoid } from '@reduxjs/toolkit';

import { StyledSideBar } from './styles';

export default function Sidebar() {
  const [playlistLink, setPlaylistLink] = useState({
    isSaved: false,
    link: '',
  });
  const ref = useRef();
  const [saveTrackList] = useSaveTrackListMutation();
  const trackList = useSelector(selectAllTracks);

  const handleSavePlaylist = () => {
    const trackListId = nanoid(7);
    saveTrackList({ trackListId, tracks: trackList });

    setPlaylistLink({
      isSaved: true,
      link: `https://tuned-tracks.vercel.app/?trackListId=${trackListId}`,
    });
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        playlistLink.isSaved &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setPlaylistLink({ isSaved: false, link: '' });
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [playlistLink]);

  return (
    <StyledSideBar>
      <ul className='app-title'>
        {'TUNED'.split('').map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {playlistLink.isSaved && (
        <div className='notification' ref={ref}>
          <span>Your playlist has been saved! </span>
          <a href={playlistLink.link} rel='noopener noreferrer' target='_blank'>
            {playlistLink.link}
          </a>
          <button onClick={() => setPlaylistLink({ isSaved: false, link: '' })}>
            x
          </button>
        </div>
      )}

      <footer>
        <div>
          <button aria-label='Get Shareable Link' onClick={handleSavePlaylist}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20'
              width='20'
              viewBox='0 0 20 20'
            >
              <path
                fill='#FFF'
                d='M7.859 14.691l-.81.805a1.814 1.814 0 01-2.545 0 1.762 1.762 0 010-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 101.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 002 14.244a3.72 3.72 0 001.108 2.658c.736.73 1.702 1.096 2.669 1.096s1.934-.365 2.669-1.096l.811-.805a.988.988 0 00.005-1.4.995.995 0 00-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 101.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 10-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0018 5.866a3.726 3.726 0 00-1.109-2.659z'
              />
            </svg>
          </button>
          <span>Save Playlist</span>
        </div>
        <a
          href='https://github.com/Jack-2077/Tuned'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>

          <span>View Source</span>
        </a>
      </footer>
    </StyledSideBar>
  );
}
