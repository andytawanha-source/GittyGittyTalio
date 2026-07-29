// ---------------------------------------------------------------------------
// Content for the dedicated "Bogholder til håndværkere" landing page.
// Kept separate from data/services.ts (which powers the generic services
// grid, nav dropdown and /services/:slug template) so this page can carry
// richer, trade-specific copy without affecting the rest of the site.
// ---------------------------------------------------------------------------

export const craftsmenHero = {
  eyebrow: 'Bogføring og regnskab for håndværkere',
  heading: 'Få styr på tallene – uden at bruge aftenerne på bogføring',
  sub: 'Talio hjælper murere, tømrere, elektrikere, malere og andre håndværkerfirmaer med bilag, moms, løn og regnskab. Du får bedre overblik over økonomien og mere tid til kunder, medarbejdere og næste opgave.',
  ctaPrimary: 'Få et tilbud på bogføringen',
  ctaSecondary: 'Book 15 min. afklaring',
  microcopy: 'Uforpligtende. Fortæl kort om virksomheden, så finder vi det rigtige næste skridt.',
  trustLine: ['Bogføring', 'Bilag', 'Moms', 'Løn', 'Regnskab'],
  image:
    'https://cdn.sanity.io/images/mofuirr6/production/147cdc2f924f3a3271e04330c15c6b70d9a797db-2752x1536.png?w=1600&q=85&auto=format',
  imageAlt: 'Talio-rådgiver gennemgår bogføring og regnskab for et håndværkerfirma',
}

export const craftsmenProblem = {
  heading: 'Bogføringen skal ikke vente på endnu en ledig aften',
  intro:
    'En håndværkervirksomhed producerer hurtigt mange økonomiske bevægelser: materialer, timer, medarbejderudlæg, leverandørfakturaer, kundeindbetalinger og bilag fra forskellige steder.',
  subIntro: 'Når bogføringen kommer bagefter, bliver det sværere at se:',
  points: [
    'Hvad virksomheden reelt tjener',
    'Hvilke kunder der mangler at betale',
    'Om der er luft i likviditeten',
    'Hvad der skal sættes til side',
    'Om økonomien bevæger sig i den rigtige retning',
  ],
  bridge: 'Talio kan samle arbejdet, skabe faste arbejdsgange og give dig tal, du faktisk kan bruge.',
}

export interface CraftsmenOffering {
  title: string
  body: string
  serviceSlug?: string
  linkLabel?: string
}

export const craftsmenOfferings = {
  heading: 'Få den økonomiske administration væk fra værktøjsbordet',
  items: [
    {
      title: 'Løbende bogføring',
      body: 'Vi bogfører løbende, så tallene altid er opdaterede, og du kan se, hvor virksomheden står.',
      serviceSlug: 'bogfoering',
      linkLabel: 'Læs mere om løbende bogføring',
    },
    {
      title: 'Bilag og afstemninger',
      body: 'Bilag fra bilen, mailen eller telefonen bliver samlet ét sted og afstemt korrekt.',
      serviceSlug: 'bogfoering',
      linkLabel: 'Sådan håndterer vi bilag',
    },
    {
      title: 'Moms og indberetninger',
      body: 'Vi holder styr på momsfrister, så indberetningen sker til tiden, hver gang.',
      serviceSlug: 'bogfoering',
    },
    {
      title: 'Lønadministration',
      body: 'Løn til medarbejdere bliver beregnet og udbetalt korrekt, inklusiv indberetning og feriepenge.',
      serviceSlug: 'lonadministration',
      linkLabel: 'Hjælp til lønadministration',
    },
    {
      title: 'Fakturaer, debitorer og kreditorer',
      body: 'Vi hjælper med at holde styr på, hvem der skylder dig penge, og hvad der selv skal betales.',
      serviceSlug: 'bogfoering',
    },
    {
      title: 'Regnskab og revisorarbejde',
      body: 'Når året skal gøres op, står vi klar med årsregnskab og den rådgivning, der hører til.',
      serviceSlug: 'regnskab',
      linkLabel: 'Hjælp til årsregnskabet',
    },
  ] as CraftsmenOffering[],
}

export interface CraftsmenTrade {
  slug: string
  title: string
  body: string
}

export const craftsmenTrades = {
  heading: 'Bogføring, der passer til måden håndværkere arbejder på',
  items: [
    {
      slug: 'tommer-snedker',
      title: 'Tømrere og snedkere',
      body: 'Få struktur på materialekøb, leverandørbilag, medarbejdertimer og faktureringen af de enkelte opgaver.',
    },
    {
      slug: 'murer',
      title: 'Murere',
      body: 'Bevar overblikket, når materialer, medarbejdere og flere samtidige projekter skal hænge sammen økonomisk.',
    },
    {
      slug: 'elektriker',
      title: 'Elektrikere',
      body: 'Saml økonomien på tværs af serviceopgaver, større installationer, kørsel og løbende fakturering.',
    },
    {
      slug: 'maler',
      title: 'Malere',
      body: 'Få bedre styr på timer, materialer og økonomien i både mindre opgaver og større entrepriser.',
    },
    {
      slug: 'vvs',
      title: 'VVS\'ere',
      body: 'Skab faste arbejdsgange omkring servicebesøg, materialer, medarbejdere og fakturering.',
    },
    {
      slug: 'entreprenoer',
      title: 'Entreprenører og andre håndværksfag',
      body: 'Uanset om I styrer flere fag på samme byggeplads eller arbejder som underentreprenør, får I én samlet indgang til bogføring, moms og løn.',
    },
  ] as CraftsmenTrade[],
}

export const craftsmenValue = {
  heading: 'Du skal kunne se, hvordan forretningen går – før året er slut',
  points: [
    'Bedre overblik over indtjening',
    'Tidligere opdagelse af økonomiske problemer',
    'Bedre grundlag for ansættelser og investeringer',
    'Mere ro omkring frister og dokumentation',
    'Mindre administrativt arbejde efter fyraften',
    'Bedre dialog med rådgiver og revisor',
  ],
  before: {
    heading: 'Før',
    items: ['Bilag flere steder', 'Bogføring på bagkant', 'Uklart økonomisk overblik', 'Spørgsmål samler sig op'],
  },
  after: {
    heading: 'Med Talio',
    items: ['En aftalt arbejdsgang', 'Løbende bogføring', 'Klare tal og opfølgning', 'Et tydeligt sted at gå hen med spørgsmål'],
  },
}

export const craftsmenProcess = {
  heading: 'Fra bunke af bilag til en fast arbejdsgang',
  steps: [
    {
      number: '01',
      title: 'Fortæl om virksomheden',
      body: 'Branche, størrelse, nuværende løsning og hvilke opgaver der skal overtages.',
    },
    {
      number: '02',
      title: 'Få et konkret forslag',
      body: 'Talio afdækker omfanget og foreslår en løsning, der passer til virksomheden.',
    },
    {
      number: '03',
      title: 'Talio hjælper med overgangen',
      body: 'Aftal materialer, systemer, adgang og den fremtidige arbejdsgang.',
    },
  ],
  cta: 'Få et forslag til din løsning',
}

export const craftsmenExpert = {
  heading: 'Tal med en rådgiver – ikke en anonym indbakke',
  body: 'God bogføring handler ikke kun om at placere bilag korrekt. Du skal også kunne få et forståeligt svar, når tallene giver anledning til spørgsmål.',
  memberSlugs: ['michellelauridsen', 'alihassan'],
}

export const craftsmenPricing = {
  heading: 'Hvad koster en bogholder til et håndværkerfirma?',
  intro:
    'Prisen afhænger typisk af antallet af bilag, medarbejdere, systemer og hvilke opgaver Talio skal overtage. Derfor starter et seriøst tilbud med nogle få oplysninger om virksomheden.',
  factors: [
    'Antal bilag eller transaktioner',
    'Antal medarbejdere',
    'Lønadministration',
    'Momsfrekvens',
    'Behov for rapportering',
    'Oprydning eller overgang fra tidligere løsning',
    'Regnskab og yderligere rådgivning',
  ],
  cta: 'Få et konkret tilbud',
}

export interface CraftsmenFaqItem {
  question: string
  answer: string
}

export const craftsmenFaq = {
  heading: 'Ofte stillede spørgsmål',
  items: [
    {
      question: 'Hvad kan Talio hjælpe et håndværkerfirma med?',
      answer:
        'Vi hjælper med løbende bogføring, bilag og afstemninger, moms, lønadministration, fakturaer og regnskab. Du vælger selv, om vi skal overtage det hele, eller kun de opgaver du helst vil slippe for.',
    },
    {
      question: 'Hvad koster bogføring for håndværkere?',
      answer:
        'Det afhænger af antallet af bilag, medarbejdere og hvilke opgaver vi skal løse for dig. Fortæl kort om virksomheden, så laver vi et konkret tilbud, du kan tage stilling til.',
    },
    {
      question: 'Kan Talio overtage fra min nuværende bogholder?',
      answer:
        'Ja. Vi lægger ud med at gennemgå din nuværende løsning og aftaler, hvordan overgangen skal foregå, så bogføringen fortsætter uden huller.',
    },
    {
      question: 'Kan I hjælpe med både bogføring, løn og regnskab?',
      answer:
        'Ja, vi dækker løbende bogføring, momsindberetning, lønadministration og årsregnskab. Du kan starte med én opgave og udvide, efterhånden som behovet vokser.',
    },
    {
      question: 'Hvilke systemer kan Talio arbejde med?',
      answer:
        'Vi arbejder med udbredte bogføringssystemer som e-conomic, Dinero, Billy og Uniconta. Du behøver ikke skifte system for at samarbejde med os.',
    },
    {
      question: 'Er løsningen også relevant for enkeltmandsvirksomheder?',
      answer:
        'Ja. Vi hjælper både enkeltmandsvirksomheder og håndværkerfirmaer med flere medarbejdere — omfanget af opgaver tilpasses virksomhedens størrelse.',
    },
    {
      question: 'Hvordan sender jeg bilag til jer?',
      answer:
        'Det aftaler vi ud fra, hvordan du arbejder i dag, og hvilket system der giver mening for din virksomhed. Formålet er, at det skal være enkelt for dig i hverdagen.',
    },
    {
      question: 'Kan I hjælpe, hvis bogføringen er kommet bagud?',
      answer:
        'Ja, det er en almindelig opgave for os. Vi gennemgår, hvor bogføringen står, og lægger en plan for at få den ajourført, inden vi går over til en fast, løbende arbejdsgang.',
    },
    {
      question: 'Hvornår har et håndværkerfirma brug for en revisor?',
      answer:
        'Behovet opstår typisk, når årsregnskabet skal udarbejdes og indberettes, eller når virksomheden vokser og har brug for mere struktur og rådgivning omkring økonomien.',
    },
    {
      question: 'Hvordan kommer vi i gang?',
      answer:
        'Du fortæller kort om din virksomhed og de opgaver, du gerne vil have hjælp til. Herefter afdækker vi omfanget og foreslår en løsning, før vi aftaler overgangen sammen.',
    },
  ] as CraftsmenFaqItem[],
}

export const craftsmenFinalCta = {
  heading: 'Brug tiden på næste opgave – ikke næste bunke bilag',
  body: 'Fortæl kort om din virksomhed og de opgaver, du gerne vil have hjælp til. Så kan Talio vurdere behovet og give dig et konkret næste skridt.',
  ctaPrimary: 'Få et tilbud på bogføringen',
  ctaSecondary: 'Ring til Talio',
  microcopy: 'Uforpligtende forespørgsel.',
}

export const craftsmenFormCopy = {
  step1Heading: 'Om virksomheden',
  step2Heading: 'Kontakt',
  tradeLabel: 'Hvilket fag arbejder du med?',
  tradeOptions: [
    'Tømrer/snedker',
    'Murer',
    'Elektriker',
    'Maler',
    'VVS',
    'Entreprenør',
    'Andet håndværksfag',
  ],
  employeesLabel: 'Hvor mange ansatte har virksomheden?',
  employeesOptions: ['Kun mig selv', '2-5', '6-15', '16+'],
  needLabel: 'Hvad vil du gerne have hjælp til?',
  needOptions: [
    'Løbende bogføring',
    'Moms og bilag',
    'Løn',
    'Regnskab',
    'Oprydning eller skifte af bogholder',
    'Det hele',
    'Jeg er ikke sikker endnu',
  ],
  nameLabel: 'Navn',
  companyLabel: 'Virksomhedsnavn',
  phoneLabel: 'Telefon',
  emailLabel: 'E-mail',
  noteLabel: 'Hvad skal vi vide?',
  submitLabel: 'Få mit tilbud',
  submittingLabel: 'Sender...',
  microcopy: 'Vi bruger oplysningerne til at kontakte dig om din forespørgsel.',
  successHeading: 'Tak for din henvendelse',
  successBody:
    'Din mailapp åbner med forespørgslen udfyldt. Send den, så vender vi tilbage inden for 24 timer.',
  errorHeading: 'Noget gik galt',
  errorBody: 'Vi kunne ikke åbne din mailapp. Skriv i stedet direkte til kontakt@talio.dk, så svarer vi hurtigst muligt.',
  nextLabel: 'Næste',
  backLabel: 'Tilbage',
}
