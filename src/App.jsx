import "./App.scss";
import { Navbar } from "./components";

import { Contact, Guide, Header, Paths, Gallery } from "./content";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Paths />
      <Gallery />
      <Guide />
      <Contact />
    </div>
  );
}

export default App;
