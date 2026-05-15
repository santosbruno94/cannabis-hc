# Bruno Leite Advocacia e Consultoria

## Contexto do Projeto

Repositório do escritório **Bruno Leite Advocacia e Consultoria** (brunoleite.adv.br).
Prática autônoma como complementação de renda, operando sob posicionamento de **Direito Público**.
Advogado titular: Bruno Leite e Santos Peixoto — OAB/RJ 226.475, PUC-Rio, especialização em Direito Penal.
Localização: Macaé-RJ. Contato: contato@brunoleite.adv.br | 22 920084987.

## Nichos Ativos e Planejados

| # | Nicho | Status | Observações |
|---|-------|--------|-------------|
| 1 | HC Preventivo — cannabis medicinal | Ativo | Landing page live, proposta de honorários pronta. Piso R$ 8.000 |
| 2 | Execução Penal | Planejado | Nicho criminal — próximo a ser estruturado |
| 3 | Previdenciário (simples) | Planejado | Apenas questões simples, sem cálculos complexos |

Nichos descartados: PAD, direito bancário, improbidade administrativa.

## Identidade Visual

- **Cores**: navy `#0f1c2e`, gold `#c9a84c`, cream `#f5f0e8`
- **Fontes**: CrimsonPro (display/serifada), InstrumentSans (corpo)
- **Logo**: balança da justiça em SVG
- **Tom**: sóbrio, técnico, acessível. Sem jargão desnecessário.

## Arquitetura Site × Landing Page

Dois artefatos digitais com propósitos distintos e complementares:

| Artefato | Propósito | Audiência | Tom |
|----------|-----------|-----------|-----|
| **Site institucional** (`brunoleite.adv.br`) | Âncora de credibilidade — quem pesquisa o nome no Google chega aqui. Apresenta o escritório, o advogado, as áreas de atuação. | Pesquisa orgânica, indicações, due diligence | Institucional, sem urgência |
| **Landing page de nicho** (`/lp/cannabis`, `/lp/execucao-penal`, etc.) | Destino do tráfego pago — quem clica no anúncio vai direto à página de conversão, sem navegação do site, sem distrações. | Tráfego pago (Google/Meta Ads) | Direto, orientado à ação, CTA claro |

**Regras de ouro:**
- LP não tem menu de navegação — o único caminho é o CTA (WhatsApp / formulário).
- Site não tem promessas de resultado — conteúdo informativo e técnico.
- Ambos podem coexistir no mesmo repositório (pastas `/site` e `/lp/<nicho>`) ou em subdomínios (`lp.brunoleite.adv.br`).
- Agentes especializados: **marketing** e **landing-page** atuam nas LPs; **conteudo-site** atua no site institucional.

## Infraestrutura

- **Site**: GitHub Pages (repo `santosbruno94/cannabis-hc`), domínio via Registro.br
- **Estrutura de pastas**: `/site` (institucional) · `/lp/<nicho>` (landing pages de conversão)
- **Email profissional**: contato@brunoleite.adv.br
- **Social**: Instagram @brunoleiteadvocacia, WhatsApp Business
- **Google Business Profile**: pendente reativação (verificação por vídeo)

## Princípios de Trabalho

1. **Nenhum arquivo é criado sem ordem expressa do titular.** Sempre apresentar o conteúdo para aprovação antes de salvar.
2. **Desenvolvimento sequencial**: um nicho por vez — site, documentos, posicionamento — antes de ativar o próximo.
3. **Posicionamento público**: Direito Público (guarda-chuva). Materiais públicos não destacam nicho único.
4. **Compliance OAB**: toda comunicação respeita o Código de Ética da OAB. Sem promessas de resultado, sem captação indevida, sem mercantilização.
5. **Documentos jurídicos**: usar linguagem técnica precisa, referências legislativas e jurisprudenciais atualizadas.

## Estrutura de Documentos por Nicho

Cada nicho deve ter (quando estruturado):
- Proposta de Prestação de Serviços (modelo)
- Contrato de Prestação de Serviços (modelo)
- Checklist de documentação do cliente
- Landing page (HTML/JSX)
- Conteúdo para tráfego pago (Google Ads / Meta Ads)

## Referências Legislativas por Nicho

### Nicho 1 — HC Cannabis
- CF/88, art. 5º LXVIII (habeas corpus) e art. 196 (direito à saúde)
- Lei 11.343/06 (Lei de Drogas)
- RDC 660/2022 Anvisa
- Jurisprudência STF e STJ sobre autocultivo medicinal

### Nicho 2 — Execução Penal
- Lei 7.210/84 (LEP)
- CF/88, art. 5º (direitos fundamentais do preso)
- Súmulas do STF e STJ sobre execução penal
- Resolução CNJ 474/2022 (monitoração eletrônica)

### Nicho 3 — Previdenciário (simples)
- Lei 8.213/91 (Planos de Benefícios da Previdência)
- Decreto 3.048/99 (Regulamento)
- IN INSS/PRES vigentes

## Comandos Úteis

```bash
# Deploy do site (GitHub Pages)
cd cannabis-hc && git add . && git commit -m "update" && git push origin main

# Servidor local para testar landing pages
npx serve .
```

## O Que NÃO Fazer

- Não criar arquivos sem aprovação expressa do titular
- Não usar linguagem promocional que viole o Código de Ética da OAB
- Não prometer resultados em materiais de comunicação
- Não incluir valores de honorários em materiais públicos (landing pages, redes sociais)
- Não usar posicionamento de nicho específico em materiais institucionais genéricos
- Não gerar peças processuais (petições, HCs) sem revisão minuciosa do titular
