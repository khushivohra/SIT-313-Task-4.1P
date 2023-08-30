import React from 'react';
import "./navbar2.css";

function Navbar2() {
    return (
      <nav>
        <div className="navbar2">
          <ul>
            <li><a href="#">SIGN UP FOR DAILY INSIDER</a></li>
          
          </ul>
          <div className="search-box2">
            <input type="text" name="search" id="Search" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>

          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar2;