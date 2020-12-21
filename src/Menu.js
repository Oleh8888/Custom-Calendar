import React from 'react';
import {useState} from 'react';
import Years from './components/Years/Years';
import Note from './components/Note/Note';
import Days from './components/Day/Days';


export default function Menu() {
   
    const monthes = [Array(12).fill('Январь'), Array(12).fill('Февраль'), Array(12).fill('Март'), Array(12).fill('Апрель'),Array(12).fill('Май'),Array(12).fill('Июнь'),Array(12).fill('Июль'),Array(12).fill('Август'),Array(12).fill('Сентябрь'),Array(12).fill('Октябрь'),Array(12).fill('Ноябрь'),Array(12).fill('Декабрь')];
    const [openMonth, setOpenMonth] = useState(false);
    const [chose, setChosen] = useState(1);
    const [openDay, setOpenDay] = useState(false);
    const [openNote, setOpenNote] = useState(false);

    
  return (
        <div >
      <Years setChosen={setChosen} setOpenMonth={setOpenMonth} setopenDay={setOpenDay}/>
      {openMonth &&(
          <button onClick={ () => {
            setOpenMonth(false);
            setOpenDay(true)
            setOpenNote(true)
          }}>
          {monthes.map((month) => (
            <div key={month} className='monthes' >
            {month[chose]}
            </div> 
          )
          )}
          </button>    
      )}
      <Days setOpenDay={setOpenDay} openDay={openDay} setOpenNote={setOpenNote} openNote={openNote}/> 
      <button> 
         <Note /> 
      </button>
    </div>
  );
}
 
