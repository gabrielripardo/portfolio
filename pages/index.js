import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriel | Portólio</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500&display=swap' />
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          Portfólio
        </h1>

        <input id={styles.menuHamgurger} type="checkbox" />

        <nav className={styles.navList}>
          <a onClick="goToSection()" href="#introduce"><span className={styles.namePage}>Home</span></a>
          <a onClick="goToSection()" href="#projects"><span className={styles.namePage}>Projetos</span></a>
          <a onClick="goToSection()" href="#skills"><span className={styles.namePage}>Habilidades</span></a>
          <a onClick="goToSection()" href="#jobs"><span className={styles.namePage}>Experiências</span></a>
          <a onClick="goToSection()" href="#contact"><span className={styles.namePage}>Contato</span></a>
        </nav>

        <label id={styles.labelMenu} htmlFor={styles.menuHamgurger}>
          <div className={styles.menuBtn}>
            <span className={styles.hamburger}></span>
          </div>
        </label>
      </header>

      <main className={styles.main}>
        <section className={styles.introduce}>
          <div className={styles.resume}>
            <h2 className={styles.titleSection} >Olá, sou o <strong>Gabriel Ripardo</strong></h2>
            <h3>Desenvolvedor Front-end</h3>
            <p className={styles.description}>
              Formação em Sistemas de Informações, há quatro anos
              atuando na área de desenvolvimento Web, com React JS, Vue JS,
              Next JS e desenvolvimento híbrido de aplicativos para dispositivos móveis utilizando
              o Ionic com o Angular.
            </p>
            <a className={styles.btnDefault} href="#contact">Contate-me</a>          </div>
          <div className={styles.avatar} >
            <img className={styles.avatarImage} src="./assets/avatar-gabriel.png" alt="avatar do Gabriel" />
          </div>
        </section>
        <section className={styles.projects}>
          <h2 className={styles.titleSection} >Projetos</h2>
          <div className={styles.swiper} >
            <div className={styles.swiperWrapper} >
              <div className={styles.swiperWrapper} >
                <h3>Urna eletrônica</h3>
                <div className={styles.swiperWrapperDescription} >
                  <div className={styles.swiperWrapperDemo} >
                    <img className={styles.projectScreen} src="./img/urna-eletronica_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className={styles.projectDescription} >
                    <p className={styles.textDescription} >
                      Esse projeto apresenta a interface da urna eletrônica brasileira e possibilita
                      o usuário digitar ou clicar nos números referente ao candidato,
                      clicar no botão confirmar e ter o voto computado.
                      Foi utilizado html, css e o Vue.JS no desenvolvimento dessa aplicação.
                    </p>
                    <div className={styles.swiperWrapperLinks} >
                      <a href="https://urnaeletronicabrasil.netlify.app/" target="_blank">Abrir Site</a>
                      <a className={styles.github} href="https://github.com/gabrielripardo/urna-eletronica"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.swiperWrapper} >
                <h3>Loja de Relógios</h3>
                <div className={styles.swiperWrapperDescription} >
                  <div className={styles.swiperWrapperDemo} >
                    <img className={styles.projectScreen} src="./img/vitrios-ecommerce_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className={styles.projectDescription} >
                    <p className={styles.textDescription} >
                      Simples e-commerce com uma página com cards contendo a foto do relógio, nome e
                      modelo, preço,
                      e botão para comprar com hover animado. Nesse projeto foi utilizado o React JS e
                      Sass.
                    </p>
                    <div className={styles.swiperWrapperLinks} >
                      <a href="https://vitrios-front-end-challenge.vercel.app/" target="_blank">Abrir
                        Site</a>
                      <a className={styles.github}
                        href="https://bitbucket.org/gabrielripardo/vitrios-front-end-challenge/src/main/"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.swiperWrapper} >
                <h3>Mata Mosquito</h3>
                <div className={styles.swiperWrapperDescription} >
                  <div className={styles.swiperWrapperDemo} >
                    <img className={styles.projectScreen} src="./img/mata-mosquito_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className={styles.projectDescription} >
                    <p className={styles.textDescription} >
                      Game desenvolvido com html, css e javascript puro que tem como objetivo capturar o
                      maior número possível de moscas utilizando o
                      click do mouse em 30 segundos. Possui três níveis de dificuldades e ranking de todas
                      as pontuações.
                    </p>
                    <div className={styles.swiperWrapperLinks} >
                      <a href="https://matamosquitogamejs.netlify.app/" target="_blank">Abrir Site</a>
                      <a className={styles.github} href="https://github.com/gabrielripardo/game-mosquito"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.swiperWrapper} >
                <h3>Psychonauts</h3>
                <div className={styles.swiperWrapperDescription} >
                  <div className={styles.swiperWrapperDemo} >
                    <img className={styles.projectScreen} src="./img/psychonauts_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className={styles.projectDescription} >
                    <p className={styles.textDescription} >
                      Simples SPA que lista os personagens com opção de visualizar seus respectivos
                      poderes e opção de favoritar o personagem. No desenvolvimento foi utilizado como
                      principais tecnologias o React JS, Redux e Material UI.
                    </p>
                    <div className={styles.swiperWrapperLinks} >
                      <a href="https://psychonauts-web.netlify.app/" target="_blank">Abrir Site</a>
                      <a className={styles.github} href="https://github.com/gabrielripardo/psychonauts"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.swiperWrapper} >
                <h3>Pharma Inc</h3>
                <div className={styles.swiperWrapperDescription} >
                  <div className={styles.swiperWrapperDemo} >
                    <img className={styles.projectScreen} src="./img/pharma-inc_screenshot.png"
                      alt="screenshot do projeto" />
                  </div>
                  <div className={styles.projectDescription} >
                    <p className={styles.textDescription} >
                      O Pharma Inc lista várias pacientes através da API randomuser.me, disponilizando
                      filtragem
                      a partir do gênero e nacionalidade, também é possível abrir os detalhes de cada
                      paciente a
                      partir do modal. Nesse projetos foram utilizados o React JS, Redux e Material UI.
                    </p>
                    <div className={styles.swiperWrapperLinks} >
                      <a href="https://pharma-inc-git-main-gabrielripardo.vercel.app/"
                        target="_blank">Abrir Site</a>
                      <a className={styles.github} href="https://github.com/gabrielripardo/starwars-app"
                        target="_blank" title="repositório do projeto">
                        <img src="/assets/icons/github.svg" alt="linkedin logo" width="25"
                          height="25" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.swiperPagination} ></div>

            <div className={styles.swiperButtonPrev} ></div>
            <div className={styles.swiperButtonNext} ></div>

            <div className={styles.swiperScrollbar} ></div>
          </div>

          <ul>
            <li><a href="https://github.com/gabrielripardo/covid" target="_blank">Analytics Covid-19</a></li>
            <li><a href="https://github.com/gabrielripardo/references_web/tree/master/instagram-login" target="_blank">Intagram login Clone </a></li>https://62bf079dde934f76ac24f1dc--glittering-churros-427c95.netlify.app/instagram-login/
          </ul>
        </section>
        <section className={styles.skills}>
          <h2 className={styles.titleSection} >Principais Habilidades</h2>
          <div className={styles.listSkils} >
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
              <img src="./assets/skills/small/html-logo.png" alt="logo do HTML"
                title="Linguagem de marcação de hipertexto" />
              <span>Html</span>
            </a>
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank"
              title="Linguagem de folha de estilo em cascata">
              <img src="./assets/skills/small/css-logo.png" alt="logo do CSS" />
              <span>CSS</span>
            </a>
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"
              title="Linguagem de programação Javascript">
              <img src="./assets/skills/small/js-logo.png" alt="logo do Javascript" />
              <span>Javascript</span>
            </a>
            <a className={styles.skill} href="https://pt-br.reactjs.org/" target="_blank"
              title="Biblioteca Javascript React JS">
              <img src="./assets/skills/small/react-logo.png" alt="logo do React JS" />
              <span>React JS</span>
            </a>
          </div>
        </section>
        <section className={styles.jobs}>
          <h2>Experiências</h2>
          <div className={styles.cards} >
            <div className={styles.card} >
              <a className={styles.cardHeader} href="https://portal.cfm.org.br/" target="_blank">
                <img className={styles.cardLogo} src="/assets/jobs/cfm.jpeg" alt="logo do Conselho Federal de Medicina" />
                <h3 className={styles.cardTitle} >Conselho Federal de Medicina</h3>
              </a>
              <h3 className={styles.cardSubtitle} >Estagiário Desenvolvedor Web</h3>
              <h4 className={styles.cardPeriod} >jul 2019 - jun 2020</h4>
              <ul>
                <li>Desenvolvimento fullstack de sistemas web com PHP, Jquery, Javascript e Vue JS.</li>
              </ul>
            </div>
            <div className={styles.card} >
              <a className={styles.cardHeader} href="https://ibti.org.br/" target="_blank">
                <img className={styles.cardLogo} src="/assets/jobs/ibti.jpeg"
                  alt="logo do Instituto Brasília de Tecnologia e Inovação" />
                <h3 className={styles.cardTitle} >Instituto Brasília de Tecnologia e Inovação - IBTI</h3>
              </a>
              <h3 className={styles.cardSubtitle} >Desenvolvedor Front-end</h3>
              <h4 className={styles.cardPeriod} >jul 2021 - ago 2021</h4>
              <ul>
                <li>Desenvolvimento de Plataforma web para gerenciamento de dispositivos IoT com React JS e
                  Material UI.</li>
              </ul>
            </div>
            <div className={styles.card} >
              <a className={styles.cardHeader} href="https://www.gebit.com.br/" target="_blank">
                <img className={styles.cardLogo} src="/assets/jobs/gebit.jpeg" alt="logo da Gebit" />
                <h3 className={styles.cardTitle} >Gebit</h3>
              </a>
              <h3 className={styles.cardSubtitle} >Desenvolvedor Front-end</h3>
              <h4 className={styles.cardPeriod} >jul 2021 - ago 2021</h4>
              <ul>
                <li>Desenvolvimento web com Vue JS, React js e Next JS.</li>
                <li>Desenvolvimento mobile, utilizando Ionic com Angular.</li>
              </ul>
            </div>
            <div className={styles.card} >
              <a className={styles.cardHeader} href="https://www.smartnx.com/" target="_blank">
                <img className={styles.cardLogo} src="/assets/jobs/snx.jpeg" alt="logo da Smart Nx" />
                <h3 className={styles.cardTitle} >Smart Nx</h3>
              </a>
              <h3 className={styles.cardSubtitle} >Desenvolvedor Front-end</h3>
              <h4 className={styles.cardPeriod} >mar 2022 - jun 2022</h4>
              <ul>
                <li>Desenvolvimento de sistema web para centralização de serviços de atendimento ao cliente,
                  utilizando React JS e Ant Design.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <h2>Entre em contato comigo</h2>
          <form className={styles.formContact} action="https://formspree.io/f/mqknoovk" method="POST" >
            <input type="text" name="name" className={styles.inputContact} placeholder="Digite seu nome" />
            <input type="email" name="email" className={styles.inputContact} placeholder="Digite seu e-mail" />
            <textarea name="message" id={styles.message} cols="30" rows="10" className={styles.inputContact}
              placeholder="Digite sua mensagem"></textarea>
            <input type="submit" value="Enviar" className={styles.btnDefault + styles.btnDefault} />
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
    </div >
  )
}
