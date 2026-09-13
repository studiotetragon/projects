import lindsayPhoto from './assets/lindsay.jpg'
import './App.css'

const NAV_LINKS = [
  { href: '#over-mij', label: 'Over mij' },
  { href: '#aanpak', label: 'Aanpak' },
  { href: '#voor-wie', label: 'Voor wie' },
  { href: '#boost', label: 'BOOST' },
  { href: '#contact', label: 'Contact' },
]

const SPECIALISATIES = [
  'Cognitieve ontwikkeling en intelligentie',
  'Aandacht en concentratie',
  'Sociaal-emotionele ontwikkeling',
  'Vermoeden van hoogbegaafdheid',
  'Vermoeden van AD(H)D',
  'Vermoeden van een autismespectrumstoornis (ASS)',
]

const TESTINSTRUMENTEN = ['WPPSI-IV-NL', 'WISC-V-NL', 'RAKIT-2-NL', 'ADOS-2-NL']

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          Lindsay Vanhecke
        </a>
        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        <section id="hero" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Psychodiagnostisch onderzoek</p>
            <h1>Elk kind heeft zijn eigen verhaal.</h1>
            <p className="lead">
              Ik ben Lindsay Vanhecke, gespecialiseerd in psychodiagnostisch
              onderzoek bij kinderen, jongeren en volwassenen. Met een
              warme, betrokken aanpak breng ik sterktes en werkpunten in
              kaart &mdash; en geef ik concrete handvatten voor thuis en op
              school.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Neem contact op
              </a>
              <a className="button ghost" href="#aanpak">
                Mijn aanpak
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={lindsayPhoto} alt="Portret van Lindsay Vanhecke" />
          </div>
        </section>

        <section id="over-mij" className="section">
          <h2>Over mij</h2>
          <div className="section-body">
            <p>
              Als moeder van drie, met meer dan 20 jaar werkervaring, weet ik
              als geen ander hoe belangrijk het is om een kind &mdash; en
              zijn of haar ouders &mdash; au s&eacute;rieux te nemen. Ik
              luister eerst, en test pas daarna.
            </p>
            <p>
              Ik studeerde af als psychologisch consulent aan Thomas More Antwerpen, en behaalde
              nadien postgraduaten in psychodiagnostiek en psychopedagogische
              begeleiding. Daarnaast volgde ik de opleiding tot
              Kindertalentenfluisteraar&reg; (Luk Dewulf en Elke Busschots),
              wat mijn aanpak nog meer verankert in wat een kind al goed kan.
            </p>
            <p>
              Ik werk zelfstandig als diagnosticus en daarnaast als psychopedagogisch
              werker binnen een CLB. Ook werk ik al meer dan 20 jaar
              als onderzoekscoördinator en trainer voor testuitgever
              Pearson, waar ik professionals doorheen Vlaanderen en
              Nederland opleid in het afnemen en interpreteren van
              psychologische testen.
            </p>
          </div>
        </section>

        <section id="aanpak" className="section alt">
          <h2>Mijn aanpak</h2>
          <div className="cards">
            <article className="card">
              <h3>Vanuit nieuwsgierigheid, niet vanuit een label</h3>
              <p>
                Elk onderzoek vertrekt vanuit oprechte interesse in wie je
                kind is. Ik kijk naar het volledige plaatje, niet enkel naar
                een diagnose.
              </p>
            </article>
            <article className="card">
              <h3>Een sterkte-zwakteprofiel</h3>
              <p>
                Je krijgt een helder overzicht van wat goed gaat &eacute;n
                waar extra ondersteuning welkom is, in begrijpbare taal.
              </p>
            </article>
            <article className="card">
              <h3>Concrete adviezen</h3>
              <p>
                Na het onderzoek geef ik praktische aanbevelingen voor thuis
                en op school, zodat iedereen meteen verder kan.
              </p>
            </article>
            <article className="card">
              <h3>Samen met ouders en school</h3>
              <p>
                Ik werk nauw samen met ouders, leerkrachten en CLB, zodat de
                adviezen ook echt hun weg vinden in het dagelijkse leven.
              </p>
            </article>
          </div>
        </section>

        <section id="voor-wie" className="section">
          <h2>Voor wie</h2>
          <p className="section-intro">
            Ik onderzoek kinderen vanaf 2 jaar, jongeren en volwassenen met
            vragen rond:
          </p>
          <ul className="tag-list">
            {SPECIALISATIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="section-note">
            Ik gebruik daarvoor gestandaardiseerde, wetenschappelijk
            onderbouwde testinstrumenten, zoals{' '}
            {TESTINSTRUMENTEN.join(', ')}.
          </p>
        </section>

        <section id="boost" className="section alt boost">
          <h2>Preventie op school: BOOST</h2>
          <div className="section-body">
            <p>
              Naast individuele diagnostiek zet ik me ook in voor
              preventieve geestelijke gezondheidszorg op school. Als
              medewerker bij GO! CLB Mechelen ben ik nauw betrokken bij{' '}
              <strong>BOOST</strong>, een preventieprogramma van UGent voor
              leerlingen van 11 tot 15 jaar.
            </p>
            <p>
              Via interactieve klassikale sessies leer ik jongeren omgaan met
              heftige gevoelens: van buikademhaling en spierontspanning tot
              cognitieve technieken en het herkennen van hun eigen talenten.
              &ldquo;Als je inzet op preventie, kan je psychische problemen
              later helpen voorkomen.&rdquo;
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p className="section-intro">
            Heb je vragen of wil je een onderzoek aanvragen? Neem gerust
            contact op.
          </p>
          <div className="contact-grid">
            <a className="contact-item" href="mailto:lindsayvanhecke@gmail.com">
              <span className="contact-label">E-mail</span>
              <span>lindsayvanhecke@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+32486668754">
              <span className="contact-label">Telefoon</span>
              <span>0486 66 87 54</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Lindsay Vanhecke</p>
      </footer>
    </>
  )
}

export default App
