import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import MusicalBackground from './components/MusicalBackground'
import Home from './pages/Home'
import BandDetail from './pages/BandDetail'
import AlbumDetail from './pages/AlbumDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="grain-overlay min-h-screen">
      <MusicalBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/band/:bandSlug" element={<BandDetail />} />
          <Route path="/band/:bandSlug/album/:albumSlug" element={<AlbumDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
