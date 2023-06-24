import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BackgroundRandom } from './modules/BackgrondModel/Background';
import { ContactButton } from './modules/ContactButton';
import './index.css';


createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
    <div className='container'>
      <BackgroundRandom/>
      <header className="container-header">
        <a href="http://127.0.0.1:5173/">
          <img className='header-left image' src="/wd.png" alt="logo"></img>
        </a>
        <div className="header-right">
          <ul className="header-links">
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="https://github.com/d4niz">Github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
            </svg></a>
            <ContactButton/>
          </ul>
        </div>
      </header>
      <span className="container-line"></span>
      <div className="container-area">
        <section className="area-skills">

        </section>
        <section className="area-projects">
          
        </section>
      </div>
    </div>
  </StrictMode>,
)