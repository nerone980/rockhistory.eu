import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MusicalBackground from './components/MusicalBackground'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import BandDetail from './pages/BandDetail'
import AlbumDetail from './pages/AlbumDetail'
import Timeline from './pages/Timeline'
import RockHistoryPage from './pages/RockHistoryPage'
import Preferiti from './pages/Preferiti'
import Quiz from './pages/Quiz'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="grain-overlay flex min-h-screen flex-col">
      <ScrollToTop />
      <MusicalBackground />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/band/:bandSlug" element={<BandDetail />} />
          <Route path="/band/:bandSlug/album/:albumSlug" element={<AlbumDetail />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/storia" element={<RockHistoryPage />} />
          <Route path="/preferiti" element={<Preferiti />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/supporto" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
