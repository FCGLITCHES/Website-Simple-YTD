import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Support from './components/Support';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Hero />
        <Features />
        <Support />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;