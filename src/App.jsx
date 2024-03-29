import Home from "./Components/Home/Home";
import Navbar from "./Components/Nabvar/Navbar";

function App() {
  return (
    <>
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto p-4 sm:p-9">
          <Navbar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
