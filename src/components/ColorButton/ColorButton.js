import React from 'react';
import './color.css';




 export default function ColorButton(props) {
    const colors = ['#39D1B4','#FFD712', '#0000FF', '#66BB55', '#666'];
    let counter = 0;
    const {monthColor, setMonthesColor, yearColor, setYearsColor} = props;
  

    const changeYearsColor = () => {
        counter++;
        if (counter===colors.length) {
            counter = 0;
        }
        const newColor = yearColor === colors[counter] ? colors[counter] : colors[counter];
        setYearsColor(newColor)
    }

    const changeMonthesColor = () => {
        counter++;
        if (counter===colors.length) {
            counter = 0;
        }
        const newColor = monthColor === colors[counter] ? colors[counter] : colors[counter];
        setMonthesColor(newColor)
    }

        return (
        <div>
            <button className='color-change' onClick={changeYearsColor}>
                Change Year Color
            </button>
            <button className='color-change' onClick={changeMonthesColor}>
                Change Month Color
            </button>

        </div>
        );
}

