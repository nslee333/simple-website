import Home from "../pages/Home";
import {Header, Welcome} from "../components/Header";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <div className="app">
          <Header />
        <main>
            <Home />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;