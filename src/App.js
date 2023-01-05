import "./App.css";
import "./media.css";
import AboutCompany from "./components/AboutCompany";
import ArchitectureTextCont from "./components/ArchitectureTextCont";
import Comment from "./components/Comment";
import EmbeddedArchitecture from "./components/EmbeddedArchitecture";
import Footer from "./components/Footer";
import FullService from "./components/FullService";
import Header from "./components/Header";
import OurService from "./components/OurService";
import PhotoGalaryWhatWeDo from "./components/PhotoGalaryWhatWeDo";
import Singup from "./components/Singup";
import WhoAreTheBest from "./components/WhoAreTheBest";
function App() {
  return (
    <>
      <Header />
      <PhotoGalaryWhatWeDo />
      <ArchitectureTextCont />
      <OurService />
      <WhoAreTheBest />
      <AboutCompany />
      <EmbeddedArchitecture />
      <Comment />
      <FullService />
      <Singup />
      <Footer />
    </>
  );
}

export default App;
