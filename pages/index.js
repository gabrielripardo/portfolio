import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Jobs from '../components/Jobs'
import jobsList from '../pages/api/jobsList.json'
import projectsList from '../pages/api/projectsList.json'
import Card from '../components/Card'
import Cards from '../components/Cards'

const fullscreen = {
  height: '100%'
}

export default function Home() {
  const [btnHamburger, setBtnHamburger] = useState(false)  

  const handleBtnHamburger = () => {
    setBtnHamburger(!btnHamburger)
  }

  return (
    <div className={styles.content}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gabriel | Portólio</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500&display=swap' />
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
      </Head>
      <header className={styles.header} style={btnHamburger ? fullscreen : null}>
        <nav className={styles.nav}>
          <span className={styles.logo}>
            <img className={styles.imageLogo} src='./img/logo.png'></img>
          </span>

          <input id={styles.menuHamburger} type="checkbox" checked={btnHamburger} readOnly />

          <nav className={styles.navList}>
            <Link href="#about">
              <a><span className={styles.namePage}>Sobre mim</span></a>
            </Link>
            <Link href="#jobs">
              <a><span className={styles.namePage}>Experiências</span></a>
            </Link>
            <Link href="#projects">
              <a><span className={styles.namePage}>Projetos</span></a>
            </Link>
            <Link href="#skills">
              <a><span className={styles.namePage}>Habilidades</span></a>
            </Link>
            <Link href="#contact">
              <a><span className={styles.namePage}>Contato</span></a>
            </Link>
          </nav>

          <label id={styles.labelMenu} htmlFor={styles.menuHamgurger}>
            <div onClick={handleBtnHamburger} className={styles.menuBtn}>
              <span className={styles.hamburger}></span>
            </div>
          </label>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.introduce}>
          <div className={styles.gridLayout}>
            <div className={styles.contentIntroduce}>
              <div className={styles.resume}>
                <h1 className={styles.titleSection} >
                  Olá, sou o
                  <span className={styles.name}>Gabriel Ripardo</span>
                  <span className={styles.office}>Desenvolvedor Front-end</span>
                </h1>
                <a className={styles.btnDefault} href="#contact">Contate-me</a>
              </div>
              <div className={styles.avatar} >
                <img className={styles.avatarImage} src="./assets/avatar-gabriel.png" alt="avatar do Gabriel" />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.aboutMe}>
          <div className={styles.gridLayout}>
            <h2 className={styles.titleSection} >Sobre mim</h2>
            <p className={styles.description}>
              Sempre querendo descobrir como as coisas funcionavam, costuvama me pergutar
              &quot;como aquele site é feito&quot;, &quot;aquele app faz algo simples, quanto tempo leva pra fazer&quot;.
              Foram esses tipos de perguntas que me levaram a entrar na área de desenvolvimento e
              depois começar a colocar em prática tudo o que foi adquirido através de aulas, livros, bootcamps.
              Com a minha jornada de 4 anos desenvolvendo sistemas e apps para diversas empresas, decidi a pouco menos de 2 anos
              focar no desenvolvimento front-end, objetivando melhorar a qualidade do código css e o uso
              adequado do Javascript.
            </p>
          </div>
        </section>
        <section id="jobs" className={styles.jobs}>
          <div className={styles.gridLayout}>
            <h2 className={styles.titleSection} >Experiências</h2>
            <Jobs list={jobsList} />
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.gridLayout}>
            <h2 className={styles.titleSection}>Projetos</h2>
            <Cards list={projectsList} />
          </div>
        </section>
        <section id="skills" className={styles.skills}>
          <h2 className={styles.titleSection} >Principais Habilidades</h2>
          <div className={styles.listSkils} >
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
              <img src="./assets/skills/small/html-logo.png" alt="logo do HTML"
                title="Linguagem de marcação de hipertexto" />
              <span>Html</span>
            </a>
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer"
              title="Linguagem de folha de estilo em cascata">
              <img src="./assets/skills/small/css-logo.png" alt="logo do CSS" />
              <span>CSS</span>
            </a>
            <a className={styles.skill} href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"
              title="Linguagem de programação Javascript">
              <img src="./assets/skills/small/js-logo.png" alt="logo do Javascript" />
              <span>Javascript</span>
            </a>
            <a className={styles.skill} href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer"
              title="Biblioteca Javascript React JS">
              <img src="./assets/skills/small/react-logo.png" alt="logo do React JS" />
              <span>React JS</span>
            </a>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <h2 className={styles.titleSection}>Entre em contato comigo</h2>
          <form className={styles.formContact} action="https://formspree.io/f/mqknoovk" method="POST" >
            <input type="text" name="name" className={styles.inputContact} placeholder="Digite seu nome" />
            <input type="email" name="email" className={styles.inputContact} placeholder="Digite seu e-mail" />
            <textarea name="message" id={styles.message} cols="30" rows="10" className={styles.inputContact}
              placeholder="Digite sua mensagem"></textarea>
            <input type="submit" value="Enviar" className={styles.btnDefault} />
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.networks}>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/gabriel-sena-317a8412a/">
            <img src="/assets/icons/linkedin.svg" alt="linkedin logo" width="25" height="25" />
          </a>
          <a className={styles.github} href="https://github.com/gabrielripardo">
            <img src="/assets/icons/github.svg" alt="linkedin logo" width="25" height="25" />
          </a>
        </div>
        <div className={styles.textFooter}>Copyright &copy; 2022 Gabriel Ripardo de Sena</div>
      </footer>
    </div >
  )
}
