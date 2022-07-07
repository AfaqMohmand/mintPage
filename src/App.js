import "./App.css";
import MintFooter from "./Components/mint-page/MintFooter";
import { MintPage } from "./Components/mint-page/MintPage";
import Navbar from "./Components/mint-page/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MintPage />
      <MintFooter />
    </div>
  );
};
export default App;
