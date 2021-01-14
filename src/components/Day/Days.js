import React from 'react';
import classnames from 'classnames';
import * as daysMethods from './daysMethods';
import './day.css';


//  class Day extends React.Component {
//     static defaultProps = {
//         date: new Date(),
//          weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
//          onChange: Function.prototype
//     };

//     state = {
//         date: this.props.date,
//         currentDate: new Date(),
//          selectedDate: null
//     };

//     get year() {
//         return this.state.date.getFullYear();
//     }

//     get month() {
//         return this.state.date.getMonth();
//     }

//     get day() {
//         return this.state.date.getDate();
//     }



//     handleDayClick = date => {
//         this.setState({ selectedDate: date });
        
//         this.props.onChange(date);
//     };

//     render() {
//         const { years, monthNames, weekDayNames } = this.props;
//         const { currentDate, selectedDate } = this.state;

//         const monthData = daysMethods.getMonthData(this.year, this.month);

//         return (
//             <div className="calendar">

//                 <table>
//                     <thead>
//                         <tr>
//                             {weekDayNames.map(name =>
//                                 <th key={name}>{name}</th>    
//                             )}
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {monthData.map((week, index) =>
//                             <tr key={index} className="week">
//                                 {week.map((date, index) => date ?
//                                     <td
//                                         key={index}
//                                         className={classnames('day', {
//                                             'today': daysMethods.areEqual(date, currentDate),
//                                             'selected': daysMethods.areEqual(date, selectedDate)
//                                         })}
//                                         onClick={() => this.handleDayClick(date)}
//                                     >{date.getDate()}</td>
//                                     :
//                                     <td key={index} />
//                                 )}
//                             </tr> 
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }


export default function Days (props) {
  
    const { setOpenDay, openDay, setOpenNote} = props; 
    
    return (
      <button>
    {openDay &&(
      <button onClick={ () => {
        setOpenDay(false);
        setOpenNote(false)
      }}>
      <div>
          {daysMethods.getDayOfWeek.map((month) => {
              <>
            {month}
              </>
          }
          )}
      </div>
      </button>  
    )}
    </button>
    );
  }