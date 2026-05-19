import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NosSolutions from "./components/NosSolutions";
import VroomForBusiness from "./components/VroomForBusiness";
import ConsultationSection from "./components/ConsultationSection";
import VousEtesSection from "./components/VousEtesSection";
import ShowroomSection from "./components/ShowroomSection";
import AchetezSection from "./components/AchetezSection";

export default function HomePage() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="home page">
      <HeroSection />
      <div className="absolute inset-0" style={{ transform: "translateY(calc(100dvh - 860px))" }}>
        <AchetezSection />
        <VousEtesSection />
        <VroomForBusiness />
        <Footer />
        <ConsultationSection />
        <NosSolutions />
        <ShowroomSection />
      </div>
    </div>
  );
}
