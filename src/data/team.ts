export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  email: string
  linkedin: string
  quote: string
  photo: string
  specialty?: {
    title: string
    body: string
  }
  secondaryImage?: string
}

export const team: TeamMember[] = [
  {
    slug: 'alihassan',
    name: 'Ali Ul-Hassan',
    role: 'Indehaver & Revisor',
    bio: 'Ali er stifter af Talio og har 5 års erfaring fra anerkendte revisionshuse, hvor han har arbejdet med en bred vifte af opgaver inden for regnskab, revision og økonomisk rådgivning. Han har opbygget en stærk faglig profil med fokus på at skabe struktur, overblik og værdi for virksomheder – både i den daglige drift og i mere komplekse problemstillinger. Med en kombination af teknisk indsigt og forretningsforståelse hjælper Ali virksomheder med at styrke deres beslutningsgrundlag og opbygge et solidt økonomisk fundament.',
    email: 'ah@talio.dk',
    linkedin: 'https://linkedin.com/talio',
    quote:
      'Jeg tror på, at en stærk økonomisk struktur giver virksomheder det overblik, de har brug for til at træffe bedre beslutninger og vokse med ro i maven.',
    photo:
      'https://cdn.sanity.io/images/mofuirr6/production/70f9bce510de8b1fb4ba2ebbd9194fe42fdbd2e1-1086x1448.png?w=800&q=85&auto=format',
    specialty: {
      title: 'Revision & compliance',
      body: 'Praktisk erfaring fra anerkendte revisionshuse med stærk forståelse for kvalitet, struktur og overholdelse af regler.',
    },
    secondaryImage:
      'https://cdn.sanity.io/images/mofuirr6/production/078e933edd3d8ab0d319c34e77b8b2916f635a8a-1536x1024.png?w=1200&q=85&auto=format',
  },
  {
    slug: 'michellelauridsen',
    name: 'Michelle Lauridsen',
    role: 'Revisor',
    bio: 'Michelle har over 10 års erfaring som revisor og har gennem sin karriere arbejdet indgående med bogføring og håndtering af økonomiske processer for virksomheder i forskellige størrelser. Hun har stor erfaring med at sikre korrekt og effektiv bogføring samt skabe struktur i virksomheders økonomi. Med et skarpt øje for detaljen og en systematisk tilgang er Michelle med til at sikre høj kvalitet og stabil drift i det daglige arbejde, og til at håndtere økonomiske arbejdsgange, der understøtter stabil daglig drift.',
    email: 'mjk@talio.dk',
    linkedin: 'https://linkedin.com/talio',
    quote:
      'Jeg tror på, at en stærk økonomisk struktur giver virksomheder det overblik, de har brug for til at træffe bedre beslutninger og vokse med ro i maven.',
    photo:
      'https://cdn.sanity.io/images/mofuirr6/production/9c965af35e2063cf868e86559b1c4e5fc23d6089-1086x1448.png?w=800&q=85&auto=format',
    secondaryImage:
      'https://cdn.sanity.io/images/mofuirr6/production/d5ae2b4441fe887f43a8a98a1c705b0eb3df7de5-1448x1086.png?w=1200&q=85&auto=format',
  },
]

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((t) => t.slug === slug)
}
