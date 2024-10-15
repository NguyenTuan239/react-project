import React,  { useState, useRef, useEffect }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faRotate, faGear } from '@fortawesome/free-solid-svg-icons';
import './Setting.css'
import { useSetting } from '../../contexts/SettingContext';

const Setting = () => {
  const [isSettingIconActive, setIsSettingIconActive] = useState(false);
  const [isResetBtActive, setIsResetBtActive] = useState(false);
  const { direction, toggleDirection } = useSetting();
  const { textColor, toggletextColor } = useSetting();
  const { BGColor, toggleBGColor } = useSetting();
  const { LogoColor, toggleLogoColor } = useSetting();

  const settingIconRef = useRef(null);
  const settingBarRef = useRef(null);
  const resetBtRef = useRef(null);
  const resetBarRef = useRef(null);

  const handSettingIconClick = () => {
    setIsSettingIconActive((prev) => !prev);
  };
  const handResetBtClick = () => {
    setIsResetBtActive((prev) => !prev);
  };
  
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          settingIconRef.current &&
          !settingIconRef.current.contains(event.target) &&
          !settingBarRef.current.contains(event.target)
        ) {
          setIsSettingIconActive(false);
        }
        if (
          resetBtRef.current &&
          !resetBtRef.current.contains(event.target) &&
          !resetBarRef.current.contains(event.target)
        ) {
          setIsResetBtActive(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
  }, []);

  return (
    <div>
          <div id="setting-icon"
              ref={settingIconRef}
              onClick={handSettingIconClick}
              className={`${direction === 'ltr' ? 'right-0' : 'left-0'} fixed top-32 text-white h-10 w-10 z-40 cursor-pointer bg-black flex justify-center items-center`}>
            <FontAwesomeIcon icon={faGear} size='lg'/>
        </div>
          <div id="setting-bar"
              ref={settingBarRef}
        className={`
        ${direction === 'ltr' ? 'right-0 reactive' : 'left-0 reve'} 
        ${isSettingIconActive ? 'active' : ''} 
              setting-bar fixed top-32 h-64 w-72 z-40 bg-slate-100 flex flex-col p-4 gap-4`}>
            <div className="flex justify-between my-1 items-center">
                <h2 className="text-md text-zinc-700">Live Customizer</h2>
          <button 
            ref={resetBtRef}
            onClick={handResetBtClick}
            className={`netflix reset`}>
              <div className="reset-text">Reset All Settings</div>
              <FontAwesomeIcon icon={faRotate} size='sm'/>
          </button>
                <button id="setting-bar-exit" onClick={handSettingIconClick} className="text-sm">✖️</button>
            </div>
            <div className="flex space-x-2">
          <button id="ltr"
            onClick={() => toggleDirection('ltr')}
            className={`${direction === 'ltr' ? 'bg-black text-white' : 'text-zinc-700'} flex-1 border border-black  text-white py-1 rounded-sm`}>LTR</button>
          <button id="rtl"
            onClick={() => toggleDirection('rtl')}
            className={`${direction === 'rtl' ? 'bg-black text-white' : 'text-zinc-700'} flex-1 border border-black  py-1 rounded-sm`}>RTL</button>
            </div>
            <h3 className="text-md text-zinc-700">Color Customizer</h3>
            <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              toggletextColor('#ca0606');
              toggleBGColor('#ff00002a');
              toggleLogoColor('/image/logo.webp');
            }}
            className={`${textColor === '#ca0606' ? 'bg-black text-white' : 'text-zinc-700'} theme-buttons border border-black py-1 rounded-sm`} logo-color="/image/logo.webp">Netflix</button>
          <button
            onClick={() => {
              toggletextColor('#0303c4');
              toggleBGColor('#0000ff2a');
              toggleLogoColor('/image/logo-hotstar.webp');
            }}
            className={`${textColor === '#0303c4' ? 'bg-black text-white' : 'text-zinc-700'} theme-buttons border border-black py-1 rounded-sm`} logo-color="logo-hotstar.webp">Hotstar</button>
          <button
            onClick={() => {
              toggletextColor('#05b9b9');
              toggleBGColor('#00ffff2a');
              toggleLogoColor('/image/logo-prime.webp');
            }}
            className={`${textColor === '#05b9b9' ? 'bg-black text-white' : 'text-zinc-700'} theme-buttons border border-black py-1 rounded-sm`} logo-color="logo-prime.webp">Prime</button>
          <button
            onClick={() => {
              toggletextColor('#69ad03');
              toggleBGColor('#adff2f2a');
              toggleLogoColor('/image/logo-hulu.webp');
            }}
            className={`${textColor === '#69ad03' ? 'bg-black text-white' : 'text-zinc-700'} theme-buttons border border-black py-1 rounded-sm`} logo-color="logo-hulu.webp">Hulu</button>
            </div>
        </div>
      <div id="reset-dialog"
        className={`${isResetBtActive ? 'block' : 'hidden'}  dialog`}>
            <div ref={resetBarRef} className="dialog-content">
                <p>Are you sure you want to reset your settings?</p>
          <button
            id="confirm-reset"
            onClick={() => {
              toggletextColor('#ca0606');
              toggleBGColor('#ff00002a');
              toggleLogoColor('/image/logo.webp');
              toggleDirection('ltr');
              handResetBtClick();
            }}
          >Yes</button>
          <button
            id="cancel-reset"
            onClick={handResetBtClick}
          >No</button>
            </div>
        </div>
        <Link to="#" id="backToTop" className="netflix-bg"><FontAwesomeIcon icon={faChevronUp} /></Link>
    </div>
  )
}

export default Setting