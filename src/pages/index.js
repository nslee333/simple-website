import Home from "../screens/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
    
      <div className="app">
        <Header>
          <h1>BendJS</h1>
        </Header>

        <main>
            <Home />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;