import './App.scss'
import { ArrowIcon } from './styles/components/arrow-icon'
import {Logo} from './styles/components/logo'


function App() {
  return (
    <main>
      <header className="header-container">
          <Logo/>
        <nav className="menu-options">
          <a href="">What we offer</a>
          <a href="">How it works</a>
          <a href="">Portfolio</a>
        </nav>
        <button >
          <div className="btn-face-white">
          Contact us
          <ArrowIcon/>
          </div>
          <div className="btn-face-purple">
          Contact us
          <ArrowIcon/>
          </div>
          </button>
      </header>
      <div className="content-container">
        <h1>Lests grow your social presence.</h1>
        <div className="bubble target">
        🎯
        </div>
        <div className="bubble shop">
        🛍️
        </div>
        <div className="bubble rocket">
        🚀
        </div>
        <div className="bubble fire">
        🔥
        </div>
      </div>
      
    </main>
   

    
  )
}

export default App


