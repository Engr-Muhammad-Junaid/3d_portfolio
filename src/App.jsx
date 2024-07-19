import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import PublicationsComponent from "./components/publication"; // Correct import
import AchievementsComponent from "./components/achievement";
import CertificatesComponent from "./components/certificate";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <AchievementsComponent/>
        <PublicationsComponent/>
        <CertificatesComponent/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
     
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
