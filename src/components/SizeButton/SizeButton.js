import React from 'react';
import './size.css';

export default class SizeButton extends React.Component{
render () {
    return (
        <div>
            <button className='size-change'>
                Change Size
            </button>
        </div>
    );
}
}