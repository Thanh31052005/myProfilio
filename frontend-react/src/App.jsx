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
import thenorthface from './assets/thenorthface.svg'
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



          <div>
            <h1 className="text-4xl font-bold mb-6 top-10 ">Welcome to My Profilio</h1>
            <label className="swap swap-rotate right-6 top-5 absolute">
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
          </div>
          <div><div className="hover-3d">
            <figure className="max-w-100 rounded-2xl">
              <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div></div>

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

        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-4">
          <aside className="grid-flow-col items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current">
              <path d="M15.816 6.36v3.36h.228a4.847 4.847 0 0 1 4.764 4.764v3.036H24v-3.132c0-4.428-3.6-8.028-8.028-8.028H15.9Zm-9.06.012v.6h1.008V9.72h.696V6.972h1.008v-.6zm2.964 0V9.72h.696v-1.5h1.308v1.5h.696V6.372h-.696v1.272h-1.308V6.372Zm3 0V9.72h2.4v-.588h-1.752v-.876h1.548v-.588h-1.548V6.96h1.752v-.588ZM4.644 10.14c-.444 0-1.608.192-1.608 1.752s1.164 1.752 1.608 1.752c.444 0 1.608-.192 1.608-1.752S5.088 10.14 4.644 10.14zM0 10.236v3.336h.648v-2.376H.66l1.368 2.376h.696v-3.336h-.648v2.316h-.012L.732 10.236Zm6.54 0 .012 3.336h.684v-1.308h.72c.516 0 .54.18.54.636 0 .348.024.516.072.672h.768v-.084c-.144-.048-.144-.168-.144-.66 0-.624-.144-.732-.42-.852.324-.108.516-.42.516-.792 0-.288-.168-.948-1.056-.948zm2.916 0v.588h1.02v2.748h.696v-2.748h1.008v-.588zm2.976 0v3.336h.696v-1.5h1.296v1.5h.696v-3.336h-.696v1.26h-1.296v-1.26zm3.372 0v3.348h.156c1.08 0 1.944.876 1.944 1.944v1.992h2.388v-2.988c-.012-2.316-1.86-4.2-4.152-4.296h-.252Zm-11.16.504c.372 0 .9.228.9 1.164 0 .936-.528 1.164-.9 1.164s-.912-.228-.912-1.164c0-.936.54-1.164.912-1.164zm2.58.072h.864c.408 0 .492.252.492.432 0 .324-.18.456-.54.456h-.816Zm3.684 3.204c-.876 0-1.572.612-1.572 1.812 0 1.188.648 1.8 1.56 1.8.864 0 1.344-.516 1.488-1.26h-.72c-.084.42-.36.648-.756.648-.612 0-.852-.552-.852-1.164 0-.972.504-1.2.852-1.2.588 0 .696.384.756.588v-.012h.72c-.036-.504-.456-1.212-1.476-1.212zm-6.696.084v3.432h.708v-1.44h1.512v-.612H4.92v-.768h1.728V14.1Zm3.228 0-1.224 3.432h.756l.228-.708h1.284l.216.708h.78L8.268 14.1Zm5.232 0v3.432h2.46v-.612h-1.8v-.888h1.596v-.6h-1.596v-.72h1.8V14.1Zm3.144.012v3.432h1.596v-1.992c0-.792-.648-1.44-1.44-1.44zm-7.98.768h.012l.42 1.356h-.876Zm-4.92.912a.927.927 0 0 0-.936.924c0 .528.432.924.936.924a.917.917 0 0 0 .924-.924.917.917 0 0 0-.924-.924zm0 .144c.42 0 .756.336.756.78 0 .456-.324.792-.756.792s-.768-.348-.768-.792c0-.444.336-.78.768-.78zm-.36.24v1.092h.168V16.8h.18l.3.468h.18l-.312-.48c.168-.024.288-.108.288-.3 0-.216-.132-.312-.384-.312zm.168.132h.228c.12 0 .24.024.24.168 0 .168-.144.18-.288.18h-.18z" />
            </svg>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>

          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <div class="flex gap-4">

              <a href="https://github.com/Thanh31052005" target="_blank" class="btn btn-soft btn-error btn-circle text-base-content" aria-label="GGitHub logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="btn btn-soft btn-circle text-base-content" aria-label="X logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="btn btn-soft btn-primary btn-circle text-base-content" aria-label="Discord logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>


              <a href="#" target="_blank" class="btn btn-soft btn-info btn-circle text-base-content" aria-label="LinkedIn logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default App
