import { LegalPage } from '@/components/LegalPage'

export function Cookies() {
  return (
    <LegalPage
      title="Cookiepolitik"
      badge="Legal"
      lastUpdated="1. januar 2026"
      version="Version 1.0"
      sections={[
        {
          heading: 'Hvad er cookies?',
          paragraphs: [
            'Cookies er små tekstfiler, der gemmes på din enhed, når du besøger et website. De bruges til at huske dine præferencer, analysere trafikken på sitet og understøtte markedsføring.',
          ],
        },
        {
          heading: 'Hvilke cookies bruger vi?',
          paragraphs: [
            'Vi anvender nødvendige cookies for at sikre, at websitet fungerer korrekt. Med dit samtykke anvender vi derudover analytiske cookies (Google Analytics) til at forstå, hvordan besøgende bruger sitet, samt markedsføringscookies (Meta Pixel, Google Ads) til at vise relevante annoncer.',
          ],
        },
        {
          heading: 'Tredjepartscookies',
          paragraphs: [
            'Visse cookies sættes af tredjeparter som Google og Meta. Disse tredjeparter kan behandle dine oplysninger i henhold til deres egne privatlivspolitikker, som vi ikke er ansvarlige for.',
          ],
        },
        {
          heading: 'Administrer dine cookies',
          paragraphs: [
            'Du kan til enhver tid trække dit samtykke tilbage eller ændre dine cookiepræferencer via cookiebanneret på sitet. Du kan også slette cookies og blokere dem fremadrettet via din browsers indstillinger – bemærk dog, at dette kan påvirke funktionaliteten på sitet.',
          ],
        },
        {
          heading: 'Cookiernes levetid',
          paragraphs: [
            'Nødvendige cookies udløber typisk, når din session slutter. Analytiske og markedsføringscookies kan have en levetid på op til 13 måneder afhængigt af leverandøren.',
          ],
        },
        {
          paragraphs: ['Har du spørgsmål til denne politik, er du altid velkommen til at kontakte os.'],
        },
      ]}
    />
  )
}
