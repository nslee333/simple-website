import Home from "../pages/Home";
import {Header, Welcome} from "../components/Header";
import Footer from "../components/Footer";
function App() {
  return (
    <>
    <div className='background-container'>
      <div className="app">
          <Header />
        <main>
            <Home />
        </main>

        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;