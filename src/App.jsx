import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar'
import Page from './components/Page'
import IntegrationsPage from './components/IntegrationsPage'
import ProductPage from './components/ProductPage'
import BookAppointmentPage from './pages/Product/Book Appointment/BookAppointmentPage'
import KnowledgeBasePage from './pages/Product/Knowledge Base/KnowledgeBasePage'
import NavigateIVRPage from './pages/Product/Navigate IVR/NavigateIVRPage'
import VerifiedPhonePage from './pages/Product/Verified Phone Numbers/VerifiedPhonePage'
import PostCallPage from './pages/Product/Post Call Analysis/PostCallPage'
import Login from './pages/Auth/Login'
import Sign from './pages/Auth/Sign'
import Footer from './components/Footer'
import CTA from './components/CTA'

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/product/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/product/navigate-ivr" element={<NavigateIVRPage />} />
        <Route path="/product/verified-phone-numbers" element={<VerifiedPhonePage />} />
        <Route path="/product/post-call-analysis" element={<PostCallPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
      {!isAuthPage && <CTA />}
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App
