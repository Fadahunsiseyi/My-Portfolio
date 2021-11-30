import React from 'react';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import './style.scss'
function Home() {
  return (
    <div  className="home">
      <div>
           <Header/>
      </div>

      <div>
           <Body/>
      </div>

      <div>
           <Footer/>
      </div>
      
    </div>
  );
}

export default Home;

