import React, { useState, useRef, useEffect, useContext } from 'react';
import './Playlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faPlay, faTags, faDownload,faStarHalf,faStar,  faPlus, faEye, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

const Playlist = () => {
  const [toggleDesNav, setToggleDesNav] = useState(1);
  const [isCreatPlaylistActive, setCreatPlaylistActive] = useState(false);

  const creatPlaylistRef = useRef(null);
  const PlaylistBoxRef = useRef(null);

  const handleDesNavClick = (nav) => {
    if (nav !== toggleDesNav) {
      setToggleDesNav(nav)
    }
  }

  const handleCreatPlaylistActive = () => {
    setCreatPlaylistActive((prev) => !prev);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        PlaylistBoxRef.current &&
        !PlaylistBoxRef.current.contains(event.target) &&
        !creatPlaylistRef.current.contains(event.target)
      ) {
        setCreatPlaylistActive(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <main className="w-full bg-black text-slate-200">
      <div className="playlist-profile px-5 xl:px-28">
        <div className="flex gap-5 items-center">
            <img src="/react-project/image/profile.png" alt="" className="h-16 w-16"/>
            <div>
                <p>Admin</p>
                <p>Admin@gmail.com</p>
            </div>
        </div>
        <a href="#"><div className="sub-but my-5 w-48 h-14 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">Subcription<i className="fa-solid fa-caret-right fa-xl pl-3"></i></span></div></a>
      </div>
      <div className="px-5 xl:px-28">
        <div className="playlist-bg">
          <button
            onClick={() => handleDesNavClick(1)}
            className={`${toggleDesNav === 1 ? 'toggle' : ''} playlist-nav`}>
            <span className="playlist-line netflix-bg"></span>
              Playlist
          </button>
          <button
            onClick={() => handleDesNavClick(2)}
            className={`${toggleDesNav === 2 ? 'toggle' : ''} playlist-nav`}>
            <span className="playlist-line netflix-bg"></span>
              Watchlist
          </button>
          <button
            onClick={() => handleDesNavClick(3)}
            className={`${toggleDesNav === 3 ? 'toggle' : ''} playlist-nav`}>
            <span className="playlist-line netflix-bg"></span>
            Favorrites
          </button>
        </div>
        <div className={`${toggleDesNav === 1 ? '' : 'hidden'} playlist-des py-5`}>
          <h2 className="py-5 text-2xl">My Playlist</h2>
          <div className="playlist-grid">
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/01.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 1</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>3 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/02.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 2</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>5 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/03.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 3</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>7 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/04.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 4</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>15 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/05.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 5</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>10 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/06.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 6</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>7 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/07.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 7</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>6 Views</p>
            </div>
          </div>
        </div>
        <div className={`${toggleDesNav === 2 ? '' : 'hidden'} playlist-des py-5`}>
          <h2 className="py-5 text-2xl">My Playlist</h2>
          <div className="playlist-grid">
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/01.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 1</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>3 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/02.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 2</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>5 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/03.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 3</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>7 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/04.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 4</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>10 Views</p>
            </div>
          </div>
        </div>
        <div className={`${toggleDesNav === 3 ? '' : 'hidden'} playlist-des py-5`}>
          <h2 className="py-5 text-2xl">My Playlist</h2>
          <div className="playlist-grid">
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/01.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 1</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>3 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/02.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 2</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>5 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/03.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 3</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>7 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/04.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 4</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>15 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/05.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 5</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>10 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/06.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 6</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>7 Views</p>
            </div>
            <div className="playlist-card">
              <div className="overflow-hidden"><img src="/react-project/image/movie/playlist/07.webp" alt=""/></div>
              <p className="pt-5 pb-3 text-xl font-medium">Play List 7</p>
              <p className="text-xs font-medium text-slate-300"><FontAwesomeIcon icon={faEarthAsia} className='netflix pr-2'/>Public<FontAwesomeIcon icon={faEye} className='netflix pr-2 pl-2'/>6 Views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-3">
        <button
          ref={creatPlaylistRef}
          onClick={handleCreatPlaylistActive}
          className="sub-but my-5 w-48 h-14 text-sm font-bold"><span className="sub-bg netflix-bg rounded-md"></span><span className="sub-but1"></span><span className="sub-but2"></span><span className="sub-but-text">creat playlist<FontAwesomeIcon icon={faCaretRight} size='xl' className='pl-3' /></span></button>
      </div>
      <div
        className={`${isCreatPlaylistActive ? '' : 'hidden'} playlist-dialog`}>
        <form ref={PlaylistBoxRef} className="creat-playlist-dialog">
          <button onClick={handleCreatPlaylistActive} className="playlist-dialog-exit text-sm cursor-pointer">✖️</button>
          <h2 className="text-2xl font-medium">Create New Playlist</h2>
          <p className="font-light mb-3">Please fill in all information below to create new playlist.</p>
          <div className="w-full mb-4">
            <p className="mb-2">Name*</p>
            <input type="text" className="form-control red-border !bg-black" name="Name" required/>
          </div>
          <div className="w-full mb-4 red-border">
            <p className="mb-2">Description</p>
            <textarea className="red-border text-control w-full !h-40 !bg-black" name="Description" cols="5" rows="5"></textarea>
          </div>
          <p>Privacy</p>
          <select name="PrivacySelect" className="playlist-privacy-select red-border my-3">
            <option value="1">Public</option>
            <option value="2">Private</option>
          </select>
          <p>Playlist Thumbnail</p>
          <p className="font-light text-sm mt-2">Support *.webp, *webp, *.gif, *.webp. Maximun upload file size: 5mb.</p>
          <div className="relative w-full h-12 my-4">
            <input type="file" id="file-upload" name="file-upload" accept=".webp,.gif" className="file-upload-input red-border"/>
          </div>
          <div className="flex gap-5">
            <button onClick={handleCreatPlaylistActive} className="bg-slate-200 py-4 px-7 rounded-md text-black text-sm font-semibold hover:bg-slate-400 cursor-pointer">CANCEL</button>
            <button type="submit" className="netflix-bg text-white py-4 px-7 rounded-md text-sm font-semibold border border-transparent hover:bg-slate-800 hover:border-white">SAVE</button>
          </div>
        </form>
    </div>
  </main>
  )
}

export default Playlist