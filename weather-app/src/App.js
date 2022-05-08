import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=4cb6b663c3d20574bbb6429186e3caf2`

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60 F</h1>
          </div>
        </div>
        <div className='botton'></div>
      </div>
    </div>
  )
}

export default App