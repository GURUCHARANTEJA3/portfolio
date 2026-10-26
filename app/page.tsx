import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#110720] text-white flex flex-col justify-between">
      <Header />
      <main id="main-content" className="flex-1">
        <Banner />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}