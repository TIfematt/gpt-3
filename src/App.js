import './App.css';
import { Header, Footer, Blog, Features, WhatGpt3, Possibility } from './containers'
import { Cta, Brand, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

