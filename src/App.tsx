import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/shared/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Programs = lazy(() => import('./pages/Programs'))
const About = lazy(() => import('./pages/About'))
const Competitive = lazy(() => import('./pages/Competitive'))
const Schedule = lazy(() => import('./pages/Schedule'))
const SportsEtudes = lazy(() => import('./pages/SportsEtudes'))
const Parents = lazy(() => import('./pages/Parents'))
const Boutique = lazy(() => import('./pages/Boutique'))
const Location = lazy(() => import('./pages/Location'))
const Contact = lazy(() => import('./pages/Contact'))

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programmes" element={<Programs />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/competitif" element={<Competitive />} />
            <Route path="/horaire" element={<Schedule />} />
            <Route path="/sports-etudes" element={<SportsEtudes />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </>
  )
}
