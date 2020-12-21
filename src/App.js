import React from 'react';
import Menu from './Menu';
import SizeButton from './components/SizeButton/SizeButton';
import ColorButtons from './components/ColorButton/ColorButtons';

import "./index.css";
import getMonthData from './components/Day/daysMethods';

function App() {
   return ( 
   <div>
      <div>
      <Menu />
      </div>
       <div id='buttons'>
      <SizeButton />
      <ColorButtons />
      <getMonthData />
       </div>
   </div>
   );
}

export default App;