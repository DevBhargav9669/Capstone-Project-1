import React, { useState } from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
//import { Queue } from "@mui/icons-material";
//import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
//import { IconButton }from '@material-ui/core/IconButton';
//import { Close } from "@mui/icons-material/Close";
// import { styled } from "@mui/system";
import "../App.css"

const CreateQuiz = () => {
    const [open, setOpen] = useState(false);
    //const closeDialog= ()=>{}
    const buttonCSS = {
        width: '200px',
        margin: '25px',
        display: 'inline',
        color: '#000',
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Create New Quiz</Button>
            <Dialog open={open} >
                <div className="popup-styling">
                    <DialogTitle>Select Question Type</DialogTitle>
                    <CloseIcon onClick={() => setOpen(false)} />
                </div>
                <DialogContent>
                    <DialogContentText>
                        <Button variant="contained" style={buttonCSS} color='primary'>MCQ(Single correct)</Button>
                        <Button style={buttonCSS} variant="outlined">MCQ(Multiple correct)</Button>
                        <Button style={buttonCSS} variant="outlined">Short Answer(1 or 2 words)</Button>
                        <Button style={buttonCSS} variant="outlined">Description(1 or 2 lines)</Button>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    )

}
export default CreateQuiz;
