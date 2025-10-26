import HeroSection from "./components/hero"
import MotoSection from "./components/moto";
import RetreatMagazineSection from "./components/magazine"
import MeetTheTeamSection from "./components/meettheteam"
import FooterSection from "./components/footer"

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MotoSection/>
      <RetreatMagazineSection/>
      <MeetTheTeamSection/>
      <FooterSection/>
    </div>
  );
}
