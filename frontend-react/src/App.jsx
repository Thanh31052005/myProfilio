import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import javaimg from './assets/java.png'
import pythonimg from './assets/python.png'
import csharpimg from './assets/csharp.png'
import cppimg from './assets/cpp.png'
import typescriptimg from './assets/TS.png'
import javascriptimg from './assets/JS.png'
import './App.css'



function showFromLanguage(language) {
  switch (language) {

    case 'JavaScript':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn JavaScript</h1>
          <img src={javascriptimg} alt="JavaScript logo" className="language-logo" />
        </>);
    case 'TypeScript':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn TypeScript</h1>
          <img src={typescriptimg} alt="TypeScript logo" className="language-logo" />
        </>
      )
    case 'Python':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn Python</h1>
          <img src={pythonimg} alt="Python logo" className="language-logo" />
        </>
      );
    case 'Java':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn Java</h1>
          <img src={javaimg} alt="Java logo" className="language-logo" />
        </>
      );
    case 'C#':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn C#</h1>
          <img src={csharpimg} alt="C# logo" className="language-logo" />
        </>

      );
    case 'C++':
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn đã chọn C++</h1>
          <img src={cppimg} alt="C++ logo" className="language-logo" />
        </>
      );
    default:
      return (
        <>
          <h1 className="text-4xl font-bold mb-6">Bạn chưa chọn ngôn ngữ</h1>
        </>);
  }
}


function App() {
  const [language, setLanguage] = useState('');
  const [languageSubmitted, setLanguageSubmitted] = useState('');


  const clickEvent = () => {
    console.log(language);
    setLanguageSubmitted(language);
  }

  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        <section id="center">
          <h1 className="text-4xl font-bold mb-6">Welcome to My Profilio</h1>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <div>
            <input
              type="text"
              placeholder="Chọn loại ngôn ngữ của bạn"
              size="40"
              className="input input-bordered input-primary w-full max-w-xs"
              list="language-list"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <datalist id="language-list">
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
            </datalist>
          </div>
          <button type="button" className="btn btn-primary mt-4" onClick={clickEvent}>
            Submit
          </button>
        </section>
        <div className="w-3/4 mx-auto h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 my-12 rounded-full"></div>
        <div id="center">{showFromLanguage(languageSubmitted)}</div>
        <section id="spacer"></section>
      </div>
    </>
  )
}

export default App
