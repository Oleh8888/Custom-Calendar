import React from 'react';
import './color.css';

const colors = ['#39D1B4','#FFD712', '#0000FF', '#66BB55', '#666'];
let counter = 0;


export default class ColorButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: colors[counter]
        };
        this.changeColor =this.changeColor.bind(this);
    }

    
     changeColor = () => {
        counter++;
        if(counter===colors.length){
            counter = 0;
        }
        const newColor = this.state.color === colors[counter] ? colors[counter] : colors[counter];
        this.setState({
            color: newColor
        });
    }

    render () {
        return (
        <div style={{background: this.state.color}} >
            <button className='color-change' onClick={this.changeColor}>
                Change Color
            </button>
        </div>
        );
    }
}