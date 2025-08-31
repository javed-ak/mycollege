import HeroSection from '@/components/home/HeroSection';
import NewsNotice from '@/components/home/NewsNotice';
import AboutSection from '@/components/home/AboutSection';
import PrincipalMessage from '@/components/home/PrincipalMessage';
import Toppers from '@/components/home/Toppers';
import GalleryPreview from '@/components/home/GalleryPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsNotice />
      <AboutSection />
      <PrincipalMessage />
      <Toppers />
      <GalleryPreview />
    </>
  );
}