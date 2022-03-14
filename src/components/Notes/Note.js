import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function MediaCard(props) {

    const deleteNote = async () => {
        const response = await fetch(`https://react-http-d5171-default-rtdb.firebaseio.com/notes/${props.id}`, {
            method: 'DELETE',
        });
        const data = response.json();
        console.log(data)
    }

    return (
        <Card sx={{ width: '80%', marginBottom: '20px' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <DeleteIcon color='error' onClick={deleteNote}/>
                <EditIcon color='primary'/>
            </CardActions>
        </Card>
    );
}
