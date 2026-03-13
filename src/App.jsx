import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Page from './components/Page'
import IntegrationsPage from './components/IntegrationsPage'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <CTA />
      <Footer />
    </div>
  )
}

export default App
