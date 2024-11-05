import { About, Footer, Header, Hero, Portfolio } from '../../components/index'
import "./globals.css";
export default function Home() {


  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Footer />  
      <div className="flex justify-center items-center p-4 mt-10">
      <div className="w-full max-w-lg aspect-[485/402]">
        <iframe 
          src="https://scratch.mit.edu/projects/141677189/embed" 
          allowTransparency="true" 
          allowFullScreen 
          frameBorder="0" 
          scrolling="no"
          className="w-full h-full rounded-lg shadow-lg border border-gray-300"
        />
      </div>
    </div>
    </>
  );
}
