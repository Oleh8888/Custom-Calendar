import React from 'react';
import './years.css';

   
 export default function Years(props) {
   const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];  
   const { setOpenMonth, setChosen} = props; 
  
     
  return(
   <div>
    {years.map((year, index) => (
    <button className='years' key={year} onClick={ () => {
      setOpenMonth(true) 
      setChosen(index)
      
    }}>
      {year}
    </button>
  )
  )}
  
  </div>
  );
 }
