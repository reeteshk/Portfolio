import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Hello World</h1> */}
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <SocialLinks/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
