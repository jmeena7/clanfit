
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080908] text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;