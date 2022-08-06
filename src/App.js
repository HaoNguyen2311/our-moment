import Header from "./components/Header/Header";
import DateTimeSection from "./components/DateTimeSetion/DateTimeSetion";
import TitleImage from "./components/TitleImage/TitleImage";
import VideoSection from "./components/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <DateTimeSection />
      <TitleImage />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
