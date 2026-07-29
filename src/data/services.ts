export interface ServiceStat {
  title: string
  body?: string
}

export interface ServiceFeature {
  title: string
  body: string
}

export interface ServiceProcessStep {
  number: string
  title: string
  body: string
}

export interface ServiceClosing {
  heading: string
  body: string
}

export interface Service {
  slug: string
  title: string
  iconName: string
  shortDescription: string
  pageTitle: string
  eyebrow: string
  heading: string
  intro: string
  stats?: ServiceStat[]
  features: ServiceFeature[]
  process: ServiceProcessStep[]
  closing?: ServiceClosing
  ctaPrimaryLabel?: string
  ctaSecondaryLabel?: string
  image?: string
}

export const services: Service[] = [
  {
    slug: 'bogfoering',
    title: 'Bogføring',
    iconName: 'wallet',
    shortDescription:
      'Struktureret og præcis bogføring, der giver overblik, kvalitet og et stærkt økonomisk fundament for din virksomhed.',
    pageTitle: 'Bogføring for virksomheder',
    eyebrow: 'BOGFØRING',
    heading: 'Struktureret bogføring der giver overblik',
    intro:
      'Bogføring er ikke blot et lovkrav. Det er fundamentet for indsigt, stærke beslutninger og en sundere økonomi. Hos Talio sikrer vi præcis og opdateret bogføring, så dine tal altid er brugbare og klar til rapportering.',
    stats: [{ title: '100% Digital Integration' }, { title: '0,- Skjulte Gebyrer' }],
    features: [
      {
        title: 'Præcis bogføring',
        body: 'Vi sikrer, at dine bilag, posteringer og regnskabstal bliver håndteret korrekt og struktureret.',
      },
      {
        title: 'Løbende overblik',
        body: 'Du får bedre indsigt i virksomhedens økonomi, så du kan følge udviklingen og træffe beslutninger på et klart grundlag.',
      },
      {
        title: 'Klar til rapportering',
        body: 'Vi holder dine tal opdaterede og anvendelige, så rapportering, moms og årsregnskab bliver lettere at håndtere.',
      },
      {
        title: 'Mere tid til forretningen',
        body: 'Vi tager ansvar for bogføringen, så du kan fokusere på drift, kunder og vækst.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Afklaring og opsætning',
        body: 'Vi gennemgår dine behov, nuværende arbejdsgange, så bogføringen bliver sat rigtigt op fra starten.',
      },
      {
        number: '02',
        title: 'Struktur og løbende bogføring',
        body: 'Vi håndterer bilag, posteringer og afstemninger løbende, så dine tal altid er opdaterede.',
      },
      {
        number: '03',
        title: 'Rapportering og overblik',
        body: 'Du får et klart økonomisk overblik, der gør det lettere at følge virksomhedens udvikling og træffe beslutninger.',
      },
      {
        number: '04',
        title: 'Opfølgning og optimering',
        body: 'Vi følger løbende op og hjælper med at forbedre processer, struktur og økonomistyring over tid.',
      },
    ],
    closing: {
      heading: 'Klar til at få styr på bogføringen?',
      body: 'Lad os tage en uforpligtende samtale om, hvordan vi kan skabe struktur, overblik og ro i din virksomheds bogføring.',
    },
  },
  {
    slug: 'regnskab',
    title: 'Regnskab',
    iconName: 'file-text',
    shortDescription:
      'Talio skaber klarhed i jeres økonomi gennem stærk faglighed og strategisk rådgivning. Vi sikrer korrekt regnskab, struktur i processerne og det overblik, der danner fundamentet for vækst.',
    pageTitle: 'Regnskab og årsregnskab for virksomheder',
    eyebrow: 'OVERBLIK I DIT REGNSKAB',
    heading: 'Vi hjælper dig med dit regnskab',
    intro:
      'Et regnskab er mere end en årlig pligt. Det er grundlaget for økonomisk overblik, bedre beslutninger og en sundere virksomhed. Hos Talio hjælper vi med årsregnskab, bogføring, indberetning og rådgivning, så dit regnskab bliver korrekt, overskueligt og afleveret til tiden.',
    stats: [
      { title: 'Rettidigt', body: 'Indberetning til Erhvervsstyrelsen' },
      { title: 'Overblik', body: 'Klar indsigt i virksomhedens økonomi' },
      { title: 'Tryghed', body: 'Regnskab udarbejdet efter gældende krav' },
    ],
    features: [
      {
        title: 'Korrekt årsregnskab',
        body: 'Vi hjælper med at udarbejde årsregnskab, så resultatopgørelse, balance og noter bliver gennemgået og opstillet korrekt.',
      },
      {
        title: 'Styr på fristerne',
        body: 'Vi sikrer, at dit regnskab bliver klar og indberettet rettidigt, så du undgår unødige bekymringer og forsinkelser.',
      },
      {
        title: 'Bedre økonomisk overblik og indberetning',
        body: 'Vi hjælper med skatteberegning, selvangivelse og indberetning, så tallene hænger sammen hele vejen.',
      },
      {
        title: 'Klargøring til revision',
        body: 'Hvis din virksomhed er revisionspligtig, hjælper vi med at samle og klargøre materialet, så processen bliver mere effektiv.',
      },
      {
        title: 'Personlig rådgivning',
        body: 'Vi tilpasser hjælpen til din virksomhed, uanset om du har brug for løbende bogføring, årsregnskab eller samlet regnskabsassistance.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Indledende gennemgang',
        body: 'Vi starter med at forstå din virksomhed, dine behov og hvilke regnskabsmæssige krav der gælder for dig.',
      },
      {
        number: '02',
        title: 'Indsamling af materiale',
        body: 'Vi gennemgår bilag, bogføring og relevant dokumentation, så grundlaget for regnskabet er korrekt.',
      },
      {
        number: '03',
        title: 'Udarbejdelse af regnskab',
        body: 'Vi opstiller årsregnskabet med fokus på kvalitet, præcision og et klart økonomisk overblik.',
      },
      {
        number: '04',
        title: 'Indberetning og frister',
        body: 'Når regnskabet er færdigt, hjælper vi med rettidig indberetning til de rette myndigheder.',
      },
    ],
    image:
      'https://cdn.sanity.io/images/mofuirr6/production/d5ae2b4441fe887f43a8a98a1c705b0eb3df7de5-1448x1086.png?w=1200&q=85&auto=format',
  },
  {
    slug: 'raadgivning',
    title: 'Rådgivning',
    iconName: 'trending-up',
    shortDescription:
      'Hos Talio leverer vi skræddersyet rådgivning, der styrker jeres økonomiske position. Vi arbejder proaktivt med indsigt og sparring for at optimere jeres forretning og skabe et solidt fundament for vækst. Vi er din proactive sparringspartner.',
    pageTitle: 'Økonomisk rådgivning for virksomheder',
    eyebrow: 'STRATEGISK ØKONOMISK SPARRING',
    heading: 'Vi hjælper dig med rådgivning',
    intro:
      'Stærk rådgivning skaber retning. Hos Talio kombinerer vi økonomisk indsigt, forretningsforståelse og tæt sparring, så du får bedre overblik, skarpere beslutninger og et solidt fundament for vækst.',
    stats: [
      { title: 'Overblik', body: 'Klar indsigt i økonomien' },
      { title: 'Retning', body: 'Sparring der understøtter vækst' },
      { title: 'Handling', body: 'Anbefalinger der kan bruges i praksis' },
    ],
    features: [
      {
        title: 'Strategisk sparring',
        body: 'Vi fungerer som din økonomiske sparringspartner og bidrager aktivt til beslutninger, så virksomheden får en tydeligere retning.',
      },
      {
        title: 'Datadrevet beslutningsgrundlag',
        body: 'Vi omsætter tal og rapporter til konkrete indsigter, så du kan træffe beslutninger på et stærkere grundlag.',
      },
      {
        title: 'Bedre økonomisk overblik',
        body: 'Vi hjælper dig med at forstå virksomhedens økonomi, identificere udfordringer og muligheder, så virksomheden kan arbejde mere effektivt.',
      },
      {
        title: 'Proaktiv rådgivning',
        body: 'Vi følger løbende op og hjælper dig med at reagere i tide, før små udfordringer udvikler sig til større problemer.',
      },
      {
        title: 'Konkrete anbefalinger',
        body: 'Du får ikke bare standardrapporter. Du får klare anbefalinger, der kan omsættes til handling i din virksomhed.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Forretningsforståelse og analyse',
        body: 'Vi sætter os ind i din virksomhed, dine mål og dine udfordringer. Herefter analyserer vi økonomien for at identificere muligheder, risici og forbedringsområder.',
      },
      {
        number: '02',
        title: 'Indsigt og strategisk retning',
        body: 'Vi omsætter data til brugbar indsigt og hjælper med at definere en klar økonomisk retning, der understøtter virksomhedens udvikling.',
      },
      {
        number: '03',
        title: 'Sparring og konkrete handlinger',
        body: 'Vi arbejder tæt sammen med dig og bidrager aktivt til beslutninger. Rådgivningen bliver koblet til konkrete handlinger i forretningen.',
      },
      {
        number: '04',
        title: 'Løbende opfølgning og optimering',
        body: 'Vi følger løbende op for at sikre fortsat fremdrift og forbedring.',
      },
    ],
  },
  {
    slug: 'lonadministration',
    title: 'Lønadministration',
    iconName: 'banknote',
    shortDescription:
      'Talio hjælper din virksomhed med sikker og effektiv lønadministration. Vi sikrer korrekt løn, rettidige indberetninger og en enkel proces for både ledelse og medarbejdere.',
    pageTitle: 'Lønadministration for virksomheder',
    eyebrow: 'SIKKER OG KORREKT LØNHÅNDTERING',
    heading: 'Vi hjælper dig med din lønadministration',
    intro:
      'Løn kræver præcision, faste rutiner og styr på reglerne. Talio hjælper med hele lønprocessen, fra lønberegning og udbetaling til indberetning, pension, feriepenge og rapportering. Du får en stabil lønløsning, der sparer tid og minimerer risikoen for fejl.',
    stats: [
      { title: 'Rettidigt', body: 'Korrekt løn til tiden' },
      { title: 'Sikkert', body: 'Styr på regler, skat og pension' },
      { title: 'Overblik', body: 'Klare lønrapporter efter hver kørsel' },
    ],
    features: [
      {
        title: 'Korrekt løn hver gang',
        body: 'Vi beregner løn ud fra arbejdstid, fravær, tillæg, pension og individuelle aftaler, så medarbejderne får den rigtige løn til tiden.',
      },
      {
        title: 'Rettidig indberetning',
        body: 'Vi håndterer indberetninger til relevante myndigheder og pensionsselskaber, så du undgår fejl, forsinkelser og unødvendigt administrativt arbejde.',
      },
      {
        title: 'Mindre administration',
        body: 'Du slipper for tunge lønopgaver og kan bruge tiden på drift, kunder og udvikling.',
      },
      {
        title: 'Ferie, sygdom og barsel',
        body: 'Vi hjælper med feriepenge, sygedage, barsel og refusioner, så de løbende lønforhold bliver håndteret korrekt.',
      },
      {
        title: 'Rådgivning om regler og aftaler',
        body: 'Vi hjælper dig med at forstå og håndtere lønrelaterede regler, overenskomster, tillæg og medarbejderaftaler.',
      },
      {
        title: 'Integration med dine systemer',
        body: 'Vi arbejder med gængse løn-, økonomi- og HR-systemer, så lønadministrationen passer ind i virksomhedens eksisterende arbejdsgange.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Indsamling af lønmateriale',
        body: 'Vi indsamler de nødvendige oplysninger om medarbejdere, arbejdstimer, fravær, tillæg, bonusser og pensionsforhold.',
      },
      {
        number: '02',
        title: 'Gennemgang og kontrol',
        body: 'Materialet bliver gennemgået, så vi sikrer, at grundlaget for lønkørslen er korrekt og fuldstændigt.',
      },
      {
        number: '03',
        title: 'Lønberegning',
        body: 'Vi beregner lønnen efter gældende regler, aftaler og virksomhedens interne forhold, så lønnen bliver korrekt.',
      },
      {
        number: '04',
        title: 'Udbetaling og indberetning',
        body: 'Vi sørger for, at lønnen bliver udbetalt rettidigt, og at de nødvendige indberetninger bliver håndteret korrekt.',
      },
    ],
  },
  {
    slug: 'skattesager',
    title: 'Skattesager',
    iconName: 'shield-check',
    shortDescription:
      'Vi hjælper dig sikkert gennem skattesager, kontrolsager og dialog med Skattestyrelsen med klar struktur og korrekt dokumentation.',
    pageTitle: 'Skattesager og dialog med Skattestyrelsen',
    eyebrow: 'SKATTESAGER',
    heading: 'Få styr på din skattesag uden unødig kompleksitet',
    intro:
      'Skattesager kræver overblik, struktur og den rette tilgang fra start. Hos Talio hjælper vi med at håndtere dialogen, dokumentationen og processen, så du står stærkere i sagen.',
    stats: [
      { title: 'Myndighedsdialog', body: 'Vi håndterer kontakten med Skattestyrelsen professionelt og rettidigt.' },
      { title: 'Dokumentation', body: 'Vi hjælper med at samle, gennemgå og strukturere det nødvendige materiale.' },
      { title: 'Rådgivning', body: 'Du får konkret sparring tilpasset din situation og din virksomhed.' },
    ],
    features: [
      {
        title: 'Dialog med myndigheder',
        body: 'Vi varetager dialogen med Skattestyrelsen og sikrer, at din sag bliver håndteret korrekt, professionelt og rettidigt.',
      },
      {
        title: 'Gennemgang af din sag',
        body: 'Vi analyserer sagen grundigt for at identificere relevante forhold og dokumentation.',
      },
      {
        title: 'Forebyggelse og struktur',
        body: 'Vi arbejder proaktivt med dine skatteforhold, så du kan undgå fremtidige problemer og skabe bedre økonomisk struktur.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Afklaring af situationen',
        body: 'Vi starter med at forstå sagen, gennemgå materialet og afklare, hvad der kræver handling.',
      },
      {
        number: '02',
        title: 'Analyse og dokumentation',
        body: 'Vi identificerer relevante forhold, samler dokumentation og vurderer muligheder, risici og næste skridt.',
      },
      {
        number: '03',
        title: 'Dialog og håndtering',
        body: 'Vi hjælper med svar, indsendelser og dialog med myndighederne, så processen bliver håndteret korrekt.',
      },
      {
        number: '04',
        title: 'Opfølgning og forebyggelse',
        body: 'Når sagen er håndteret, hjælper vi med struktur og rutiner, der mindsker risikoen for fremtidige problemer.',
      },
    ],
    closing: {
      heading: 'Har du brug for hjælp til en skattesag?',
      body: 'Uanset om du står midt i en konkret sag eller ønsker at forebygge fremtidige problemstillinger, hjælper Talio dig med overblik, dokumentation og en klar plan for næste skridt.',
    },
  },
  {
    slug: 'bogholder-til-haandvaerkere',
    title: 'Bogholder til håndværkere',
    iconName: 'briefcase',
    shortDescription:
      'Bogholder til håndværkere: bogføring, bilag, moms, løn og regnskab til tømrere, murere, elektrikere, malere og VVS\'ere.',
    pageTitle: 'Bogholder til håndværkere',
    eyebrow: 'BOGHOLDER TIL HÅNDVÆRKERE',
    heading: 'Bogholder til håndværkere',
    intro:
      'Få styr på bilag, moms, løn og regnskab — uden at bruge aftener og weekender på papirarbejde.',
    ctaPrimaryLabel: 'Book en gratis samtale',
    ctaSecondaryLabel: 'Se hvordan vi hjælper',
    stats: [
      {
        title: 'Alle håndværksfag',
        body: 'For tømrere, elektrikere, VVS\'ere, malere, murere og andre mindre håndværkerfirmaer.',
      },
    ],
    features: [
      {
        title: 'Bilag i uorden',
        body: 'Bilag ligger i bilen, mailen eller som billeder på telefonen — vi samler det og holder styr på det for dig.',
      },
      {
        title: 'Moms der udskyder sig selv',
        body: 'Moms bliver tit noget, man udskyder. Vi sørger for, at den bliver indberettet til tiden, hver gang.',
      },
      {
        title: 'Løn til medarbejdere',
        body: 'Vi hjælper med lønadministration, så medarbejdernes løn bliver håndteret korrekt.',
      },
      {
        title: 'Regnskab & oprydning',
        body: 'Vi hjælper med årsregnskab og oprydning, hvis regnskabet er kommet bagud.',
      },
      {
        title: 'Vi arbejder med dit bogføringsprogram',
        body: 'Du behøver ikke skifte system for at samarbejde med os. Vi arbejder med e-conomic, Dinero, Billy, Uniconta og andre systemer — du fortsætter bare som du plejer.',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Book en gratis samtale',
        body: 'Vi taler kort om din virksomhed og hvad du har brug for hjælp til.',
      },
      {
        number: '02',
        title: 'Vi gennemgår din situation',
        body: 'Vi ser på bilag, moms, løn og regnskab, så vi ved, hvor der skal sættes ind.',
      },
      {
        number: '03',
        title: 'Du får en konkret plan',
        body: 'Du får en enkel løsning, der passer til dit håndværkerfirma.',
      },
    ],
    closing: {
      heading: 'En fast samarbejdspartner — ikke bare tal på et ark',
      body: 'Du får hjælp fra en samarbejdspartner, der forstår, at regnskab skal være enkelt i en travl hverdag. Vi forklarer tingene klart, holder styr på de vigtige frister, og sikrer, at du altid har et opdateret overblik over din økonomi.',
    },
    image:
      'https://cdn.sanity.io/images/mofuirr6/production/147cdc2f924f3a3271e04330c15c6b70d9a797db-2752x1536.png?w=1600&q=85&auto=format',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
