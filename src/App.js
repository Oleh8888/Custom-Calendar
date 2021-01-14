import React from 'react';
import Menu from './Menu';
import SizeButton from './components/SizeButton/SizeButton';


import "./index.css";
import getMonthData from './components/Day/daysMethods';

function App() {
   
   return ( 
   <div >
      <div>
      <Menu />
      </div>
       <div id='buttons'>
      <SizeButton />
      <getMonthData />
       </div>
   </div>
   );
}

export default App;