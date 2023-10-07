import Image from 'next/image'
import Navbar from '../components/Navbar'
import LandingSection from '../components/LandingSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}


export default Home;