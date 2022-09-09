import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriel | Portólio</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500&display=swap' />
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
        <link rel="stylesheet" href="style.css" />
        <script src="./script.js" defer></script>
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
      </Head>

      <main>
        <section id="introduce">
          <div className={styles.resume}>
            <h2>Olá, sou o <strong>Gabriel Ripardo</strong></h2>
            <h3>Desenvolvedor Front-end</h3>
            <p className="description">
              Formação em Sistemas de Informações, há quatro anos
              atuando na área de desenvolvimento Web, com React JS, Vue JS,
              Next JS e desenvolvimento híbrido de aplicativos para dispositivos móveis utilizando
              o Ionic com o Angular.
            </p>
            <a className="btn-default" href="#contact">Contate-me</a>
          </div>
          <div className="avatar">
            <img className="avatar-image" src="./assets/avatar-gabriel.png" alt="avatar do Gabriel" />
          </div>
        </section>
        <section id="projects">
          <h2>Projetos</h2>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h3>Urna eletrônica</h3>
                <div className="swiper-slide-description">
                  <div className="swiper-slide-demo">
                    <img className="project-screen" src="./img/urna-eletronica_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className="project-description">
                    <p className="text-description">
                      Esse projeto apresenta a interface da urna eletrônica brasileira e possibilita
                      o usuário digitar ou clicar nos números referente ao candidato,
                      clicar no botão confirmar e ter o voto computado.
                      Foi utilizado html, css e o Vue.JS no desenvolvimento dessa aplicação.
                    </p>
                    <div className="swiper-slide-links">
                      <a href="https://urnaeletronicabrasil.netlify.app/" target="_blank">Abrir Site</a>
                      <a className="github" href="https://github.com/gabrielripardo/urna-eletronica"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <h3>Loja de Relógios</h3>
                <div className="swiper-slide-description">
                  <div className="swiper-slide-demo">
                    <img className="project-screen" src="./img/vitrios-ecommerce_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className="project-description">
                    <p className="text-description">
                      Simples e-commerce com uma página com cards contendo a foto do relógio, nome e
                      modelo, preço,
                      e botão para comprar com hover animado. Nesse projeto foi utilizado o React JS e
                      Sass.
                    </p>
                    <div className="swiper-slide-links">
                      <a href="https://vitrios-front-end-challenge.vercel.app/" target="_blank">Abrir
                        Site</a>
                      <a className="github"
                        href="https://bitbucket.org/gabrielripardo/vitrios-front-end-challenge/src/main/"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <h3>Mata Mosquito</h3>
                <div className="swiper-slide-description">
                  <div className="swiper-slide-demo">
                    <img className="project-screen" src="./img/mata-mosquito_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className="project-description">
                    <p className="text-description">
                      Game desenvolvido com html, css e javascript puro que tem como objetivo capturar o
                      maior número possível de moscas utilizando o
                      click do mouse em 30 segundos. Possui três níveis de dificuldades e ranking de todas
                      as pontuações.
                    </p>
                    <div className="swiper-slide-links">
                      <a href="https://matamosquitogamejs.netlify.app/" target="_blank">Abrir Site</a>
                      <a className="github" href="https://github.com/gabrielripardo/game-mosquito"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <h3>Psychonauts</h3>
                <div className="swiper-slide-description">
                  <div className="swiper-slide-demo">
                    <img className="project-screen" src="./img/psychonauts_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className="project-description">
                    <p className="text-description">
                      Simples SPA que lista os personagens com opção de visualizar seus respectivos
                      poderes e opção de favoritar o personagem. No desenvolvimento foi utilizado como
                      principais tecnologias o React JS, Redux e Material UI.
                    </p>
                    <div className="swiper-slide-links">
                      <a href="https://psychonauts-web.netlify.app/" target="_blank">Abrir Site</a>
                      <a className="github" href="https://github.com/gabrielripardo/psychonauts"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <h3>Pharma Inc</h3>
                <div className="swiper-slide-description">
                  <div className="swiper-slide-demo">
                    <img className="project-screen" src="./img/pharma-inc_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className="project-description">
                    <p className="text-description">
                      O Pharma Inc lista várias pacientes através da API randomuser.me, disponilizando
                      filtragem
                      a partir do gênero e nacionalidade, também é possível abrir os detalhes de cada
                      paciente a
                      partir do modal. Nesse projetos foram utilizados o React JS, Redux e Material UI.
                    </p>
                    <div className="swiper-slide-links">
                      <a href="https://pharma-inc-git-main-gabrielripardo.vercel.app/"
                        target="_blank">Abrir Site</a>
                      <a className="github" href="https://github.com/gabrielripardo/starwars-app"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
          </div>

          <ul>
            <li><a href="https://github.com/gabrielripardo/covid" target="_blank">Analytics Covid-19</a></li>
            <li><a href="https://github.com/gabrielripardo/references_web/tree/master/instagram-login" target="_blank">Intagram login Clone </a></li>https://62bf079dde934f76ac24f1dc--glittering-churros-427c95.netlify.app/instagram-login/
          </ul>
        </section>
        <section id="skills">
          <h2>Principais Habilidades</h2>
          <div className="list-skils">
            <a className="skill" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
              <img src="./assets/skills/small/html-logo.png" alt="logo do HTML"
                title="Linguagem de marcação de hipertexto" />
              <span>Html</span>
            </a>
            <a className="skill" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank"
              title="Linguagem de folha de estilo em cascata">
              <img src="./assets/skills/small/css-logo.png" alt="logo do CSS" />
              <span>CSS</span>
            </a>
            <a className="skill" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"
              title="Linguagem de programação Javascript">
              <img src="./assets/skills/small/js-logo.png" alt="logo do Javascript" />
              <span>Javascript</span>
            </a>
            <a className="skill" href="https://pt-br.reactjs.org/" target="_blank"
              title="Biblioteca Javascript React JS">
              <img src="./assets/skills/small/react-logo.png" alt="logo do React JS" />
              <span>React JS</span>
            </a>
          </div>
        </section>
        <section id="jobs">
          <h2>Experiências</h2>
          <div className="cards">
            <div className="card">
              <a className="card-header" href="https://portal.cfm.org.br/" target="_blank">
                <img className="card-logo" src="/assets/jobs/cfm.jpeg" alt="logo do Conselho Federal de Medicina" />
                <h3 className="card-title">Conselho Federal de Medicina</h3>
              </a>
              <h3 className="card-subtitle">Estagiário Desenvolvedor Web</h3>
              <h4 className="card-period">jul 2019 - jun 2020</h4>
              <ul>
                <li>Desenvolvimento fullstack de sistemas web com PHP, Jquery, Javascript e Vue JS.</li>
              </ul>
            </div>
            <div className="card">
              <a className="card-header" href="https://ibti.org.br/" target="_blank">
                <img className="card-logo" src="/assets/jobs/ibti.jpeg"
                  alt="logo do Instituto Brasília de Tecnologia e Inovação" />
                <h3 className="card-title">Instituto Brasília de Tecnologia e Inovação - IBTI</h3>
              </a>
              <h3 className="card-subtitle">Desenvolvedor Front-end</h3>
              <h4 className="card-period">jul 2021 - ago 2021</h4>
              <ul>
                <li>Desenvolvimento de Plataforma web para gerenciamento de dispositivos IoT com React JS e
                  Material UI.</li>
              </ul>
            </div>
            <div className="card">
              <a className="card-header" href="https://www.gebit.com.br/" target="_blank">
                <img className="card-logo" src="/assets/jobs/gebit.jpeg" alt="logo da Gebit" />
                <h3 className="card-title">Gebit</h3>
              </a>
              <h3 className="card-subtitle">Desenvolvedor Front-end</h3>
              <h4 className="card-period">jul 2021 - ago 2021</h4>
              <ul>
                <li>Desenvolvimento web com Vue JS, React js e Next JS.</li>
                <li>Desenvolvimento mobile, utilizando Ionic com Angular.</li>
              </ul>
            </div>
            <div className="card">
              <a className="card-header" href="https://www.smartnx.com/" target="_blank">
                <img className="card-logo" src="/assets/jobs/snx.jpeg" alt="logo da Smart Nx" />
                <h3 className="card-title">Smart Nx</h3>
              </a>
              <h3 className="card-subtitle">Desenvolvedor Front-end</h3>
              <h4 className="card-period">mar 2022 - jun 2022</h4>
              <ul>
                <li>Desenvolvimento de sistema web para centralização de serviços de atendimento ao cliente,
                  utilizando React JS e Ant Design.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Entre em contato comigo</h2>
          <form className="form-contact" action="https://formspree.io/f/mqknoovk" method="POST" >
            <input type="text" name="name" className="input-contact" placeholder="Digite seu nome" />
            <input type="email" name="email" className="input-contact" placeholder="Digite seu e-mail" />
            <textarea name="message" id="message" cols="30" rows="10" className="input-contact"
              placeholder="Digite sua mensagem"></textarea>
            <input type="submit" value="Enviar" className="btn-default input-contact" />
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.networks}>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/gabriel-sena-317a8412a/">
            <Image src="/assets/icons/linkedin.svg" alt="linkedin logo" width="25" height="25" />
          </a>
          <a className={styles.github} href="https://github.com/gabrielripardo">
            <Image src="/assets/icons/github.svg" alt="linkedin logo" width="25" height="25" />
          </a>
        </div>
        <div className={styles.textFooter}>Copyright &copy; 2022 Gabriel Ripardo de Sena</div>
      </footer>
    </div>
  )
}
