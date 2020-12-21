
import React, { useState } from 'react';
 import NewNote from './NewNote';
 import NoteList from './NoteList';
import './note.css';

export default function Note(props){
    const [newText, setNewText] = useState({});
    const { openNote, setOpenNote } = props;
    
    const handleChange = ({target}) => {
        const { name, value } = target;
        setNewText(prev => ({ 
            ...prev,
            id: Date.now(),
            [name]: value
        })
        );
    };

    // const changeColor = (counter, colors) => {
    //     counter++;
    //     if(counter===colors.length){
    //         counter = 0;
    //     }
    //     const newColor = this.state.color === colors[counter] ? colors[counter] : colors[counter];
    //     this.setState({
    //         color: newColor
    //     });
    // }

    const [allText, setAllText] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
                 if (!newText.title) return;
            setAllText((prev) => [newText, ...prev]);
            setNewText({});
    };
    return(
        <div>
        
            <h1>Note</h1>
            <NewNote 
                newText={newText}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            { <NoteList  allText={allText}   /> }
            {openNote &&(
            <button onClick={ () => {
                 setOpenNote(false);
                }}>
            </button>  
            )}
        </div>
    );
}