import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/ConsentBanner'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { ServiceDetail } from '@/pages/ServiceDetail'
import { CraftsmenLanding } from '@/pages/CraftsmenLanding'
import { About } from '@/pages/About'
import { Team } from '@/pages/Team'
import { Blog } from '@/pages/Blog'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { Cookies } from '@/pages/Cookies'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/bogholder-til-haandvaerkere" element={<CraftsmenLanding />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/om-os" element={<About />} />
        <Route path="/team/:slug" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/privatlivspolitik" element={<Privacy />} />
        <Route path="/handelsbetingelser" element={<Terms />} />
        <Route path="/cookiepolitik" element={<Cookies />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}
