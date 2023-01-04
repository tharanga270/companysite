import "./App.css";
import AboutCompany from "./components/AboutCompany";
import ArchitectureTextCont from "./components/ArchitectureTextCont";
import Header from "./components/Header";
import OurService from "./components/OurService";
import PhotoGalaryWhatWeDo from "./components/PhotoGalaryWhatWeDo";
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
    </>
  );
}

export default App;
