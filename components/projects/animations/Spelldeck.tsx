import React from 'react'
import './spelldeck.css' // Make sure to adjust the path to your CSS file

export default function Spelldeck() {
  return (
    <div className="book">
      <div className="inner">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
        <ul>
          {Array.from({ length: 18 }, (_, index) => (
            <li
              key={index}
              className="page"
              style={{ animationDelay: `${index * 0.1}s` }} // Delay each page animation
            ></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

