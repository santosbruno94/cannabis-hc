const WPP_URL = "https://wa.me/5522920084987?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20HC%20preventivo%20para%20cannabis%20medicinal.";

function Nav() {
  return (
    <nav className="nav">
      <a href="../../index.html" className="nav-back" aria-label="Voltar à página inicial">
        <span aria-hidden="true">←</span>
        <div>
          <div className="nav-logo">Bruno <span>Leite</span> Advocacia</div>
          <div className="nav-oab">OAB/RJ 226.475</div>
        </div>
      </a>
      <a href={WPP_URL} className="nav-cta" target="_blank" rel="noopener">Falar com o Advogado</a>
    </nav>
  );
}

function SectionEyebrow({ children, center }) {
  return <div className="section-eyebrow" style={center ? { justifyContent: 'center' } : null}>{children}</div>;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <SectionEyebrow>Direito Criminal &amp; Saúde</SectionEyebrow>
        <h1 className="hero-title">Proteção jurídica para o<br/><em>cultivo medicinal</em><br/>de Cannabis</h1>
        <p className="hero-sub">Habeas Corpus Preventivo com pedido de salvo-conduto para pacientes que necessitam do cultivo doméstico de cannabis como tratamento de saúde.</p>
        <div className="hero-actions">
          <a href={WPP_URL} className="btn-primary" target="_blank" rel="noopener">💬 Falar pelo WhatsApp</a>
          <a href="#como-funciona" className="btn-secondary">Entender o processo</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-emblem">
          <div className="logo-wrap">
            <img src="../../assets/logo-gold.svg" alt="Bruno Leite Advocacia" />
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-num">100%</div>
          <div className="stat-label">Foco Especializado</div>
        </div>
        <div>
          <div className="stat-num">RJ</div>
          <div className="stat-label">Atuação Nacional</div>
        </div>
      </div>
    </section>
  );
}

function Callout({ children }) {
  return <div className="callout"><p>{children}</p></div>;
}

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

function WhatIs() {
  return (
    <section className="section" id="o-que-e">
      <div className="grid2">
        <div>
          <SectionEyebrow>O remédio jurídico</SectionEyebrow>
          <h2 className="section-title">O que é o <em>Habeas Corpus</em> Preventivo?</h2>
          <p className="body-text">O Habeas Corpus Preventivo é um remédio constitucional do Direito Criminal utilizado para proteger a liberdade de locomoção <em>antes</em> de qualquer prisão. No contexto do cultivo medicinal de cannabis, serve para obter uma ordem judicial que impeça preventivamente a detenção por agentes policiais.</p>
          <p className="body-text" style={{ marginTop: '1rem' }}>Quando deferida, a ação pode resultar em um <strong style={{ color: 'var(--cream)' }}>salvo-conduto</strong> — documento que autoriza o paciente a cultivar, portar e usar a cannabis para fins terapêuticos com amparo judicial.</p>
          <Callout>"A ação atua na interseção de dois direitos fundamentais: o direito à liberdade e o direito à saúde."</Callout>
        </div>
        <div>
          <SectionEyebrow>Para quem é indicado</SectionEyebrow>
          <h2 className="section-title">Você pode <em>se beneficiar</em> desta ação?</h2>
          <CheckList items={[
            "Você possui diagnóstico médico e o tratamento com cannabis é prescrito por um médico",
            "O custo do óleo industrializado compromete o orçamento familiar",
            "Você já tem ou pretende iniciar o cultivo doméstico para fins exclusivamente terapêuticos",
            "Você quer ter segurança jurídica antes de cultivar, sem risco de criminalização",
            "Você já possui ou está em processo de obter autorização de importação da Anvisa",
          ]} />
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: '1', t: 'Consulta inicial', d: 'Avaliamos o seu caso, a documentação disponível e a viabilidade da ação sem custo inicial.' },
    { n: '2', t: 'Reunião de documentos', d: 'Organizamos o dossiê médico, técnico e econômico que fundamenta a impetração do HC.' },
    { n: '3', t: 'Impetração do HC', d: 'A ação é protocolada perante o tribunal competente, acompanhada de toda a documentação.' },
    { n: '4', t: 'Acompanhamento', d: 'Acompanhamos o julgamento e orientamos sobre o alcance e os limites da decisão.' },
  ];
  return (
    <section className="section-mid" id="como-funciona">
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <SectionEyebrow center>O processo</SectionEyebrow>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Como funciona na <em>prática</em></h2>
      </div>
      <div className="steps">
        {steps.map(s => (
          <div className="step" key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.t}</div>
            <p className="step-desc">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DocsTable() {
  const rows = [
    { n: 'I', cat: 'Documentação Médica', desc: 'Relatório médico detalhado com diagnóstico completo e CID, histórico de medicamentos alopáticos, fundamentação científica e prescrição atualizada.' },
    { n: 'II', cat: 'Autorização Administrativa', desc: 'Autorização de importação da Anvisa (RDC 660), quando disponível. Atesta o reconhecimento estatal da licitude do uso terapêutico.' },
    { n: 'III', cat: 'Documentação Técnica', desc: 'Certificado de curso de cultivo; laudo de profissional habilitado descrevendo estrutura e plano de manejo; registro fotográfico das medidas de segurança.' },
    { n: 'IV', cat: 'Prova de Necessidade Econômica', desc: 'Orçamento do produto industrializado e comprovantes de renda do núcleo familiar demonstrando que o custo justifica o autocultivo.' },
  ];
  return (
    <section className="section" id="documentos">
      <div style={{ textAlign: 'center' }}>
        <SectionEyebrow center>Documentação necessária</SectionEyebrow>
        <h2 className="section-title" style={{ textAlign: 'center' }}>O que você vai <em>precisar reunir</em></h2>
        <p className="body-text" style={{ maxWidth: '62ch', margin: '0 auto' }}>A robustez de um Habeas Corpus Preventivo está diretamente ligada à qualidade da prova pré-constituída apresentada.</p>
      </div>
      <div className="docs-table">
        <div className="docs-row docs-row-header">
          <div className="docs-col-num"></div>
          <div className="docs-col-cat">Categoria</div>
          <div className="docs-col-desc">Documentos exigidos</div>
        </div>
        {rows.map(r => (
          <div className="docs-row" key={r.n}>
            <div className="docs-col-num">{r.n}</div>
            <div className="docs-col-cat">{r.cat}</div>
            <div className="docs-col-desc">{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoCard() {
  return (
    <section className="section-mid" id="advogado">
      <div className="grid2">
        <div className="who-card">
          <div className="who-photo-wrap">
            <img className="who-photo" src="../../assets/bruno-leite.jpg" alt="Bruno Leite" />
          </div>
          <div className="who-name">Bruno Leite</div>
          <div className="who-oab">OAB/RJ 226.475</div>
          <p className="who-bio">Advogado criminalista com atuação especializada em Direito da Saúde e tutela do uso medicinal de cannabis. Estuda e acompanha a evolução jurisprudencial dos tribunais superiores sobre o tema, com foco no equilíbrio entre o direito à liberdade e o direito à saúde.</p>
          <div className="tags">
            <span className="tag-chip">Direito Criminal</span>
            <span className="tag-chip">Cannabis Medicinal</span>
            <span className="tag-chip">Habeas Corpus</span>
          </div>
        </div>
        <div>
          <SectionEyebrow>Sobre o advogado</SectionEyebrow>
          <h2 className="section-title">Atuação <em>especializada</em></h2>
          <p className="body-text">A atuação combina conhecimento técnico em Direito Criminal com sensibilidade ao contexto humano e médico de cada caso. Cada Habeas Corpus é instruído de forma personalizada, considerando o histórico clínico, o perfil familiar e as circunstâncias econômicas do paciente.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'É preciso já ter receita médica para impetrar o HC?', a: 'Sim. A prescrição médica atualizada é o documento central da instrução. Sem ela, a ação tem chances mínimas de êxito.' },
    { q: 'Quanto tempo demora o processo?', a: 'Em média, de 30 a 90 dias, dependendo do tribunal competente e do volume de processos em pauta.' },
    { q: 'Posso cultivar para outros pacientes da minha família?', a: 'O HC pode ser estendido a dependentes diretos sob a guarda do paciente. Cada caso é analisado individualmente.' },
    { q: 'O que acontece se a decisão for negada?', a: 'Cabe recurso. Em alguns casos, ajustes na documentação ou novos laudos permitem renovar o pedido com maior chance de êxito.' },
  ];
  return (
    <section className="faq-section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionEyebrow center>Perguntas frequentes</SectionEyebrow>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Dúvidas <em>comuns</em></h2>
      </div>
      {items.map((it, i) => (
        <div key={i} className={"faq-item" + (open === i ? ' open' : '')}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{it.q}</span>
            <span className="faq-arrow">+</span>
          </button>
          <div className="faq-a"><p>{it.a}</p></div>
        </div>
      ))}
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Pronto para conversar sobre o seu caso?</h2>
      <p className="cta-sub">A consulta inicial é uma conversa direta para entender se o Habeas Corpus Preventivo é o caminho mais adequado para você.</p>
      <div className="cta-buttons">
        <a href={WPP_URL} className="btn-primary" target="_blank" rel="noopener">💬 Iniciar conversa no WhatsApp</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left"><strong>Bruno Leite</strong> Advocacia &amp; Consultoria</div>
      <div className="footer-right">OAB/RJ 226.475 · brunoleite.adv.br<br/>Conteúdo informativo. Não constitui oferta de serviços.</div>
    </footer>
  );
}

function WhatsAppFloat() {
  return <a href={WPP_URL} className="wpp-float" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>;
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider"></div>
      <WhatIs />
      <div className="divider"></div>
      <Steps />
      <div className="divider"></div>
      <DocsTable />
      <div className="divider"></div>
      <WhoCard />
      <div className="divider"></div>
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
