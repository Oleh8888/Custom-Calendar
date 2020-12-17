import React from 'react';
import Menu from './Menu';
import SizeButton from './components/SizeButton/SizeButton';
import ColorButton from './components/ColorButton/ColorButton';
import Note from './components/Note/Note';
import "./index.css";
import getMonthData from './components/Day/daysMethods';

function App() {
   return ( 
   <div>
      <div>
      <Menu />
      </div>
       <div id='buttons'>
      <Note />
      <SizeButton />
      <ColorButton />
      <getMonthData />
       </div>
   </div>
   );
}

export default App;