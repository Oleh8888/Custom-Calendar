import React from 'react';
import './years.css';

   
 export default function Years(props) {
   const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];  
   const { setOpenMonth, setChosen, yearColor} = props; 
    
  return(
   <>
    {years.map((year, index) => (
    <button className='years' key={year} 
    style={{
            background: yearColor,
            borderBottom: yearColor
        }} 
      onClick={ () => {
      setOpenMonth(true) 
      setChosen(index)
    }}>
      {year}
    </button>
  )
  )}
  
  </>
  );
 }
