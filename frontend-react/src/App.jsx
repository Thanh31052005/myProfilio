import { useState } from 'react'
import javaimg from './assets/java.png'
import pythonimg from './assets/python.png'
import csharpimg from './assets/csharp.png'
import cppimg from './assets/cpp.png'
import typescriptimg from './assets/TS.png'
import javascriptimg from './assets/JS.png'
import calculatorimg from './assets/calculator.png'
import Social_Menu from './components/Social_Menu'
import './App.css'
import DockDemo from './components/dockdemo'
import Text3DFlip from './components/ui/text-3d-flip'
import { AnimatedThemeToggler } from './components/ui/animated-theme-toggler'
import { AnimatedGridPattern } from "./components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

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

  const handleTilt = (e) => {
    const wrapper = e.currentTarget;
    const card = wrapper.querySelector('.hover-3d');
    if (!card) return;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = (y / (rect.height / 2)) * -12;
    const ry = (x / (rect.width / 2)) * 12;
    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`)
  };

  const handleTiltReset = (e) => {
    const card = e.currentTarget.querySelector('.hover-3d');
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content relative">
        <AnimatedGridPattern
          numSquares={60} /* Tăng số lượng ô vuông lên vì màn hình rất rộng */
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            // Tăng vùng sáng từ 500px lên 1500px (hoặc xóa luôn dòng mask này nếu muốn lưới hiện rõ mọi nơi)
            "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",

            // fixed: Cố định khi cuộn chuột | inset-0: Trải đều 4 góc | z-0: Ép nằm dưới cùng
            "fixed inset-0 h-screen w-full skew-y-12 z-0"
          )}
        />
        <section id="center">

          <div>
            <Text3DFlip
              className="font-serif text-2xl sm:text-5xl md:text-[56px]"
              textClassName="text-base-content"
              flipTextClassName="text-base-content"
              rotateDirection="top"
              staggerDuration={0.03}
              staggerFrom="center"
            >
              <h1 className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
                Welcome to My Portfolio
              </h1>
            </Text3DFlip>
            <AnimatedThemeToggler className="absolute right-6 top-5 btn btn-ghost btn-circle" />
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-center items-stretch w-full max-w-4xl">

            <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
              <figure className="rounded-2xl overflow-hidden">
                <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
              </figure>
              <p className="hover-3d-title">Calculator App</p>
              <div className="hover-3d-overlay"></div>
            </div></div>

            <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
              <figure className="rounded-2xl overflow-hidden">
                <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
              </figure>
              <p className="hover-3d-title">Portfolio Site</p>
              <div className="hover-3d-overlay"></div>
            </div></div>

            <div onMouseMove={handleTilt} onMouseLeave={handleTiltReset}><div className="hover-3d">
              <figure className="rounded-2xl overflow-hidden">
                <img src={calculatorimg} alt="Calculator project" className="w-full h-full object-cover" />
              </figure>
              <p className="hover-3d-title">Coming Soon</p>
              <div className="hover-3d-overlay"></div>
            </div></div>

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
        <DockDemo />

        <section id="spacer"></section>
        <Social_Menu />
      </div>
    </>
  )
}

export default App
