import "./App.scss";
import { React } from "react";
import Drink from "./components/Drink";
import Loading from "./components/Loading";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((store) => store.loading);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading === true ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Drink />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
