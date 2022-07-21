import Navbar from "./components/navbar";
import MoviePage from "./modules";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <MoviePage />

      <Footer />
    </div>
  );
};

export default App;
