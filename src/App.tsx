import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { HeroCarousel } from './components/sections/HeroCarousel';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CollectionsSection } from './components/sections/CollectionsSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { ArtisansSection } from './components/sections/ArtisansSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { BlogSection } from './components/sections/BlogSection';
import { CTASection } from './components/sections/CTASection';
import { ContactSection } from './components/sections/ContactSection';
import BoutiquePage from './pages/boutique';
import ServicesPage from './pages/services';
import FormationsPage from './pages/formations';
import AboutPage from './pages/a-propos';
import PanierPage from './pages/panier';
import ConnexionPage from './pages/auth/connexion';
import InscriptionPage from './pages/auth/inscription';
import ModePage from './pages/boutique/categorie/mode';
import MacramePage from './pages/boutique/categorie/macrame';
import DecorationPage from './pages/boutique/categorie/decoration';
import AgroalimentairePage from './pages/boutique/categorie/agroalimentaire';
import './i18n';

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <CollectionsSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <ArtisansSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/boutique/mode" element={<ModePage />} />
          <Route path="/boutique/macrame" element={<MacramePage />} />
          <Route path="/boutique/decoration" element={<DecorationPage />} />
          <Route path="/boutique/agroalimentaire" element={<AgroalimentairePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/panier" element={<PanierPage />} />
        </Route>
        
        <Route element={<AuthLayout />}>
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
