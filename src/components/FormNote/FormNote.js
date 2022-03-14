import React, {useState} from 'react';
import classes from './FormNote.module.css'
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

const FormNote = (props) => {
    const history = useHistory();
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const changeDescriptionHandler = (event) => {
        setEnteredDescription(event.target.value)
    }

    const submitFormHandler = async (event) => {
        event.preventDefault();

        const title = enteredTitle;
        const description = enteredDescription;

        const note = {
            title,
            description
        }

        const response = await fetch('https://react-http-d5171-default-rtdb.firebaseio.com/notes.json', {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)

        console.log(note);
        setEnteredTitle('');
        setEnteredDescription('');
        history.replace('/');
    }

    return (
        <form className={classes.container} onSubmit={submitFormHandler}>
            <div className={classes.inputs}>
                <label>Title</label>
                <input type='text' onChange={changeTitleHandler} value={enteredTitle}/>
            </div>
            <div className={classes.inputs}>
                <label>Description</label>
                <input type='text' onChange={changeDescriptionHandler} value={enteredDescription}/>
            </div>
            <Button variant="contained" color='primary' type='submit'>Submit</Button>
        </form>
    );
};

export default FormNote;
