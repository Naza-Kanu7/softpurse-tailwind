import Banner from "./Banner/Banner";
import Download from "./Download/Download";
import FAQAccordion from "./FAQ/FAQAccordion";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Steps from "./Steps/Steps";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Features />
      <Steps />
      <FAQAccordion />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
