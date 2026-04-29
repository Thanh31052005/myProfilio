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
      return
      <div>
        <img src={javascriptimg} alt="JavaScript logo" className="language-logo" />
        <h1>JavaScript</h1>
      </div>;
    case 'TypeScript':
      return <img src={typescriptimg} alt="TypeScript logo" className="language-logo" />;
    case 'Python':
      return <img src={pythonimg} alt="Python logo" className="language-logo" />;
    case 'Java':
      return <img src={javaimg} alt="Java logo" className="language-logo" />;
    case 'C#':
      return <img src={csharpimg} alt="C# logo" className="language-logo" />;
    case 'C++':
      return <img src={cppimg} alt="C++ logo" className="language-logo" />;
    default:
      return null;
  }
}

function App() {
  const [language, setLanguage] = useState('');
  const clickEvent = () => {
    console.log(language);
    <showFromLanguage language={language} />  
  }


  return (
    <>
      <section id="center">
        <h1>Welcome to My Profilio</h1>
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
          <button type="button" className="counter" onClick={clickEvent} 
            switch (language) {
    case 'JavaScript':
      return
      <div>
        <img src={javascriptimg} alt="JavaScript logo" className="language-logo" />
        <h1>JavaScript</h1>
      </div>;
    case 'TypeScript':
      return <img src={typescriptimg} alt="TypeScript logo" className="language-logo" />;
    case 'Python':
      return <img src={pythonimg} alt="Python logo" className="language-logo" />;
    case 'Java':
      return <img src={javaimg} alt="Java logo" className="language-logo" />;
    case 'C#':
      return <img src={csharpimg} alt="C# logo" className="language-logo" />;
    case 'C++':
      return <img src={cppimg} alt="C++ logo" className="language-logo" />;
    default:
      return null;
          >
            Submit</button>
        </div>
      </section>
    </>
  )
}

export default App
