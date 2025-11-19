import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="container">
        <div class="grid-wrapper">
          <div class="login-section">
            <div class="login-panel">
              <div class="header">
                <h1>Bem-vindo, aventureiro!</h1>
                <p>Faça o login para iniciar sua jornada.</p>
              </div>

              <form class="form">
                <div class="form-group">
                  <label>Email</label>
                  <input class="form-input" type="email" placeholder="seuemail@exemplo.com" />
                </div>

                <div class="form-group">
                  <label>Senha</label>
                  <input class="form-input" type="password" placeholder="Digite sua senha" />
                </div>

                <div class="forgot-password">
                  <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit" class="btn-submit">Entrar</button>
              </form>

              <div class="divider">
                <hr />
                <p>Ou entre com</p>
                <hr />
              </div>

              <div class="social-login">
                <a href="#" class="icon-social" aria-label="Login com Google">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg>
                </a>
                <a href="#" class="icon-social" aria-label="Login com Facebook">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.22C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" class="icon-social" aria-label="Login com LinkedIn">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              <br />
              <br />
              <div class="divider">
                <hr />
                <button class="info-button">Saiba mais sobre este projeto</button>
                <hr />
              </div>
              <p class="signup-text">Desenvolvido por <a href="#">Igor</a> & <a href="#">Leonardo</a></p>
            </div>
          </div>

          <div class="image-section">
            <div class="image-container"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
