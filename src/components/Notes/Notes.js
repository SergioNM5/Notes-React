import React, {Fragment, useCallback, useEffect, useState} from 'react';
import Note from './Note'
import classes from "./Notes.module.css";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    const getNotes = useCallback(
        async () => {
            const response = await fetch('https://react-http-d5171-default-rtdb.firebaseio.com/notes.json');

            const data = await response.json();

            const loadedNotes = [];

            for (const note in data) {
                loadedNotes.push({
                    key: note,
                    title: data[note].title,
                    description: data[note].description
                })
            }

            setNotes(loadedNotes);
        }, []
    )

    useEffect(() => {
        getNotes();
    }, [getNotes])

    return (
        <div className={classes.container}>
            {notes.map(note => (
                <Note key={note.key} id={note.key} title={note.title} description={note.description}/>
            ))}
        </div>
    );
};

export default Notes;
