
import React, { useState } from 'react';
 import NewNote from './NewNote';
 import NoteList from './NoteList';
import './note.css';

export default function Note(props){
    const { openNote, setOpenNote } = props;
    
    const [newText, setNewText] = useState({});
    const handleChange = ({target}) => {
        const { name, value } = target;
        setNewText(prev => ({ 
            ...prev,
            id: Date.now(),
            [name]: value
        })
        );
    };

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