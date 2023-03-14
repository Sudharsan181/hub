import React from 'react';
import './App.css';
import './internal.css';
function App() {
  return(
    <body>
      <div className='App'>
        <div className='layout'>
        <nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Our Team</a></li>
      </ul>
    </li>
    <li><a href="#">Services</a>
      <ul>
        <li><a href="#">Warhousing</a></li>
        <li><a href="#">Seeding</a></li>
        <li><a href="#">Farms</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
          <div className='body'>
            <div className='company-name'>
              <h4>SK Farms &amp; Stockers</h4>
              <p className='tagline'>Quality Live Stock Products</p>
              </div>
              <div>
                <img src='https://b1883154.smushcdn.com/1883154/wp-content/uploads/2021/07/image-1200x800-1.jpeg?lossy=1&strip=1&webp=1' alt='Not Available' className='img'></img>
              </div>
            <div className='container'>
              <hr></hr>
              <p>Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness.</p>
            </div>
          </div>
        </div>
      </div>
      </body>
  );

}
export default App;