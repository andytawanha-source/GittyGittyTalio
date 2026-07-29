import { LegalPage } from '@/components/LegalPage'

export function Privacy() {
  return (
    <LegalPage
      title="Privatlivspolitik"
      badge="Legal"
      lastUpdated="1. januar 2026"
      version="Version 1.0"
      sections={[
        {
          heading: 'Hvem er vi?',
          paragraphs: [
            'Talio ApS er dataansvarlig for behandlingen af de personoplysninger, vi modtager i forbindelse med besøg på vores website og henvendelser fra potentielle og eksisterende kunder.',
          ],
        },
        {
          heading: 'Hvilke oplysninger indsamler vi?',
          paragraphs: [
            'Vi indsamler kun de oplysninger, du selv giver os – herunder navn, e-mailadresse og telefonnummer, når du kontakter os via vores kontaktformular, samt e-mailadresse, hvis du tilmelder dig vores nyhedsbrev.',
          ],
        },
        {
          heading: 'Formål og retsgrundlag',
          paragraphs: [
            'Vi behandler dine oplysninger for at besvare dine henvendelser og levere vores ydelser (GDPR art. 6, stk. 1, litra b), samt for at udsende nyhedsbrev baseret på dit samtykke (litra a). I forbindelse med kundeforhold kan vi også behandle oplysninger ud fra legitim interesse (litra f).',
          ],
        },
        {
          heading: 'Opbevaring',
          paragraphs: [
            'Vi opbevarer dine oplysninger, så længe det er nødvendigt for at opfylde formålet, eller som lovgivningen kræver. Nyhedsbrevsabonnenter slettes ved afmelding.',
          ],
        },
        {
          heading: 'Dine rettigheder',
          paragraphs: [
            'Du har ret til indsigt i, berigtigelse eller sletning af dine personoplysninger, begrænsning af behandlingen samt dataportabilitet. Et samtykke kan til enhver tid tilbagekaldes. For at gøre brug af dine rettigheder er du velkommen til at kontakte os.',
          ],
        },
        {
          heading: 'Klage',
          paragraphs: [
            'Har du spørgsmål til vores behandling af dine personoplysninger, er du velkommen til at kontakte os. Du kan også indgive klage til Datatilsynet på datatilsynet.dk.',
          ],
        },
        {
          paragraphs: ['Har du spørgsmål til denne politik, er du altid velkommen til at kontakte os.'],
        },
      ]}
    />
  )
}
