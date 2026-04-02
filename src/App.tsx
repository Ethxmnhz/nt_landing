import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { BookPage } from './pages/BookPage'
import { ContactPage } from './pages/ContactPage'
import { EventsPage } from './pages/EventsPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'
import { StoryPage } from './pages/StoryPage'

function App() {
  return (
    <div className="site-root">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
