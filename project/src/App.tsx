// import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Workshops from './components/Workshops';
import About from './components/About';
import Register from './components/Register';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundEffects from './components/BackgroundEffects';

import Loader from './components/Loader';

import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      // <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      //   <span className=''>Loading...</span>
      // </div>
      <Loader />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">

    

      <BackgroundEffects />
      <Header />
      <main>
        <Home />
        <Workshops />
        <About />
        <Register />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;