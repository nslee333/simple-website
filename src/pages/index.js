import Home from "../pages/Home";
import {Header, Welcome} from "../components/Header";
import Footer from "../components/Footer";
// import {Welcome} from "../components/Welcome";
import HeaderWrapper, { StyledWrapper } from "../components/HeaderWrapper";

function App() {
  return (
    <>
      <div className="app">
        <StyledWrapper>
          <Header />
          <Welcome />
        </ StyledWrapper>

        <main>
            <Home />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;