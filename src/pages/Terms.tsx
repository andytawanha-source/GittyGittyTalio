import { LegalPage } from '@/components/LegalPage'

export function Terms() {
  return (
    <LegalPage
      title="Handelsbetingelser"
      badge="Legal"
      lastUpdated="1. januar 2026"
      version="Version 1.0"
      sections={[
        {
          heading: 'Accept af vilkår',
          paragraphs: [
            'Ved at indgå aftale med Talio ApS accepterer du disse handelsbetingelser. Vilkårene gælder for alle ydelser leveret af Talio ApS, medmindre andet er aftalt skriftligt.',
          ],
        },
        {
          heading: 'Vores ydelser',
          paragraphs: [
            'Talio ApS leverer regnskabs-, økonomi- og rådgivningsydelser til virksomheder. Omfanget og indholdet af den konkrete ydelse aftales individuelt og bekræftes skriftligt forud for opstart.',
          ],
        },
        {
          heading: 'Betaling',
          paragraphs: [
            'Honorar fastsættes i den individuelle aftale. Fakturaer forfalder til betaling senest 14 dage efter fakturadato. Ved forsinket betaling beregnes renter i henhold til renteloven.',
          ],
        },
        {
          heading: 'Fortrolighed',
          paragraphs: [
            'Alle oplysninger modtaget i forbindelse med et kundeforhold behandles fortroligt og videregives ikke til tredjeparter uden forudgående samtykke, medmindre lovgivningen kræver det.',
          ],
        },
        {
          heading: 'Ansvarsbegrænsning',
          paragraphs: [
            'Talio ApS er ikke ansvarlig for indirekte tab, driftstab eller følgeskader. Vores erstatningsansvar er under alle omstændigheder begrænset til det honorar, der er betalt for den konkrete ydelse i den seneste 12-måneders periode.',
          ],
        },
        {
          heading: 'Lovvalg og værneting',
          paragraphs: [
            'Enhver tvist afgøres efter dansk ret ved de almindelige danske domstole med Københavns Byret som første instans.',
          ],
        },
        {
          paragraphs: ['Har du spørgsmål til denne politik, er du altid velkommen til at kontakte os.'],
        },
      ]}
    />
  )
}
